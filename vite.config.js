import { defineConfig } from 'vite'

// The landing page is a plain static index.html — Vite is used only for the
// `npm run dev` live-reload server. Deploy is still just committing the files
// (index.html, where/, .nojekyll) and pushing; no build step required.
export default defineConfig({
  server: {
    host: true, // reachable from Windows over the WSL2 IP
  },
})
