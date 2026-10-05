# Test website hosting

Public staging domain: https://test.geolabs.net

Vercel project: `geolabs-main-website` in `taikiy49s-projects`. GitHub repository: `Taikiy49/geolabs-main-website`, production branch `main`. Vite builds `dist` with `npm run build`. Repository pushes trigger deployment through the connected Vercel Git integration.

DNS is managed in Wix. The only requested record change is CNAME `test.geolabs.net`, TTL 1 hour, from `base44.onrender.com` to `d1f338d741962b13.vercel-dns-017.com`. Root, www, mail, careers and other records remain unchanged. To roll back the DNS routing, restore the former CNAME value in Wix.

This is the public test site. `robots.txt` disallows crawling and the Vercel response header sets `X-Robots-Tag: noindex, nofollow` across the deployment. Revisit the staging-wide rules before moving to the primary production domain; draft pages should retain their own noindex rules. The internal source research and Markdown documents are excluded from deployment via `.vercelignore`.

The homepage uses the same 38-second drilling footage observed on Wix and visually matched to the owner's YouTube link. Its local 720p copy is about 5 MB, muted and optimized for streaming. Autoplay honors reduced motion and visibility; play/pause controls remain available. The featured-project filmstrip separately offers the HDOT walkway video with native playback controls and a retry state. No YouTube API or credentials are required.
