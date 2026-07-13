// Cambia estos imports si reemplazas los archivos por otros nombres.
const heroBears = new URL(
  "../assets/images/watercolor-bears-balloons.png",
  import.meta.url
).href;
const galleryUltrasound = new URL("../assets/gallery/ecografia.svg", import.meta.url).href;
const galleryFamily = [
  new URL("../assets/gallery/familia 1.jpeg", import.meta.url).href,
  new URL("../assets/gallery/familia 2.jpeg", import.meta.url).href,
  new URL("../assets/gallery/familia 3.jpeg", import.meta.url).href,
  new URL("../assets/gallery/familia 4.jpeg", import.meta.url).href,
  new URL("../assets/gallery/familia 5.jpeg", import.meta.url).href,
  new URL("../assets/gallery/familia 6.jpeg", import.meta.url).href
];
const musicTrack = new URL("../assets/music/1-01 Dearly Beloved.mp3", import.meta.url).href;

export const invitationConfig = {
  // Colores principales del sitio.
  colors: {
    white: "#FFFFFF",
    cream: "#F8F3EB",
    lightBeige: "#E8D8C3",
    mediumBeige: "#D5B38A",
    coffeeLight: "#B88E63",
    coffeeText: "#6F4E37",
    taupe: "#B88E63"
  },

  event: {
    // Título principal editable.
    title: "Familia Ruano Morales",
    coverTitle: "Gender Reveal",
    coverSubtitle: "Un pequeño secreto está por revelarse",
    intro:
      "Como estamos felices de esperar a nuestro bebé, queremos que nos acompañes a conocer si será",
    highlight: "Niño o Niña",
    dateLabel: "Sábado 05 Septiembre",

    // Fecha y hora para cuenta regresiva y calendario.
    // Formato recomendado: YYYY-MM-DDTHH:mm:ss-06:00 para Guatemala.
    eventDateISO: "2026-09-05T14:00:00-06:00",
    eventEndDateISO: "2026-09-05T18:00:00-06:00",

    // Hora visible en la invitación.
    timeLabel: "Hora: 14:00 hrs a 18:00 hrs",

    // Dirección visible.
    location: "Parque Colibrí, Hacienda de Las Flores, Villa Nueva",

    // Cambia estos enlaces por tus links reales de Google Maps y Waze.
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Parque%20Colibr%C3%AD%2C%20Hacienda%20de%20Las%20Flores%2C%20Villa%20Nueva",
    wazeUrl:
      "https://waze.com/ul?q=Parque%20Colibr%C3%AD%2C%20Hacienda%20de%20Las%20Flores%2C%20Villa%20Nueva&navigate=yes"
  },

  dressCode: {
    title: "Código de vestimenta",
    message: "Combínate de blanco y beige para ser parte de este momento especial",
    palette: ["#FFFFFF", "#F8F3EB", "#E8D8C3", "#B88E63"]
  },

  gifts: {
    sectionTitle: "Muestra de cariño",
    message: "Certificado de regalo o pañales",
    items: [
      {
        title: "Certificado de regalo",
        description: "Una muestra práctica y especial para preparar la llegada del bebé.",
        url: ""
      },
      {
        title: "Pañales",
        description: "Un detalle útil y lleno de cariño para acompañarnos en esta nueva etapa.",
        url: ""
      }
    ]
  },

  countdown: {
    title: "Falta muy poco",
    expiredLabel: "El gran día llegó"
  },

  rsvp: {
    endpoint:
      "https://script.google.com/macros/s/AKfycbxRmx8mgTIAfDGrKdhTa3DL1R0mHUu7AUHV6rgiwfqI3Vyc01RzfIp5FTj8cM_qBhYD/exec"
  },

  prediction: {
    storageKey: "baby-ruano-morales-prediction"
  },

  gallery: [
    {
      title: "Ecografía",
      description: "Un primer vistazo lleno de amor.",
      src: galleryUltrasound,
      alt: "Placeholder elegante para foto de ecografía"
    },
    {
      title: "Familia",
      description: "El amor que ya espera al bebé.",
      src: galleryFamily[0],
      alt: "Fotografía de la familia",
      images: galleryFamily.map((src, index) => ({
        src,
        alt: `Fotografía familiar ${index + 1}`
      }))
    }
  ],

  finalMessage: {
    lines: [
      "¡Será un día muy especial para nuestra familia!",
      "Gracias por acompañarnos en uno de los días más importantes de nuestra vida."
    ]
  },

  music: {
    src: musicTrack
  },

  assets: {
    heroBears
  }
};
