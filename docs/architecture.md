# EspecificaciÃ³n de Arquitectura TÃ©cnica (Architecture Specification)

## 1. EvaluaciÃ³n y RecomendaciÃ³n del Stack TecnolÃ³gico

Para cumplir con el objetivo de un portfolio/CV estÃ¡tico de mÃ¡ximo rendimiento con componentes interactivos aislados, evaluamos dos opciones lÃ­deres del mercado:

| Criterio | Astro 5 (Recomendado) | Next.js 15 (App Router) |
| :--- | :--- | :--- |
| **Enfoque de Renderizado** | Static Site Generation (SSG) por defecto con *Islands Architecture* (cero JavaScript innecesario enviado al cliente). | Server-Side Rendering (SSR) y SSG con React Server Components (requiere runtime React en cliente para hidratar interactividad). |
| **Tiempo de Carga / Lighthouse** | Puntuaciones nativas de 100/100 en Performance, SEO y Accesibilidad sin esfuerzo adicional. | Excelente, pero con mayor peso en bundles JS y mayor tiempo de hidrataciÃ³n total. |
| **Interoperabilidad de UI** | Permite mezclar componentes de React, Vue, Svelte o Vanilla JS donde sea estrictamente necesario. | Exclusivo del ecosistema React. |
| **GestiÃ³n de Contenido** | *Content Collections* tipadas de forma estricta (Zod schemas) para proyectos, artÃ­culos y metadatos. | Requiere herramientas externas (Contentlayer, MDX bundlers manuales). |
| **Coste de Hosting & Despliegue** | 100% estÃ¡tico, distribuible en cualquier red CDN global (Cloudflare Pages, GitHub Pages) a coste cero. | Ideal en Vercel, pero puede incurrir en complejidades de Edge/Serverless en otros hosts. |

### DecisiÃ³n TÃ©cnica Propuesta
**Astro 5 + TypeScript + Vanilla CSS / CSS Modules + React (solo para islas interactivas especÃ­ficas)**.
- **RazÃ³n:** El 85% del contenido es informativo (texto, diagramas, listas de proyectos, CV). Astro entrega HTML estÃ¡tico puro a la velocidad de la luz. Para el 15% restante (reproductor de mÃºsica interactivo, grÃ¡ficos de backtests y filtros dinÃ¡micos del CV), activamos componentes interactivos hidratados de forma diferida (`client:visible` o `client:idle`).

---

## 2. Estructura de Directorios del Proyecto

La estructura sigue una separaciÃ³n limpia de responsabilidades inspirada en Domain-Driven Design (DDD) y las mejores prÃ¡cticas de Astro:

```text
personal-portfolio/
â”œâ”€â”€ .github/
â”‚   â””â”€â”€ workflows/
â”‚       â””â”€â”€ deploy.yml              # Pipeline CI/CD para testeo, build y despliegue
â”œâ”€â”€ docs/                           # Especificaciones SDD (Specification-Driven Development)
â”‚   â”œâ”€â”€ product_context.md          # PropÃ³sito, pilares y visiÃ³n del producto
â”‚   â”œâ”€â”€ architecture.md             # Stack, decisiones tÃ©cnicas y topologÃ­a
â”‚   â””â”€â”€ tasks.md                    # Backlog de tareas secuenciales y trazabilidad
â”œâ”€â”€ public/                         # Archivos estÃ¡ticos directos sin procesar
â”‚   â”œâ”€â”€ favicon.svg
â”‚   â”œâ”€â”€ robots.txt
â”‚   â”œâ”€â”€ cv-castillo-es.pdf          # CV descargable en PDF
â”‚   â”œâ”€â”€ cv-castillo-en.pdf
â”‚   â””â”€â”€ media/                      # Audios de prueba, previews de vÃ­deo, demos
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ assets/                     # ImÃ¡genes optimizadas por Astro Assets pipeline
â”‚   â”‚   â”œâ”€â”€ images/
â”‚   â”‚   â””â”€â”€ icons/
â”‚   â”œâ”€â”€ components/                 # Componentes de interfaz reutilizables
â”‚   â”‚   â”œâ”€â”€ common/                 # Header, Footer, Navigation, ThemeToggle
â”‚   â”‚   â”œâ”€â”€ cv/                     # Timeline, Experiencia, SkillBadges, Filtros
â”‚   â”‚   â”œâ”€â”€ backend/                # Diagramas de microservicios, Visor de arquitecturas
â”‚   â”‚   â”œâ”€â”€ trading/                # Tarjetas de EAs, MÃ©tricas cuantitativas, Visores de grÃ¡ficos
â”‚   â”‚   â”œâ”€â”€ gamedev/                # Showcase de Godot, Devlogs, Visores de mecÃ¡nicas
â”‚   â”‚   â””â”€â”€ multimedia/             # Reproductor de audio/vÃ­deo custom para Piano
â”‚   â”œâ”€â”€ content/                    # Colecciones de contenido con validaciÃ³n Zod
â”‚   â”‚   â”œâ”€â”€ config.ts               # DefiniciÃ³n de esquemas de colecciones
â”‚   â”‚   â”œâ”€â”€ backend-projects/       # Archivos MDX de proyectos de Backend & Cloud
â”‚   â”‚   â”œâ”€â”€ trading-strategies/     # Archivos MDX de EAs y modelos cuantitativos
â”‚   â”‚   â”œâ”€â”€ gamedev-projects/       # Archivos MDX de proyectos en Godot
â”‚   â”‚   â””â”€â”€ multimedia-works/       # Metadatos de interpretaciones de piano y vÃ­deos
â”‚   â”œâ”€â”€ layouts/
â”‚   â”‚   â”œâ”€â”€ BaseLayout.astro        # Head meta, SEO, fuentes, scripts globales
â”‚   â”‚   â””â”€â”€ ProjectLayout.astro     # Layout estandarizado para casos de estudio
â”‚   â”œâ”€â”€ pages/                      # Enrutamiento basado en archivos
â”‚   â”‚   â”œâ”€â”€ index.astro             # Home / Dashboard ejecutivo de impacto
â”‚   â”‚   â”œâ”€â”€ cv.astro                # Curriculum Vitae dinÃ¡mico y filtrable
â”‚   â”‚   â”œâ”€â”€ backend/
â”‚   â”‚   â”‚   â”œâ”€â”€ index.astro         # Listado de proyectos Backend & Infra
â”‚   â”‚   â”‚   â””â”€â”€ [slug].astro        # Caso de estudio detallado
â”‚   â”‚   â”œâ”€â”€ trading/
â”‚   â”‚   â”‚   â”œâ”€â”€ index.astro         # Listado y mÃ©tricas de EAs y Algoritmia
â”‚   â”‚   â”‚   â””â”€â”€ [slug].astro        # AnÃ¡lisis de estrategia y backtest
â”‚   â”‚   â”œâ”€â”€ gamedev/
â”‚   â”‚   â”‚   â”œâ”€â”€ index.astro         # GalerÃ­a de juegos Godot
â”‚   â”‚   â”‚   â””â”€â”€ [slug].astro        # Detalles tÃ©cnicos del proyecto
â”‚   â”‚   â””â”€â”€ multimedia/
â”‚   â”‚       â””â”€â”€ index.astro         # Hub audiovisual (Piano & VÃ­deo)
â”‚   â””â”€â”€ styles/
â”‚       â”œâ”€â”€ tokens.css              # Variables CSS (paleta HSL, tipografÃ­as, espaciado)
â”‚       â””â”€â”€ global.css              # Resets, utilidades y estilos globales
â”œâ”€â”€ astro.config.mjs
â”œâ”€â”€ package.json
â”œâ”€â”€ tsconfig.json
â””â”€â”€ .clinerules                     # Reglas de comportamiento y workflow del agente
```

---

## 3. Estrategia de Enrutamiento y NavegaciÃ³n

El sitio implementarÃ¡ enrutamiento estÃ¡tico optimizado con transiciones de vista nativas (*View Transitions API* de Astro):
- `/`: **Portal Ejecutivo & Resumen de Pilares**. DiseÃ±ado con una jerarquÃ­a visual que resume de inmediato los 4 pilares y conduce al visitante al Ã¡rea de su interÃ©s.
- `/cv`: **CV DinÃ¡mico**. CronologÃ­a interactiva, filtro dinÃ¡mico por habilidades/tecnologÃ­as (Spring Cloud, K8s, Python, MQL5, Godot) y botÃ³n de descarga en PDF.
- `/backend`: **Hub de Backend & DevOps**. Fichas de arquitectura detalladas con diagramas visuales y cÃ³digo fuente.
- `/trading`: **Hub Cuantitativo**. Fichas con estadÃ­sticas de rendimiento auditables, descripciÃ³n de lÃ³gica y control de riesgo de los EAs.
- `/gamedev`: **Hub de Videojuegos**. Muestra interactiva de prototipos y mecÃ¡nicas desarrolladas en Godot Engine.
- `/multimedia`: **Auditorio Audiovisual**. Espacio de alto calibre con reproductor de audio integrado para escuchar piezas de piano clÃ¡sico sin interrumpir la navegaciÃ³n.

---

## 4. Estrategia de Despliegue y CI/CD (GitHub Pages)

1. **Alojamiento Objetivo: GitHub Pages (SSG Puro)**
   - Despliegue 100% estÃ¡tico (Static Site Generation).
   - Sin servidores ni runtime dinÃ¡mico; archivos HTML/CSS/JS y media servidos directamente a travÃ©s de la infraestructura global de GitHub Pages.
   - **ConfiguraciÃ³n de URL y Base Path en `astro.config.mjs`:**
     - `site`: URL canÃ³nica del sitio (ej. `https://pjrbenitez.github.io` o dominio personalizado).
     - `base`: Subruta del repositorio (ej. `/pasruiben/` si se aloja como pÃ¡gina de proyecto, o `'/'` si es el repositorio raÃ­z `pjrbenitez.github.io`). Permite que todos los assets y enlaces internos se resuelvan de forma relativa y robusta sin enlaces rotos.
     - `output: 'static'` para garantizar compilaciÃ³n puramente estÃ¡tica.

2. **Pipeline de IntegraciÃ³n y Despliegue Continuo (GitHub Actions):**
   - Archivo de flujo de trabajo: `.github/workflows/deploy.yml`.
   - **Trigger:** `push` directo a la rama `main` o `master`, y `workflow_dispatch` para ejecuciones manuales.
   - **Permisos requeridos:**
     ```yaml
     permissions:
       contents: read
       pages: write
       id-token: write
     ```
   - **Fases del Job:**
     - **Checkout del cÃ³digo:** `actions/checkout@v4`.
     - **ConfiguraciÃ³n de Node.js:** `actions/setup-node@v4` con cachÃ© de gestor de paquetes.
     - **InstalaciÃ³n de Dependencias:** `npm ci` para instalaciones deterministas.
     - **VerificaciÃ³n de Calidad:** `npm run build` (valida TypeScript, colecciones de contenido y empaquetado estÃ¡tico en el directorio `dist/`).
     - **Subida de Artifact de Pages:** `actions/upload-pages-artifact@v3` apuntando a `./dist`.
     - **Despliegue a GitHub Pages:** `actions/deploy-pages@v4`.

