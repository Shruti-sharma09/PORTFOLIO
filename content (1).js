/* ===========================================================
   Content data — swap this file to reuse the same cinematic
   template for a different person. Nothing else needs to change.
   =========================================================== */

var PORTFOLIO_CONTENT = {
  name: "SHRUTI SHARMA",
  role: "ASPIRING UI/UX DESIGNER",
  heroLine: "Crafting interfaces people actually enjoy using.",
  heroSpeech: "Hi, I'm Shruti Sharma. I'm a UI and UX designer in progress, learning Figma and design systems, and I build every idea as a real, working project instead of just a mockup. Scroll down and I'll show you what I mean.",

  sections: [
    {
      id: "genesis",
      label: "01 // GENESIS",
      title: "Who I Am",
      accent: "magenta",
      body: "A second-year Computer Science student with a growing focus on UI/UX design. I like combining logical, structured thinking with careful visual and interaction detail — not just how something looks, but how it feels to use.",
      speech: "A second year Computer Science student with a growing focus on UI and UX design. I like combining logical, structured thinking with careful visual and interaction detail."
    },
    {
      id: "purpose",
      label: "02 // PURPOSE",
      title: "Passion",
      accent: "teal",
      body: "Designing tools that solve a real, specific problem — a contrast checker for accessibility, a color extractor for moodboards — rather than generic interfaces. If I can't explain why a design decision helps the user, I don't make it.",
      speech: "Designing tools that solve a real, specific problem, rather than generic interfaces. If I can't explain why a design decision helps the user, I don't make it."
    },
    {
      id: "horizon",
      label: "03 // HORIZON",
      title: "Goals",
      accent: "blue",
      body: "Looking for design-focused internships and collaborative projects where I can work closely with developers, learn how design systems hold up in real production code, and keep growing from 'aspiring' toward 'working' designer.",
      speech: "Looking for design focused internships and collaborative projects where I can work closely with developers and keep growing from aspiring toward working designer."
    },
    {
      id: "telemetry",
      label: "04 // TELEMETRY",
      title: "What I'm Learning",
      accent: "violet",
      body: "Deepening my Figma skills, learning how token-based design systems actually get built in code, and studying accessibility standards like WCAG so my designs hold up for every user, not just the average one.",
      speech: "Deepening my Figma skills, learning how token based design systems actually get built in code, and studying accessibility standards so my designs hold up for every user."
    }
  ],

  projectsIntro: {
    label: "05 // SELECTED WORK",
    title: "Projects"
  },

  projects: [
    {
      title: "Atlas",
      description: "A living design system — color tokens, typography, spacing, and a full component library with live light/dark theming.",
      problem: "Design systems usually live only in Figma. Atlas is one built entirely in code, with every color as a token, so switching themes updates every single component instantly.",
      tags: ["Design Systems", "CSS Tokens", "Accessibility"],
      github: "https://github.com/Shruti-sharma09/Atlas",
      live: "https://shruti-sharma09.github.io/Atlas/",
      accent: "magenta"
    },
    {
      title: "MoodSort",
      description: "An AI-powered moodboard organizer that automatically sorts a batch of inspiration photos into design-friendly categories.",
      problem: "Organizing inspiration images by hand is slow. MoodSort classifies each photo with a pretrained neural network, then groups them into Nature, Architecture, People, and more — instantly.",
      tags: ["ml5.js", "AI Classification", "Moodboards"],
      github: "https://github.com/Shruti-sharma09/moodsort",
      live: "https://shruti-sharma09.github.io/moodsort/",
      accent: "teal"
    },
    {
      title: "Chroma",
      description: "A color palette extractor and WCAG contrast checker, built as a real toolkit for accessible design work.",
      problem: "Picking accessible color pairs is guesswork without a tool. Chroma extracts palettes straight from an image and instantly flags whether a text/background pair passes AA or AAA contrast.",
      tags: ["Canvas API", "WCAG", "Color Theory"],
      github: "https://github.com/Shruti-sharma09/CHROMA",
      live: "https://shruti-sharma09.github.io/CHROMA/",
      accent: "blue"
    },
    {
      title: "Study-track",
      description: "A Pomodoro timer, task tracker, and daily journal, styled like an old academic ledger book.",
      problem: "Most productivity tools feel clinical. Study-track leans into a warm, dark-academia visual identity while still handling real focus sessions, tasks, and a 35-day streak calendar.",
      tags: ["Vanilla JS", "localStorage", "UI Design"],
      github: "https://github.com/Shruti-sharma09/Study-track",
      live: "https://shruti-sharma09.github.io/Study-track/",
      accent: "violet"
    }
  ],

  contact: {
    email: "sharmashru.2005@gmail.com",
    github: "https://github.com/Shruti-sharma09",
    linkedin: "https://www.linkedin.com/in/shruti-sharma-470a7841b",
    closingSpeech: "That's my work so far. If you're looking for a designer who ships real, working interfaces and not just mockups, let's talk — my contact details are right here."
  }
};
