import { invitationConfig as config } from "./config.js";

const app = document.querySelector("#app");

const icons = {
  map: iconPath(
    '<path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15"/><path d="M15 6v15"/>'
  ),
  car: iconPath(
    '<path d="M5 17h14l-1.5-5.5A3 3 0 0 0 14.6 9H9.4a3 3 0 0 0-2.9 2.5L5 17z"/><circle cx="8" cy="18" r="1.5"/><circle cx="16" cy="18" r="1.5"/><path d="M7 13h10"/>'
  ),
  calendar: iconPath(
    '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M8 15h3"/><path d="M13 15h3"/>'
  ),
  gift: iconPath(
    '<path d="M20 12v8H4v-8"/><path d="M2 8h20v4H2z"/><path d="M12 8v12"/><path d="M12 8H8.5A2.5 2.5 0 1 1 11 5.5L12 8z"/><path d="M12 8h3.5A2.5 2.5 0 1 0 13 5.5L12 8z"/>'
  ),
  moon: iconPath('<path d="M21 13.2A8.2 8.2 0 1 1 10.8 3a6.4 6.4 0 0 0 10.2 10.2z"/>'),
  play: iconPath('<path d="M8 5v14l11-7z"/>'),
  pause: iconPath('<path d="M8 5h3v14H8z"/><path d="M13 5h3v14h-3z"/>'),
  close: iconPath('<path d="M18 6 6 18"/><path d="M6 6l12 12"/>'),
  diaper: iconPath(
    '<path d="M4 7c4 4 12 4 16 0v6a8 8 0 0 1-16 0V7z"/><path d="M7 11l3 3"/><path d="M17 11l-3 3"/>'
  )
};

function iconPath(paths) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

function setThemeColors() {
  Object.entries(config.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${toKebabCase(key)}`, value);
  });
}

function toKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function render() {
  const { event, assets, dressCode, gifts, gallery, finalMessage } = config;

  app.innerHTML = `
    <main class="invite-shell" id="inicio">
      <section class="cover-section section-reveal" aria-labelledby="cover-title">
        <div class="floating-cloud cloud-one"></div>
        <div class="floating-cloud cloud-two"></div>
        <div class="floating-balloon balloon-one"></div>
        <div class="floating-balloon balloon-two"></div>
        <span class="floating-moon" aria-hidden="true">${icons.moon}</span>

        <p class="eyebrow">${event.coverTitle}</p>
        <h1 id="cover-title">${event.title}</h1>
        <p class="cover-subtitle">${event.coverSubtitle}</p>
        <img class="hero-art" src="${assets.heroBears}" alt="Ositos de acuarela con globos, nubes, luna y estrellas" />
      </section>

      <section class="intro-section section-reveal" id="invitacion">
        <div class="paper-card intro-card">
          <p>${event.intro}</p>
          <strong>${event.highlight}</strong>
        </div>
      </section>

      <section class="paper-card section-reveal event-card" aria-labelledby="details-title">
        <p class="section-kicker">Detalles</p>
        <h2 id="details-title">${event.dateLabel}</h2>
        <div class="detail-list">
          <div>
            <span>${icons.calendar}</span>
            <p>${event.timeLabel}</p>
          </div>
          <div>
            <span>${icons.map}</span>
            <p>${event.location}</p>
          </div>
        </div>
        <div class="button-grid">
          <a class="soft-button" href="${event.googleMapsUrl}" target="_blank" rel="noreferrer">
            ${icons.map}
            Google Maps
          </a>
          <a class="soft-button" href="${event.wazeUrl}" target="_blank" rel="noreferrer">
            ${icons.car}
            Waze
          </a>
          <button class="soft-button" type="button" data-calendar>
            ${icons.calendar}
            Calendario
          </button>
        </div>
      </section>

      <section class="paper-card section-reveal dress-card" aria-labelledby="dress-title">
        <h2 id="dress-title">${dressCode.title}</h2>
        <p>${dressCode.message}</p>
        <div class="palette palette-only" aria-label="Paleta sugerida: blanco, crema, beige y café claro">
          ${dressCode.palette
            .map(
              (color) => `
                <span class="swatch-dot" style="background:${color}"></span>`
            )
            .join("")}
        </div>
      </section>

      <section class="section-reveal gift-section" aria-labelledby="gift-title">
        <p class="section-kicker">${gifts.sectionTitle}</p>
        <h2 id="gift-title">${gifts.message}</h2>
        <div class="gift-grid two-options">
          ${gifts.items
            .map(
              (gift, index) => `
                <article class="paper-card gift-card">
                  <span class="gift-icon">${index === 0 ? icons.gift : icons.diaper}</span>
                  <h3>${gift.title}</h3>
                  <p>${gift.description}</p>
                  ${
                    gift.url
                      ? `<a class="text-link" href="${gift.url}" target="_blank" rel="noreferrer">Ver opción</a>`
                      : `<span class="text-link disabled">Detalle disponible pronto</span>`
                  }
                </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="paper-card section-reveal countdown-section" aria-labelledby="countdown-title">
        <p class="section-kicker">Cuenta regresiva</p>
        <h2 id="countdown-title">${config.countdown.title}</h2>
        <div class="countdown-grid" data-countdown>
          ${["Días", "Horas", "Min", "Seg"]
            .map(
              (label, index) => `
                <div class="time-pill">
                  <strong data-time="${index}">00</strong>
                  <span>${label}</span>
                </div>`
            )
            .join("")}
        </div>
        <p class="countdown-note" data-countdown-note></p>
      </section>

      <section class="section-reveal gallery-section" aria-labelledby="gallery-title">
        <p class="section-kicker">Galería</p>
        <h2 id="gallery-title">Recuerdos para compartir</h2>
        <div class="gallery-grid">
          ${gallery
            .map(
              (item, index) => `
                <button class="gallery-card" type="button" data-gallery-index="${index}">
                  <img src="${item.src}" alt="${item.alt}" />
                  <span>
                    <strong>${item.title}</strong>
                    <small>${item.description}</small>
                  </span>
                </button>`
            )
            .join("")}
        </div>
      </section>

      <section class="final-section section-reveal">
        <div class="paper-card final-card">
          ${finalMessage.lines.map((line) => `<p>${line}</p>`).join("")}
        </div>
      </section>
    </main>

    <button class="floating-music" type="button" data-floating-music aria-label="Reproducir musica">
      ${icons.play}
    </button>
    <audio preload="none" data-audio src="${config.music.src}"></audio>

    <dialog class="gallery-modal" data-gallery-modal>
      <button class="modal-close" type="button" data-modal-close aria-label="Cerrar imagen">
        ${icons.close}
      </button>
      <img data-modal-image alt="" />
      <h3 data-modal-title></h3>
    </dialog>
  `;
}

function setupRevealAnimations() {
  const sections = document.querySelectorAll(".section-reveal");

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupCountdown() {
  const target = new Date(config.event.eventDateISO).getTime();
  const values = document.querySelectorAll("[data-time]");
  const note = document.querySelector("[data-countdown-note]");

  function updateCountdown() {
    const now = Date.now();
    const distance = Math.max(target - now, 0);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);
    const parts = [days, hours, minutes, seconds];

    values.forEach((node, index) => {
      node.textContent = String(parts[index]).padStart(2, "0");
    });

    note.textContent = distance === 0 ? config.countdown.expiredLabel : "";
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}

function setupCalendar() {
  document.querySelector("[data-calendar]").addEventListener("click", () => {
    const ics = createIcsFile();
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "baby-ruano-morales.ics";
    link.click();
    URL.revokeObjectURL(url);
  });
}

function createIcsFile() {
  const start = new Date(config.event.eventDateISO);
  const end = new Date(config.event.eventEndDateISO);
  const description = `${config.event.intro} ${config.event.highlight}`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Familia Ruano Morales//Invitacion//ES",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@baby-ruano-morales`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${escapeIcs(config.event.title)}`,
    `DESCRIPTION:${escapeIcs(description)}`,
    `LOCATION:${escapeIcs(config.event.location)}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
}

function formatIcsDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeIcs(value) {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

function setupMusic() {
  const audio = document.querySelector("[data-audio]");
  const toggle = document.querySelector("[data-floating-music]");

  if (!audio || !toggle || !config.music.src) {
    toggle?.remove();
    audio?.remove();
    return;
  }

  function renderState(isPlaying) {
    toggle.innerHTML = isPlaying ? icons.pause : icons.play;
    toggle.classList.toggle("is-playing", isPlaying);
    toggle.setAttribute("aria-label", isPlaying ? "Pausar musica" : "Reproducir musica");
  }

  toggle.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        renderState(true);
      } else {
        audio.pause();
        renderState(false);
      }
    } catch {
      renderState(false);
    }
  });

  audio.addEventListener("ended", () => renderState(false));
}

function setupGallery() {
  const modal = document.querySelector("[data-gallery-modal]");
  const image = document.querySelector("[data-modal-image]");
  const title = document.querySelector("[data-modal-title]");

  document.querySelectorAll("[data-gallery-index]").forEach((card) => {
    card.addEventListener("click", () => {
      const item = config.gallery[Number(card.dataset.galleryIndex)];
      image.src = item.src;
      image.alt = item.alt;
      title.textContent = item.title;
      modal.showModal();
    });
  });

  document.querySelector("[data-modal-close]").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}

function init() {
  setThemeColors();
  render();
  setupRevealAnimations();
  setupCountdown();
  setupCalendar();
  setupMusic();
  setupGallery();
}

init();
