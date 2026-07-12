# Invitación Familia Ruano Morales

Invitación digital mobile-first para Gender Reveal creada con HTML, CSS y JavaScript puro sobre Vite.

## Correr el proyecto

Necesitas Node.js instalado. Esta plantilla usa Vite 8, así que usa Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev
```

Luego abre la URL que muestre la terminal, normalmente `http://localhost:5173`.

## Editar datos

Todo lo principal está en `src/config.js`:

- título, nombres, textos y mensaje final
- fecha/hora visible y `eventDateISO` para cuenta regresiva/calendario
- dirección, Google Maps y Waze
- código de vestimenta y paleta
- muestra de cariño y enlaces opcionales
- fotos de galería
- canción del botón flotante
- colores principales

Nota: la fecha incluida es `2026-05-03T14:00:00-06:00`, que coincide con "Domingo 03 Mayo". Si el evento será en otra fecha, cambia también `eventEndDateISO`.

## Reemplazar imágenes

- Ositos/globos/nubes: `assets/images/watercolor-bears-balloons.png`
- Decorativos sueltos: `assets/images/envelope.svg`, `cloud.svg`, `star.svg`, `balloon.svg`
- Galería: `assets/gallery/ecografia.svg`, `assets/gallery/sesion-embarazo.svg`, `assets/gallery/familia.svg`
- Música: `assets/music/1-01 Dearly Beloved.mp3`
- Referencia visual: puedes guardarla en `assets/reference/`

Si reemplazas archivos manteniendo el mismo nombre, no necesitas cambiar el código. Si cambias nombres, actualiza los `new URL(...)` al inicio de `src/config.js`.

## Publicar

1. Ejecuta `npm run build`.
2. Sube la carpeta `dist/` a Netlify, Vercel o GitHub Pages.
3. Para GitHub Pages, `vite.config.js` ya usa `base: "./"` para que los assets funcionen en subcarpetas.
