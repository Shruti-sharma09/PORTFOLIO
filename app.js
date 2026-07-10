/* ===========================================================
   Cinematic Portfolio — app logic
   Renders PORTFOLIO_CONTENT into #app, wires scroll-reveal
   animations, a dot nav, and optional AI voice narration via
   the browser's built-in SpeechSynthesis API (no external API).
   =========================================================== */

(function () {
  'use strict';

  const content = window.PORTFOLIO_CONTENT;
  const app = document.getElementById('app');
  const dotNav = document.getElementById('dotNav');
  const toastEl = document.getElementById('toast');

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // -----------------------------------------------------------
  // Render
  // -----------------------------------------------------------
  function renderHero() {
    const el = document.createElement('section');
    el.className = 'section hero magenta';
    el.id = 'hero';
    el.dataset.speech = content.heroSpeech || '';
    el.innerHTML = `
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="section-inner reveal">
        <p class="hero-eyebrow">// HI, I AM</p>
        <h1 class="hero-name">${escapeHTML(content.name)}</h1>
        <p class="hero-role">${escapeHTML(content.role)}</p>
        <p class="hero-line">${escapeHTML(content.heroLine)}</p>
        <div class="scroll-cue">Scroll</div>
      </div>
    `;
    return el;
  }

  function renderTextSection(section) {
    const el = document.createElement('section');
    el.className = `section ${section.accent}`;
    el.id = section.id;
    el.dataset.speech = section.speech || section.body || '';
    el.innerHTML = `
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="section-inner reveal">
        <p class="section-label">${escapeHTML(section.label)}</p>
        <h2 class="section-title">${escapeHTML(section.title)}</h2>
        <p class="section-body">${escapeHTML(section.body)}</p>
      </div>
    `;
    return el;
  }

  function renderProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card reveal ${project.accent}`;

    const liveBtn = project.live
      ? `<a class="project-btn project-btn-primary" href="${project.live}" target="_blank" rel="noopener">Live Preview ↗</a>`
      : '';
    const githubBtn = project.github
      ? `<a class="project-btn project-btn-outline" href="${project.github}" target="_blank" rel="noopener">GitHub ↗</a>`
      : '';

    card.innerHTML = `
      <h3 class="project-title">${escapeHTML(project.title)}</h3>
      <p class="project-desc">${escapeHTML(project.description)}</p>
      <p class="project-problem-label">// Problem Solved</p>
      <p class="project-problem">${escapeHTML(project.problem)}</p>
      <div class="project-tags">
        ${project.tags.map(t => `<span class="project-tag">${escapeHTML(t)}</span>`).join('')}
      </div>
      <div class="project-actions">${liveBtn}${githubBtn}</div>
    `;
    return card;
  }

  function renderProjectsSection() {
    const el = document.createElement('section');
    el.className = 'section teal';
    el.id = 'work';
    const speech = 'Here is a selection of what I have built: ' +
      content.projects.map(p => p.title).join(', ') + '.';
    el.dataset.speech = speech;

    el.innerHTML = `
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="section-inner">
        <p class="section-label reveal">${escapeHTML(content.projectsIntro.label)}</p>
        <h2 class="section-title reveal">${escapeHTML(content.projectsIntro.title)}</h2>
        <div class="projects-grid" id="projectsGrid"></div>
      </div>
    `;

    const grid = el.querySelector('#projectsGrid');
    content.projects.forEach(project => grid.appendChild(renderProjectCard(project)));

    return el;
  }

  function renderContactSection() {
    const el = document.createElement('section');
    el.className = 'section violet';
    el.id = 'contact';
    el.dataset.speech = content.contact.closingSpeech || '';
    el.innerHTML = `
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="section-inner reveal" style="text-align:center;">
        <p class="section-label" style="text-align:center;">06 // CONNECT</p>
        <h2 class="section-title">Let's build something.</h2>
        <div class="contact-links" style="justify-content:center;">
          <a class="contact-link" href="mailto:${content.contact.email}">${escapeHTML(content.contact.email)}</a>
          <a class="contact-link" href="${content.contact.github}" target="_blank" rel="noopener">GitHub</a>
          <a class="contact-link" href="${content.contact.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <p class="footer-note">Built as a cinematic, scroll-driven portfolio — with a little help from the browser's own AI voice.</p>
      </div>
    `;
    return el;
  }

  function renderAll() {
    app.appendChild(renderHero());
    content.sections.forEach(section => app.appendChild(renderTextSection(section)));
    app.appendChild(renderProjectsSection());
    app.appendChild(renderContactSection());
  }

  renderAll();

  // -----------------------------------------------------------
  // Dot navigation
  // -----------------------------------------------------------
  function buildDotNav() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const dot = document.createElement('button');
      dot.className = 'dot-nav-item';
      dot.dataset.target = section.id;
      dot.title = section.id;
      dot.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
      });
      dotNav.appendChild(dot);
    });
  }
  buildDotNav();

  function updateActiveDot(activeId) {
    document.querySelectorAll('.dot-nav-item').forEach(dot => {
      dot.classList.toggle('active', dot.dataset.target === activeId);
    });
  }

  // -----------------------------------------------------------
  // Scroll-reveal + section-change tracking (IntersectionObserver)
  // -----------------------------------------------------------
  let narrationEnabled = false;
  let currentSpokenId = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const reveal = entry.target.querySelector('.reveal') || entry.target;
      if (entry.isIntersecting) {
        // reveal any .reveal children within this section
        entry.target.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'));
        if (entry.intersectionRatio > 0.5) {
          updateActiveDot(entry.target.id);
          maybeNarrate(entry.target);
        }
      }
    });
  }, { threshold: [0, 0.5, 0.6] });

  document.querySelectorAll('.section').forEach(section => observer.observe(section));

  // -----------------------------------------------------------
  // AI voice narration (Web Speech API — built into the browser)
  // -----------------------------------------------------------
  function maybeNarrate(section) {
    if (!narrationEnabled) return;
    if (currentSpokenId === section.id) return;
    if (!('speechSynthesis' in window)) return;

    const text = section.dataset.speech;
    if (!text) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
    currentSpokenId = section.id;
  }

  const narrateToggle = document.getElementById('narrateToggle');
  const narrateLabel = narrateToggle.querySelector('.narrate-label');

  narrateToggle.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      showToast('Your browser does not support voice narration');
      return;
    }

    narrationEnabled = !narrationEnabled;
    narrateToggle.classList.toggle('active', narrationEnabled);
    narrateLabel.textContent = narrationEnabled ? 'Narration On' : 'Enable AI Narration';

    if (narrationEnabled) {
      currentSpokenId = null;
      // find the section most in view right now and narrate it immediately
      const sections = Array.from(document.querySelectorAll('.section'));
      const mid = window.innerHeight / 2;
      let closest = sections[0];
      let closestDist = Infinity;
      sections.forEach(s => {
        const rect = s.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - mid);
        if (dist < closestDist) { closestDist = dist; closest = s; }
      });
      maybeNarrate(closest);
    } else {
      window.speechSynthesis.cancel();
    }
  });

  // stop narration if the tab is hidden, so audio doesn't run in the background unexpectedly
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && narrationEnabled) {
      window.speechSynthesis.cancel();
    }
  });

})();
