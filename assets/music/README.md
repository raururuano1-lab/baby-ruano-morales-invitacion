Coloca aquí el archivo de música de la invitación.

Después edita `src/config.js`:

```js
src: new URL("../assets/music/tu-cancion.mp3", import.meta.url).href
```

La reproducción inicia únicamente cuando el invitado presiona el botón de play.
