/** Only an originating catalogue card may supply a contextual return destination. */
export function getProjectReturnTo(state: unknown): string | undefined {
  if (!state || typeof state !== "object" || !("projectReturnTo" in state)) return;
  const destination = state.projectReturnTo;
  if (typeof destination === "string"
    && /^\/projects(?:\?[^#]*)?#project-[a-z0-9-]+$/.test(destination)) return destination;
}
