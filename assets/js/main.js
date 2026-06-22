const routeData = {
  praga: {
    title: 'Praga',
    text: 'Primer tramo urbano para entrar en ritmo: centro historico, castillo, puentes y paseos cortos.',
    bullets: ['Priorizar Ciudad Vieja y Puente de Carlos.', 'El Castillo tiene cuestas y adoquines.', 'Dejar una tarde flexible para descanso o comida local.']
  },
  salzburgo: {
    title: 'Salzburgo y Salzkammergut',
    text: 'Base para combinar casco antiguo con lagos. El gran dilema es Hallstatt o una alternativa menos saturada.',
    bullets: ['St. Gilgen + Wolfgangsee es flexible.', 'Fuschlsee encaja como dia de lago.', 'RupertusTherme funciona como plan de lluvia.']
  },
  tirol: {
    title: 'Innsbruck / Tirol',
    text: 'Tramo alpino con ciudad compacta y decisiones segun meteo: Nordkette, pueblos o agua.',
    bullets: ['Nordkette solo si el cielo acompana.', 'Seefeld y Hall in Tirol son excursiones cortas.', 'Llevar capas para altura.']
  },
  munich: {
    title: 'Munich y Baviera',
    text: 'Base final para ciudad, castillos, lagos y pueblos. El coche solo compensa si abre excursiones.',
    bullets: ['Fussen/Neuschwanstein sin equipaje.', 'Ciudad en transporte publico.', 'Alpes o ruta medieval si hay coche.']
  }
};

const decisions = [
  'Elegir alojamiento definitivo en cada base',
  'Decidir Hallstatt o Wolfgangsee/St. Gilgen',
  'Elegir Neuschwanstein interior o exterior/lago',
  'Decidir coche de alquiler: un dia o dos',
  'Cerrar trenes entre bases',
  'Preparar lista de dulces tipicos de Praga'
];

function renderRoute(stop = 'praga') {
  const detail = document.querySelector('#route-detail');
  const data = routeData[stop];
  if (!detail || !data) return;
  detail.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.text}</p>
    <ul>${data.bullets.map((item) => `<li>${item}</li>`).join('')}</ul>
  `;
}

function setupRoute() {
  document.querySelectorAll('.route-stop').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.route-stop').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      renderRoute(button.dataset.stop);
    });
  });
  renderRoute();
}

function setupFilters() {
  const cards = [...document.querySelectorAll('.place-card')];
  document.querySelectorAll('.filter').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      cards.forEach((card) => {
        const tags = card.dataset.tags || '';
        card.classList.toggle('hidden', filter !== 'all' && !tags.includes(filter));
      });
    });
  });
}

function setupTabs() {
  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => {
      const root = button.closest('[data-tabs]');
      root.querySelectorAll('.tab-button').forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      root.querySelectorAll('.tab-panel').forEach((panel) => panel.classList.remove('active'));
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      root.querySelector(`[data-panel="${button.dataset.tab}"]`)?.classList.add('active');
    });
  });
}

function setupChecklist() {
  const list = document.querySelector('#decision-list');
  if (!list) return;
  const saved = JSON.parse(localStorage.getItem('pragabaviera-decisions') || '{}');
  list.innerHTML = decisions.map((decision, index) => `
    <label class="check-item">
      <input type="checkbox" data-key="${index}" ${saved[index] ? 'checked' : ''} />
      <span>${decision}</span>
    </label>
  `).join('');
  list.addEventListener('change', (event) => {
    if (!event.target.matches('input[type="checkbox"]')) return;
    saved[event.target.dataset.key] = event.target.checked;
    localStorage.setItem('pragabaviera-decisions', JSON.stringify(saved));
  });
}

function setupNav() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  toggle?.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.addEventListener('click', (event) => {
    if (!event.target.matches('a')) return;
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
}

function setupActiveLinks() {
  const links = [...document.querySelectorAll('.site-nav a')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!current) return;
    links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`));
  }, { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.4, 0.7] });
  sections.forEach((section) => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
  setupRoute();
  setupFilters();
  setupTabs();
  setupChecklist();
  setupNav();
  setupActiveLinks();
});
