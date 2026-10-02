/** Consistent display and dialing for the source office directory. */
export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  return digits.length === 10
    ? `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    : value;
}

export function phoneHref(value: string) {
  const digits = value.replace(/\D/g, "");
  return `tel:+${digits.length === 10 ? `1${digits}` : digits}`;
}
