# Geolabs website behavior

This public marketing website serves prospective clients and applicants. Source authority is the user request and Wix saved New/Newer content documented in `docs/MIGRATION.md`. No local accounts, uploads, payments, publishing controls, or destructive operations exist.

- All routes share the shell, original Geolabs branding, design tokens, and responsive behavior. Route changes reset scroll and focus the main landmark; anchor destinations account for the sticky header.
- Navigation collapses at 760px. Its button exposes expanded state. Escape closes it and restores focus; following a route closes it. The list is nonmodal and remains keyboard accessible.
- Homepage background video uses the original Geolabs cover footage. It autoplays muted and loops inline when motion is permitted. Reduced-motion preference suppresses autoplay; changing that preference pauses playback. A named native button pauses/resumes playback. The poster is a real frame from the clip, and a YouTube link opens the requested full video.
- The portfolio renders the complete small local collection. Search and market filters combine and persist in URL parameters; browser Back restores the query. No results offers a clear-filters button; the search clear action restores input focus.
- Project/service cards lead to individual pages. Breadcrumbs link to owning collections. Unknown routes show the site 404 and a working home link.
- Leadership credentials use native details/summary. Draft collections and pages display persistent warnings and noindex metadata. Drafts are publicly accessible review content, not authenticated previews.
- Careers opportunities link to careers.geolabs.net and application actions to /apply on that host. No resume-by-email application action exists. Contact uses actual phone, email, and maps links, without simulated form submission.
- Content and images are served locally. No remote loading state, server mutation, retry, or offline synchronization is implied. Images reserve card/hero geometry; below-fold images load lazily. Visible focus, semantic controls, image alternatives, reduced motion, and 320px reflow are required.
