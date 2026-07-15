# Invitacion Familia Ruano Morales

Invitacion digital mobile-first para el Gender Reveal de la Familia Ruano Morales. El proyecto usa Vite con HTML, CSS y JavaScript puro.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Instalacion

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre la URL que muestre la terminal, normalmente `http://localhost:5173`.

## Editar datos

La configuracion principal esta en `src/config.js`:

- textos, nombres y mensaje final
- fecha, hora, cuenta regresiva y archivo de calendario
- direccion, Google Maps y Waze
- codigo de vestimenta y paleta de colores
- regalos sugeridos
- asistencia y endpoint de Apps Script
- prediccion Nino/Nina y resultados
- galeria, musica e imagenes principales

## Reemplazar assets

- Imagen principal: `assets/images/watercolor-bears-balloons.png`
- Prediccion: `assets/images/ChatGPT Image 13 jul 2026, 01_07_52.png` y `assets/images/ChatGPT Image 13 jul 2026, 01_08_15.png`
- Galeria: `assets/gallery/ecografia.svg` y `assets/gallery/familia 1.jpeg` a `assets/gallery/familia 6.jpeg`
- Musica: `assets/music/1-01 Dearly Beloved.mp3`

Si cambias nombres de archivos, actualiza los `new URL(...)` al inicio de `src/config.js`.

## Build

```bash
npm run build
```

El build se genera en `dist/`.

## Publicacion

El proyecto puede publicarse en GitHub Pages, Netlify o Vercel. Para GitHub Pages, `vite.config.js` usa `base: "./"` para que los assets funcionen correctamente dentro de una subcarpeta del dominio.
