// Focused lifecycle checks against the actual hook, without a browser or new dependencies.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const ts = require('typescript');
const source = fs.readFileSync(path.join(root, 'src/components/usePageMotion.ts'), 'utf8');
const js = ts.transpile(source.replace(/import[^;]+;/, ''), { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS });

function harness(reduced = false, observation = true, timing = '560ms') {
  const refs = []; let cursor = 0, cleanup;
  const events = new Map(), docEvents = new Map(), mediaEvents = new Map();
  const calls = [], observers = [], candidates = [];
  class Element {
    constructor(kind, parent = null, box = { left: 0, width: 1000, top: 1200 }) {
      this.kind = kind; this.parentElement = parent; this.box = box; this.textContent = 'Real content'; this.attributes = new Map();
    }
    matches(selector) { return selector.split(',').some(s => {s=s.trim();return s===this.kind || (s.startsWith('[') && this.attributes.has(s.slice(1,-1)));}); }
    closest(selector) { let el = this; while (el) { if (el.matches(selector)) return el; el = el.parentElement; } return null; }
    getBoundingClientRect() { return this.box; }
    setAttribute(key, value) { this.attributes.set(key, value); }
    removeAttribute(key) { this.attributes.delete(key); }
    querySelectorAll() { return candidates.filter(el => {let p = el.parentElement; while (p) {if(p===this) return true;p=p.parentElement;} return false;}); }
    animate(frames, options) { const a = {effect: {target: this}, cancelled: false, cancel() {this.cancelled = true;}}; calls.push({element: this, frames, options, animation: a}); return a; }
  }
  class Observer {
    constructor(callback) { this.callback = callback; this.targets = new Set(); observers.push(this); }
    observe(el) { this.targets.add(el); }
    unobserve(el) { this.targets.delete(el); }
    disconnect() { this.targets.clear(); }
  }
  const preference = {matches: reduced, addEventListener: (name, cb) => mediaEvents.set(name, cb), removeEventListener: name => mediaEvents.delete(name)};
  const win = {innerHeight: 800, matchMedia: () => preference, addEventListener: (name, cb) => events.set(name, cb), removeEventListener: name => events.delete(name)};
  if (observation) win.IntersectionObserver = Observer;
  const context = vm.createContext({exports: {}, Element, IntersectionObserver: Observer, window: win,
    document: {documentElement: {}, querySelectorAll: () => candidates, addEventListener: (name, cb) => docEvents.set(name, cb), removeEventListener: name => docEvents.delete(name)},
    getComputedStyle: () => ({getPropertyValue: key => ({'--motion-reveal':timing,'--reveal-distance':'32px','--ease-out':'cubic-bezier(.16, 1, .3, 1)'})[key] || ''}),
    useRef: initial => refs[cursor++] ||= {current: initial},
    useEffect: callback => {cleanup = callback();},
  });
  vm.runInContext(js, context);
  const render = route => {cleanup?.(); cursor = 0; context.exports.usePageMotion(route);};
  const intersect = () => observers.forEach(o => o.callback([...o.targets].map(target => ({target, isIntersecting: true}))));
  return {Element,candidates,calls,events,docEvents,preference,mediaEvents,observers,render,intersect,cleanup:()=>cleanup?.()};
}

const checks = [];
for (const [name,reduced,observation] of [['reduced-motion',true,true], ['no-observer',false,false]]) {
  const h = harness(reduced, observation); const p = new h.Element('p'); h.candidates.push(p); h.render('/about');
  assert.equal(h.observers.length,0); assert.equal(p.attributes.has('data-reveal-pending'),false); assert.equal(h.calls.length,0); h.cleanup(); checks.push(name);
}
const h = harness();
const layout = new h.Element('.service-card');
const left = new h.Element('div', layout, {left:0,width:450,top:1200});
const right = new h.Element('div', layout, {left:550,width:450,top:1200});
const a = new h.Element('h2', left), b = new h.Element('p', right);
h.candidates.push(a,b); h.render('/services'); assert(a.attributes.has('data-reveal-pending')); h.intersect();
assert.equal(h.calls[0].frames[0].transform,'translateX(-32px)'); assert.equal(h.calls[1].frames[0].transform,'translateX(32px)'); assert.equal(h.calls[0].options.duration,560); checks.push('opposite-column-directions');
h.events.get('resize')(); h.intersect(); assert.equal(h.calls.length,2); checks.push('resize-does-not-replay');
h.cleanup(); assert(h.calls.every(c=>c.animation.cancelled)); assert.equal(h.events.size,0); assert.equal(h.docEvents.size,0); checks.push('cleanup-cancels-and-unsubscribes');

const mobile = harness(); const stack = new mobile.Element('.page-intro'); const title = new mobile.Element('h1',stack,{left:0,width:1000,top:1200}); mobile.candidates.push(title); mobile.render('/about'); mobile.intersect(); assert.equal(mobile.calls[0].frames[0].transform,'translateY(16px)'); checks.push('stacked-layout-small-rise');

for (const event of ['preference','print','focus','cleanup']) {
  const test = harness(); const text = new test.Element('p'); test.candidates.push(text); test.render('/about'); assert(text.attributes.has('data-reveal-pending'));
  if(event==='preference') {test.preference.matches=true;test.mediaEvents.get('change')();}
  if(event==='print') test.events.get('beforeprint')();
  if(event==='focus') test.docEvents.get('focusin')({target:text});
  if(event==='cleanup') test.cleanup();
  assert.equal(text.attributes.has('data-reveal-pending'),false); checks.push(`${event}-reveals-pending-content`);
}

const filter = harness(); const card = new filter.Element('.project-card'); const caption = new filter.Element('h2',card); filter.candidates.push(caption); filter.render('/projects'); filter.intersect();
filter.candidates.splice(0,1,card); filter.render('/projects?q=hawaii'); filter.intersect(); assert.equal(filter.calls.length,1); checks.push('retained-project-does-not-replay-on-search');
const added = new filter.Element('.project-card'); filter.candidates.push(added); filter.render('/projects?q=maui'); filter.intersect(); assert.equal(filter.calls.length,2); assert.equal(filter.calls[1].options.duration,280); assert.equal(filter.calls[1].options.delay,0); checks.push('new-filter-result-short-entrance');

const production = harness(false,true,'.56s'); const productionText = new production.Element('p'); production.candidates.push(productionText); production.render('/about'); production.intersect(); assert.equal(production.calls[0].options.duration,560); checks.push('minified-seconds-convert-to-waapi-milliseconds');
console.log(JSON.stringify({passed:checks.length,checks},null,2));
