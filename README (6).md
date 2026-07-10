# 🎬 Shruti Sharma — Cinematic Portfolio

A full-screen, scroll-driven portfolio site with an actual **AI voice narrating each section as you scroll** — using the browser's own built-in text-to-speech engine. No API keys, no backend, no cost.

**[Live Demo](#)** — replace this with your GitHub Pages link after deploying (steps below)

![Portfolio preview](https://via.placeholder.com/900x500/050507/FF2D9E?text=Shruti+Sharma+%E2%80%94+Cinematic+Portfolio)

## Features

- 🎙️ **Real AI voice narration** — click "Enable AI Narration" and the browser's `SpeechSynthesis` API reads each section aloud as it scrolls into view, using a different, natural-sounding voice built right into the browser
- 🌌 **Full-viewport cinematic sections** — each section is its own scene, with a soft colored gradient orb and a scroll-reveal fade/slide animation
- 🖱️ **Dot navigation** — a minimal right-side nav tracks which section is active and jumps to any section on click
- 🗂️ **Data-driven content** — every word of text lives in `content.js`; the HTML/CSS/JS template never needs to change to reuse this for a different person or a content update
- 📱 **Fully responsive** — works down to mobile widths, with the dot nav hidden on small screens

## Tech Stack

- Vanilla JavaScript (no framework, no build step)
- **Web Speech API** (`SpeechSynthesis`) for in-browser AI narration — a real browser feature, not a fake/mocked voice
- `IntersectionObserver` for scroll-reveal animations and section-tracking
- Google Fonts: [Sora](https://fonts.google.com/specimen/Sora), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## Getting Started

```bash
git clone https://github.com/Shruti-sharma09/portfolio.git
cd portfolio
open index.html   # or just double-click the file
```

No install, no dependencies — pure HTML/CSS/JS.

## Deploying to GitHub Pages (free hosting)

1. Push this repo to GitHub.
2. Go to **Settings → Pages** in your repo.
3. Under **Source**, select the `main` branch and `/ (root)` folder, then **Save**.
4. Your site goes live at `https://shruti-sharma09.github.io/portfolio/` within a minute or two.
5. Update the "Live Demo" link at the top of this README.

## Editing your content

Everything text-based — your name, tagline, section copy, project descriptions, and even what the AI voice says for each section — lives in **`content.js`**. Open it, edit the strings, save, and refresh. The HTML, CSS, and JS logic never need to change.

To add a new project, just add another object to the `projects` array in `content.js`:

```js
{
  title: "Project Name",
  description: "One sentence describing what it does.",
  problem: "One or two sentences on the problem it solves.",
  tags: ["Tech", "Stack", "Tags"],
  github: "https://github.com/you/repo",
  live: "https://your-live-demo-url.com", // or null if there isn't one
  accent: "teal" // one of: magenta, teal, blue, violet
}
```

## How the AI narration works

Clicking "Enable AI Narration" doesn't call any external AI service — it uses `window.speechSynthesis`, a text-to-speech engine that ships with every modern browser. As each section scrolls to the center of the viewport, `IntersectionObserver` detects it and triggers `speechSynthesis.speak()` with that section's narration text (defined per-section in `content.js` as the `speech` field). Switching sections cancels any in-progress speech first, so it never overlaps.

## Project Structure

```
portfolio/
├── index.html      # minimal shell — all content is rendered by app.js
├── styles.css       # cinematic dark theme, gradient orbs, reveal animations
├── content.js       # ALL text content — edit this to update your portfolio
├── app.js           # rendering, scroll-reveal, dot nav, AI narration logic
└── README.md
```

## Possible Extensions

- Let visitors pick a different browser voice/accent from a dropdown
- Add a light/dark toggle
- Animate the gradient orbs to drift slowly instead of staying static
- Add a resume download button in the contact section

## License

MIT — free to use, modify, and share.

---

Built as a portfolio project demonstrating both cinematic front-end design and a genuinely functional (not simulated) use of the browser's built-in AI voice engine.
