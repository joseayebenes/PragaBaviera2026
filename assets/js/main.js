const routeData = {
  praga: {
    title: 'Praga',
    text: 'Primer tramo urbano para entrar en ritmo: centro historico, castillo, puentes y paseos cortos.',
    bullets: ['Priorizar Ciudad Vieja y Puente de Carlos.', 'El Castillo tiene cuestas y adoquines.', 'Dejar una tarde flexible para descanso o comida local.']
  },
  salzburgo: {
    title: 'Salzburgo y Salzkammergut',
    text: 'Base para combinar casco antiguo con lagos. El gran dilema es Hallstatt o una alternativa menos saturada.',
    bullets: ['St. Gilgen + Wolfgangsee es flexible.', 'Fuschlsee encaja como dia de lago.', 'Salzachsee sirve para un chapuzon urbano corto.']
  },
  tirol: {
    title: 'Innsbruck / Tirol',
    text: 'Tramo alpino con ciudad compacta y decisiones segun meteo: Nordkette, pueblos o agua.',
    bullets: ['Nordkette solo si el cielo acompana.', 'Seefeld y Hall in Tirol son excursiones cortas.', 'Llevar capas para altura.']
  },
  munich: {
    title: 'Munich y Baviera',
    text: 'Base final para ciudad, castillos, lagos y pueblos. Neuschwanstein ya queda como excursion con entrada oficial.',
    bullets: ['Fussen/Neuschwanstein sin equipaje.', 'Ciudad en transporte publico.', 'Alpes o ruta medieval si hay coche.']
  }
};

const decisions = [
  'Dar un ultimo vistazo al alojamiento de Munich',
  'Decidir Hallstatt o Wolfgangsee/St. Gilgen',
  'Ajustar la logistica de Fussen y Neuschwanstein',
  'Confirmar coche de alquiler para excursiones',
  'Cerrar transportes entre bases en webs oficiales',
  'Ordenar paradas literarias y dulces de Praga'
];

const mapLocations = [
  {
    name: 'Praga',
    category: 'base',
    coords: [50.0755, 14.4378],
    note: 'Base inicial. Centro historico, Castillo, Mala Strana y primer contacto con el viaje.'
  },
  {
    name: 'Salzburgo',
    category: 'base',
    coords: [47.8095, 13.0550],
    note: 'Base para casco antiguo, Salzkammergut y posible dia de lago.'
  },
  {
    name: 'Innsbruck / Tirol',
    category: 'base',
    coords: [47.2692, 11.4041],
    note: 'Base alpina para Nordkette, paseos cortos y decisiones segun meteo.'
  },
  {
    name: 'Munich',
    category: 'base',
    coords: [48.1372, 11.5755],
    note: 'Base final para ciudad, Baviera, lagos y castillos sin maletas.'
  },
  {
    name: 'Hallstatt',
    category: 'pueblo',
    coords: [47.5622, 13.6493],
    note: 'Muy bonito, pero posible saturacion. Candidato a comparar con alternativas menos masificadas.'
  },
  {
    name: 'St. Gilgen / Wolfgangsee',
    category: 'agua',
    coords: [47.7677, 13.3643],
    note: 'Plan fuerte de lago desde Salzburgo, flexible para paseo, barco y bano.'
  },
  {
    name: 'Fuschlsee',
    category: 'agua',
    coords: [47.8070, 13.2920],
    note: 'Alternativa directa para dia de lago desde Salzburgo.'
  },
  {
    name: 'Salzachsee / Badesee Liefering',
    category: 'agua',
    coords: [47.8359, 13.0191],
    note: 'Lago urbano de bano en Salzburgo para un chapuzon corto o descanso sin excursion larga.'
  },
  {
    name: 'Almkanal',
    category: 'agua',
    coords: [47.7850, 13.0340],
    note: 'Idea urbana de agua en Salzburgo para dias calurosos. Pendiente confirmar punto exacto, corriente y comodidad con bebe.'
  },
  {
    name: 'RupertusTherme',
    category: 'agua',
    coords: [47.7265, 12.8784],
    note: 'Plan termal en Bad Reichenhall para lluvia o cansancio.'
  },
  {
    name: 'Baggersee Innsbruck',
    category: 'agua',
    coords: [47.2647, 11.4550],
    note: 'Opcion sencilla de bano cerca de Innsbruck.'
  },
  {
    name: 'Aqua Dome',
    category: 'agua',
    coords: [47.0712, 10.9695],
    note: 'Termas potentes en el Tirol. Mejor como medio dia largo o dia completo.'
  },
  {
    name: 'Fussen / Neuschwanstein',
    category: 'pueblo',
    coords: [47.5576, 10.7498],
    note: 'Excursion clave desde Munich con entrada oficial al castillo. Mantener margen y no mezclar con maletas.'
  },
  {
    name: 'Starnberger See',
    category: 'agua',
    coords: [47.9990, 11.3440],
    note: 'Lago facil desde Munich si apetece repetir plan de agua.'
  },
  {
    name: 'Therme Erding',
    category: 'agua',
    coords: [48.2900, 11.8860],
    note: 'Termas/parque acuatico enorme cerca de Munich. Buen comodin de mal tiempo.'
  },
  {
    name: 'Oberammergau',
    category: 'pueblo',
    coords: [47.5981, 11.0668],
    note: 'Pueblo bavaro de fachadas pintadas, combinable con Ettal/Linderhof.'
  },
  {
    name: 'Garmisch-Partenkirchen',
    category: 'pueblo',
    coords: [47.4920, 11.0950],
    note: 'Base alpina clasica para montana, Eibsee o Zugspitze si apetece una ruta potente.'
  },
  {
    name: 'Mittenwald',
    category: 'pueblo',
    coords: [47.4420, 11.2640],
    note: 'Pueblo alpino bonito, mejor con coche si se enlaza con otros puntos.'
  },
  {
    name: 'Rothenburg ob der Tauber',
    category: 'pueblo',
    coords: [49.3778, 10.1797],
    note: 'Ruta medieval. Muy bonito, turistico y mejor en coche si se combina con otros pueblos.'
  },
  {
    name: 'Dinkelsbuhl',
    category: 'pueblo',
    coords: [49.0694, 10.3199],
    note: 'Alternativa medieval mas tranquila que Rothenburg.'
  },
  {
    name: 'Nordlingen',
    category: 'pueblo',
    coords: [48.8512, 10.4887],
    note: 'Pueblo amurallado dentro de un antiguo crater.'
  },
  {
    name: 'Regensburg / Ratisbona',
    category: 'pueblo',
    coords: [49.0134, 12.1016],
    note: 'Casco historico bonito y buena opcion en tren desde Munich.'
  },
  {
    name: 'Bamberg',
    category: 'pueblo',
    coords: [49.8988, 10.9028],
    note: 'Ciudad historica muy bonita; posible excursion en tren desde Munich si apetece.'
  },
  {
    name: 'Berchtesgaden / Konigssee',
    category: 'agua',
    coords: [47.5916, 12.9870],
    note: 'Zona alpina espectacular, mas logica desde Salzburgo o con coche.'
  },
  {
    name: 'Havelska Koruna',
    category: 'comida',
    coords: [50.0832, 14.4230],
    note: 'Restaurante barato de comida checa en Praga, guardado por el grupo.'
  },
  {
    name: 'Idiom / Biblioteca Municipal',
    category: 'pueblo',
    coords: [50.0874, 14.4172],
    note: 'Torre infinita de libros. Parada corta, centrica y cubierta; revisar horarios antes de ir.'
  },
  {
    name: 'Biblioteca de Strahov',
    category: 'pueblo',
    coords: [50.0861, 14.3894],
    note: 'Biblioteca historica muy visual junto a Strahov. Mejor combinarla con la zona del Castillo o miradores.'
  },
  {
    name: 'Clementinum',
    category: 'pueblo',
    coords: [50.0866, 14.4168],
    note: 'Biblioteca barroca y torre astronomica en visita guiada; valorar escalones con porteo.'
  },
  {
    name: 'Museo Nacional de Praga',
    category: 'pueblo',
    coords: [50.0794, 14.4309],
    note: 'Idea cultural cerca de Wenceslao. La gratuidad mensual no coincide con la estancia, revisar precio y horario.'
  },
  {
    name: 'Cafe Savoy',
    category: 'comida',
    coords: [50.0812, 14.4073],
    note: 'Cafe clasico para desayuno o merienda dulce en Praga.'
  },
  {
    name: 'Eska',
    category: 'comida',
    coords: [50.0922, 14.4495],
    note: 'Obrador/restaurante moderno para reposteria y comida en Praga.'
  }
];

const categoryLabels = {
  base: 'Base',
  agua: 'Agua',
  pueblo: 'Pueblo / excursion',
  comida: 'Comida'
};

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

function setupTripMap() {
  const mapRoot = document.querySelector('#trip-map');
  const locationList = document.querySelector('#map-location-list');
  if (!mapRoot || !locationList) return;

  if (!window.L) {
    mapRoot.innerHTML = '<p class="map-fallback">No se ha podido cargar el mapa. Recarga la pagina o abre la guia con conexion.</p>';
    return;
  }

  const map = L.map(mapRoot, {
    scrollWheelZoom: false,
    tap: true
  }).setView([48.47, 12.45], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const routeStops = mapLocations.filter((location) => location.category === 'base');
  L.polyline(routeStops.map((location) => location.coords), {
    color: '#0f766e',
    weight: 4,
    opacity: 0.75,
    dashArray: '8 8'
  }).addTo(map);

  const markers = mapLocations.map((location) => {
    const icon = L.divIcon({
      className: `map-pin map-pin-${location.category}`,
      html: `<span>${categoryLabels[location.category][0]}</span>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -18]
    });
    const marker = L.marker(location.coords, { icon }).bindPopup(`
      <strong>${location.name}</strong>
      <span>${categoryLabels[location.category]}</span>
      <p>${location.note}</p>
    `);
    marker.category = location.category;
    marker.locationName = location.name;
    marker.addTo(map);
    return marker;
  });

  function renderLocationList(filter = 'all') {
    const visible = mapLocations.filter((location) => filter === 'all' || location.category === filter);
    locationList.innerHTML = visible.map((location) => `
      <button type="button" class="map-list-item" data-location="${location.name}">
        <span class="map-dot map-dot-${location.category}"></span>
        <span>
          <strong>${location.name}</strong>
          <small>${categoryLabels[location.category]}</small>
        </span>
      </button>
    `).join('');
  }

  function applyMapFilter(filter = 'all') {
    const visibleMarkers = [];
    markers.forEach((marker) => {
      const visible = filter === 'all' || marker.category === filter;
      if (visible) {
        marker.addTo(map);
        visibleMarkers.push(marker);
      } else {
        marker.remove();
      }
    });
    renderLocationList(filter);
    const group = L.featureGroup(visibleMarkers);
    if (visibleMarkers.length) {
      map.fitBounds(group.getBounds().pad(0.18), { animate: false });
    }
  }

  document.querySelectorAll('.map-filter').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.map-filter').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      applyMapFilter(button.dataset.mapFilter);
    });
  });

  locationList.addEventListener('click', (event) => {
    const button = event.target.closest('.map-list-item');
    if (!button) return;
    const marker = markers.find((item) => item.locationName === button.dataset.location);
    if (!marker) return;
    map.setView(marker.getLatLng(), 10);
    marker.openPopup();
  });

  applyMapFilter();
  setTimeout(() => map.invalidateSize(), 150);
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

function settleHashScroll() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  setTimeout(() => {
    target.scrollIntoView({ block: 'start' });
  }, 250);
}

document.addEventListener('DOMContentLoaded', () => {
  setupRoute();
  setupTripMap();
  setupFilters();
  setupTabs();
  setupChecklist();
  setupNav();
  setupActiveLinks();
  settleHashScroll();
});
