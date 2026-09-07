# Especificación de Arquitectura Técnica (Architecture Specification)

## 1. Evaluación y Recomendación del Stack Tecnológico

Para cumplir con el objetivo de un portfolio/CV estático de máximo rendimiento con componentes interactivos aislados, evaluamos dos opciones líderes del mercado:

| Criterio | Astro 5 (Recomendado) | Next.js 15 (App Router) |
| :--- | :--- | :--- |
| **Enfoque de Renderizado** | Static Site Generation (SSG) por defecto con *Islands Architecture* (cero JavaScript innecesario enviado al cliente). | Server-Side Rendering (SSR) y SSG con React Server Components (requiere runtime React en cliente para hidratar interactividad). |
| **Tiempo de Carga / Lighthouse** | Puntuaciones nativas de 100/100 en Performance, SEO y Accesibilidad sin esfuerzo adicional. | Excelente, pero con mayor peso en bundles JS y mayor tiempo de hidratación total. |
| **Interoperabilidad de UI** | Permite mezclar componentes de React, Vue, Svelte o Vanilla JS donde sea estrictamente necesario. | Exclusivo del ecosistema React. |
| **Gestión de Contenido** | *Content Collections* tipadas de forma estricta (Zod schemas) para proyectos, artículos y metadatos. | Requiere herramientas externas (Contentlayer, MDX bundlers manuales). |
| **Coste de Hosting & Despliegue** | 100% estático, distribuible en cualquier red CDN global (Cloudflare Pages, GitHub Pages) a coste cero. | Ideal en Vercel, pero puede incurrir en complejidades de Edge/Serverless en otros hosts. |

### Decisión Técnica Propuesta
**Astro 5 + TypeScript + Vanilla CSS / CSS Modules + React (solo para islas interactivas específicas)**.
- **Razón:** El 85% del contenido es informativo (texto, diagramas, listas de proyectos, CV). Astro entrega HTML estático puro a la velocidad de la luz. Para el 15% restante (reproductor de música interactivo, gráficos de backtests y filtros dinámicos del CV), activamos componentes interactivos hidratados de forma diferida (`client:visible` o `client:idle`).

---

## 2. Estructura de Directorios del Proyecto

La estructura sigue una separación limpia de responsabilidades inspirada en Domain-Driven Design (DDD) y las mejores prácticas de Astro:

```text
personal-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline CI/CD para testeo, build y despliegue
├── docs/                           # Especificaciones SDD (Specification-Driven Development)
│   ├── product_context.md          # Propósito, pilares y visión del producto
│   ├── architecture.md             # Stack, decisiones técnicas y topología
│   └── tasks.md                    # Backlog de tareas secuenciales y trazabilidad
├── public/                         # Archivos estáticos directos sin procesar
│   ├── favicon.svg
│   ├── robots.txt
│   ├── cv-castillo-es.pdf          # CV descargable en PDF
│   ├── cv-castillo-en.pdf
│   └── media/                      # Audios de prueba, previews de vídeo, demos
├── src/
│   ├── assets/                     # Imágenes optimizadas por Astro Assets pipeline
│   │   ├── images/
│   │   └── icons/
│   ├── components/                 # Componentes de interfaz reutilizables
│   │   ├── common/                 # Header, Footer, Navigation, ThemeToggle
│   │   ├── cv/                     # Timeline, Experiencia, SkillBadges, Filtros
│   │   ├── backend/                # Diagramas de microservicios, Visor de arquitecturas
│   │   ├── trading/                # Tarjetas de EAs, Métricas cuantitativas, Visores de gráficos
│   │   ├── gamedev/                # Showcase de Godot, Devlogs, Visores de mecánicas
│   │   └── multimedia/             # Reproductor de audio/vídeo custom para Piano
│   ├── content/                    # Colecciones de contenido con validación Zod
│   │   ├── config.ts               # Definición de esquemas de colecciones
│   │   ├── backend-projects/       # Archivos MDX de proyectos de Backend & Cloud
│   │   ├── trading-strategies/     # Archivos MDX de EAs y modelos cuantitativos
│   │   ├── gamedev-projects/       # Archivos MDX de proyectos en Godot
│   │   └── multimedia-works/       # Metadatos de interpretaciones de piano y vídeos
│   ├── layouts/
│   │   ├── BaseLayout.astro        # Head meta, SEO, fuentes, scripts globales
│   │   └── ProjectLayout.astro     # Layout estandarizado para casos de estudio
│   ├── pages/                      # Enrutamiento basado en archivos
│   │   ├── index.astro             # Home / Dashboard ejecutivo de impacto
│   │   ├── cv.astro                # Curriculum Vitae dinámico y filtrable
│   │   ├── backend/
│   │   │   ├── index.astro         # Listado de proyectos Backend & Infra
│   │   │   └── [slug].astro        # Caso de estudio detallado
│   │   ├── trading/
│   │   │   ├── index.astro         # Listado y métricas de EAs y Algoritmia
│   │   │   └── [slug].astro        # Análisis de estrategia y backtest
│   │   ├── gamedev/
│   │   │   ├── index.astro         # Galería de juegos Godot
│   │   │   └── [slug].astro        # Detalles técnicos del proyecto
│   │   └── multimedia/
│   │       └── index.astro         # Hub audiovisual (Piano & Vídeo)
│   └── styles/
│       ├── tokens.css              # Variables CSS (paleta HSL, tipografías, espaciado)
│       └── global.css              # Resets, utilidades y estilos globales
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── .clinerules                     # Reglas de comportamiento y workflow del agente
```

---

## 3. Estrategia de Enrutamiento y Navegación

El sitio implementará enrutamiento estático optimizado con transiciones de vista nativas (*View Transitions API* de Astro):
- `/`: **Portal Ejecutivo & Resumen de Pilares**. Diseñado con una jerarquía visual que resume de inmediato los 4 pilares y conduce al visitante al área de su interés.
- `/cv`: **CV Dinámico**. Cronología interactiva, filtro dinámico por habilidades/tecnologías (Spring Cloud, K8s, Python, MQL5, Godot) y botón de descarga en PDF.
- `/backend`: **Hub de Backend & DevOps**. Fichas de arquitectura detalladas con diagramas visuales y código fuente.
- `/trading`: **Hub Cuantitativo**. Fichas con estadísticas de rendimiento auditables, descripción de lógica y control de riesgo de los EAs.
- `/gamedev`: **Hub de Videojuegos**. Muestra interactiva de prototipos y mecánicas desarrolladas en Godot Engine.
- `/multimedia`: **Auditorio Audiovisual**. Espacio de alto calibre con reproductor de audio integrado para escuchar piezas de piano clásico sin interrumpir la navegación.

---

## 4. Estrategia de Despliegue y CI/CD (GitHub Pages)

1. **Alojamiento Objetivo: GitHub Pages (SSG Puro)**
   - Despliegue 100% estático (Static Site Generation).
   - Sin servidores ni runtime dinámico; archivos HTML/CSS/JS y media servidos directamente a través de la infraestructura global de GitHub Pages.
   - **Configuración de URL y Base Path en `astro.config.mjs`:**
     - `site`: URL canónica del sitio (ej. `https://<usuario>.github.io` o dominio personalizado).
     - `base`: Subruta del repositorio (ej. `/<repo-name>/` si se aloja como página de proyecto, o `'/'` si es el repositorio raíz `<usuario>.github.io`). Permite que todos los assets y enlaces internos se resuelvan de forma relativa y robusta sin enlaces rotos.
     - `output: 'static'` para garantizar compilación puramente estática.

2. **Pipeline de Integración y Despliegue Continuo (GitHub Actions):**
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
     - **Checkout del código:** `actions/checkout@v4`.
     - **Configuración de Node.js:** `actions/setup-node@v4` con caché de gestor de paquetes.
     - **Instalación de Dependencias:** `npm ci` para instalaciones deterministas.
     - **Verificación de Calidad:** `npm run build` (valida TypeScript, colecciones de contenido y empaquetado estático en el directorio `dist/`).
     - **Subida de Artifact de Pages:** `actions/upload-pages-artifact@v3` apuntando a `./dist`.
     - **Despliegue a GitHub Pages:** `actions/deploy-pages@v4`.
