import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

/** Wix's field set, with an explicit email handoff until a delivery backend is configured. */
export function ContactInquiry() {
  const [draft, setDraft] = useState<string>();
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = `${values.get("firstName")} ${values.get("lastName")}`.trim();
    const body = `${values.get("message")}\n\n${name}\nEmail: ${values.get("email")}\nPhone: ${values.get("phone") || "Not provided"}`;
    setDraft(`mailto:hawaii@geolabs.net?subject=${encodeURIComponent(`Website inquiry from ${name}`)}&body=${encodeURIComponent(body)}`);
  }
  return <section className="section container inquiry-section" aria-labelledby="inquiry-heading">
    <div><h2 id="inquiry-heading">Leave us a message</h2><p>Prepare your message below, then open it in your email app to send it to <a href="mailto:hawaii@geolabs.net">hawaii@geolabs.net</a>.</p></div>
    <form onSubmit={prepare} onChange={() => setDraft(undefined)} className="inquiry-form">
      <div className="inquiry-names">
        <label>First name<input name="firstName" autoComplete="given-name" required maxLength={100} /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required maxLength={100} /></label>
      </div>
      <label>Email<input name="email" type="email" autoComplete="email" spellCheck={false} required maxLength={254} /></label>
      <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
      <label>Leave us a message…<textarea name="message" rows={5} required maxLength={1500} /></label>
      <button className="button button-yellow" type="submit">Prepare email <ArrowUpRight size={18} /></button>
      {draft && <div className="inquiry-handoff" role="status"><p>Your email draft is ready. It has not been sent.</p><a href={draft} className="arrow-link">Open draft in your email app <ArrowUpRight size={18} /></a></div>}
    </form>
  </section>;
}
