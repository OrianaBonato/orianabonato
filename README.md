# Oriana Bonato — Portfolio

Portfolio personal de **Oriana Bonato**, diseñadora y desarrolladora frontend con base en Vigo (España). La web reúne una selección de proyectos de diseño web, branding y desarrollo, una sección sobre mí con experiencia y herramientas, y una página de contacto.

La web es bilingüe (español / inglés) y está adaptada a escritorio, tablet y móvil.

## Páginas

| Página | Archivo | Contenido |
| --- | --- | --- |
| Inicio | `index.html` | Presentación, proyectos, sobre mí, experiencia y contacto |
| SmartRest | `smartrest.html` | Caso de estudio: app web frontend / backend (Angular) |
| Estudio 96 | `estudio-96.html` | Caso de estudio: identidad de marca |
| Churrería Romero | `churreria-romero.html` | Caso de estudio: branding y web |
| Contacto | `contacto.html` | Formulario de contacto y redes |
| Design System | `design-system.html` | Logo, tipografía, color, cursor personalizado, botones y enlaces |

Los archivos `inicio-responsive.dc.html` y `smartrest-responsive.dc.html` contienen las versiones móvil y tablet de esas páginas, y se cargan automáticamente según el ancho de pantalla.

## Tecnología

- Web estática: HTML, CSS y JavaScript, sin paso de compilación.
- Diseñada con **Claude Design**. Las páginas se renderizan en el navegador con `support.js`, que carga React 18 desde unpkg.
- Tipografías de Google Fonts: Bricolage Grotesque, Manrope e Inter.
- Desplegada en **Vercel**.

## Estructura

```
├── index.html, *.html     Páginas de la web
├── *.dc.html              Versiones responsive (móvil / tablet)
├── support.js             Runtime que renderiza las páginas
├── portfolio-content.js   Textos compartidos (ES / EN)
├── favicon.svg
├── assets/                Logos, iconos y CV en PDF
└── img/                   Imágenes y vídeos de los proyectos
```

## Ver en local

Las páginas no funcionan abriendo el archivo con doble clic (`file://`): el navegador bloquea la carga de archivos que necesitan. Hay que servirlas con un servidor local:

```bash
npx serve .
```

Y abrir http://localhost:3000.

## Despliegue

El repositorio está conectado a Vercel como proyecto estático (Framework Preset: *Other*, sin comando de build). Cada `git push` a `main` publica los cambios automáticamente.

---

© 2026 Oriana Bonato · [LinkedIn](https://www.linkedin.com/in/oriana-bonato/) · [Behance](https://www.behance.net/ocbonato96) · [GitHub](https://github.com/OrianaBonato)
