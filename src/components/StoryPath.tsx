import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./StoryPath.css";

export function StoryPath() {
  return <nav className="container story-path" aria-label="Follow the Geolabs story">
    <span>Follow our story</span>
    <a href="#our-roots">Our roots</a>
    <a href="#home-place-story">A place transformed</a>
    <a href="#the-work">The work</a>
    <a href="#the-people">The people</a>
    <a href="#next-conversation">Your project</a>
  </nav>;
}

export function StoryCoda() {
  return <section className="container story-coda" id="next-conversation" tabIndex={-1} aria-labelledby="story-coda-heading">
    <div><h2 id="story-coda-heading">Let’s talk about your next chapter.</h2><p>Tell us about your site and what you are planning.</p></div>
    <Link className="arrow-link" to="/contact">Talk with our team<ArrowUpRight size={19} aria-hidden="true" /></Link>
  </section>;
}
