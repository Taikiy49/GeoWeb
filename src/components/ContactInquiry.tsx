import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const messageLimit = 1500;
const requiredFields = ["firstName", "lastName", "email", "message"] as const;
type RequiredField = typeof requiredFields[number];
type FieldErrors = Partial<Record<RequiredField, string>>;
const requiredMessages: Record<RequiredField, string> = {
  firstName: "Enter your first name.",
  lastName: "Enter your last name.",
  email: "Enter your email address.",
  message: "Enter a message about your project or inquiry.",
};

function fieldError(field: HTMLInputElement | HTMLTextAreaElement, name: RequiredField) {
  if (!field.value.trim()) return requiredMessages[name];
  if (field.validity.typeMismatch) return "Enter a valid email address, such as name@company.com.";
  if (field.validity.tooLong) return "Shorten this field to the character limit.";
  return undefined;
}

/** Wix's field set, with an explicit email handoff until a delivery backend is configured. */
export function ContactInquiry() {
  const [draft, setDraft] = useState<string>();
  const [messageLength, setMessageLength] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const draftLink = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (draft) {
      draftLink.current?.focus({ preventScroll: true });
      draftLink.current?.scrollIntoView({ block: "nearest" });
    }
  }, [draft]);

  const errorProps = (name: RequiredField) => ({
    "aria-invalid": errors[name] ? true as const : undefined,
    "aria-describedby": errors[name] ? `inquiry-${name}-error` : undefined,
  });

  function update(event: FormEvent<HTMLFormElement>) {
    setDraft(undefined);
    const field = event.target;
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;
    const name = field.name as RequiredField;
    if (errors[name]) setErrors(current => ({ ...current, [name]: fieldError(field, name) }));
  }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors: FieldErrors = {};
    let firstInvalid: HTMLInputElement | HTMLTextAreaElement | undefined;
    requiredFields.forEach(name => {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      const error = fieldError(field, name);
      if (error) {
        nextErrors[name] = error;
        firstInvalid ??= field;
      }
    });
    setErrors(nextErrors);
    if (firstInvalid) {
      setDraft(undefined);
      firstInvalid.focus({ preventScroll: true });
      firstInvalid.scrollIntoView({ block: "center" });
      return;
    }
    const values = new FormData(event.currentTarget);
    const name = `${String(values.get("firstName")).trim()} ${String(values.get("lastName")).trim()}`;
    const body = `${values.get("message")}\n\n${name}\nEmail: ${values.get("email")}\nPhone: ${values.get("phone") || "Not provided"}`;
    setDraft(`mailto:hawaii@geolabs.net?subject=${encodeURIComponent(`Website inquiry from ${name}`)}&body=${encodeURIComponent(body)}`);
  }
  return <section className="section container inquiry-section" aria-labelledby="inquiry-heading">
    <div><h2 id="inquiry-heading">Leave us a message</h2><p>Prepare your message below, then open it in your email app to send it to <a href="mailto:hawaii@geolabs.net">hawaii@geolabs.net</a>.</p></div>
    <form noValidate onSubmit={prepare} onChange={update} className="inquiry-form">
      <p className="inquiry-required">All fields are required except phone.</p>
      <div className="inquiry-names">
        <div className="inquiry-field"><label htmlFor="inquiry-first-name">First name</label><input id="inquiry-first-name" name="firstName" autoComplete="given-name" required maxLength={100} {...errorProps("firstName")} /><p id="inquiry-firstName-error" className="field-error">{errors.firstName}</p></div>
        <div className="inquiry-field"><label htmlFor="inquiry-last-name">Last name</label><input id="inquiry-last-name" name="lastName" autoComplete="family-name" required maxLength={100} {...errorProps("lastName")} /><p id="inquiry-lastName-error" className="field-error">{errors.lastName}</p></div>
      </div>
      <div className="inquiry-field"><label htmlFor="inquiry-email">Email</label><input id="inquiry-email" name="email" type="email" autoComplete="email" spellCheck={false} required maxLength={254} {...errorProps("email")} /><p id="inquiry-email-error" className="field-error">{errors.email}</p></div>
      <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
      <div className="inquiry-message">
        <label>Leave us a message…<textarea className="resize-none" name="message" rows={5} required maxLength={messageLimit} aria-invalid={errors.message ? true : undefined} aria-describedby={`message-length${errors.message ? " inquiry-message-error" : ""}`} onChange={event => {
          setMessageLength(event.target.value.length);
          event.currentTarget.style.height = "auto";
          event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;
        }} /></label>
        <div className="inquiry-message-meta"><p id="inquiry-message-error" className="field-error">{errors.message}</p><span id="message-length" className="inquiry-message-count">{messageLength.toLocaleString("en-US")} / 1,500 characters</span></div>
        <span className="sr-only" role="status">{messageLength === messageLimit ? "Message limit reached. Shorten your message to add more text." : ""}</span>
      </div>
      <div className="inquiry-submit"><button className="button button-yellow" type="submit">Prepare email <ArrowUpRight size={18} aria-hidden="true" /></button><p className="inquiry-feedback" role="alert">{Object.values(errors).some(Boolean) ? "Check the highlighted fields before preparing your email." : ""}</p></div>
      {draft && <div className="inquiry-handoff"><p role="status">Your email draft is ready. It has not been sent.</p><a ref={draftLink} href={draft} className="arrow-link">Open draft in your email app <ArrowUpRight size={18} aria-hidden="true" /></a></div>}
    </form>
  </section>;
}
