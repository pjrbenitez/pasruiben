# Plan de Trabajo y Backlog de Tareas (SDD Tasks Backlog)

Este documento registra el progreso secuencial del proyecto de acuerdo con la metodología **Specification-Driven Development (SDD)**. Cada tarea debe completarse, verificarse y marcarse como `[x]` antes de proceder a la siguiente fase de desarrollo.

---

## Convenciones de Estado
- `[ ]` **Pendiente:** Tarea planificada pero aún no iniciada.
- `[/]` **En Progreso:** Tarea en ejecución activa.
- `[x]` **Completado:** Tarea implementada, verificada y documentada.

---

## Backlog Secuencial de Tareas

### Fase 1: Fundaciones y Configuración Inicial
- [x] **Tarea 1: Setup del Repositorio, Dependencias Base y Pipeline GitHub Pages**
  - Inicializar proyecto Astro 5 con TypeScript en modo estricto y React (para islas).
  - Configurar `astro.config.mjs` con `output: 'static'` y soporte para `site` / `base` path (GitHub Pages).
  - Configurar scripts de desarrollo, build y previsualización (`dev`, `build`, `preview`).
  - Configurar linters y formateadores de código (Prettier / ESLint).
  - Crear el pipeline de CI/CD para GitHub Pages en `.github/workflows/deploy.yml`.
  - Validar arranque del servidor local de desarrollo y build estático sin errores (`dist/`).
  - *Criterio de Aceptación:* `npm run build` genera la salida estática en `dist/`, el workflow de GitHub Actions está listo y validado, y `npm run dev` arranca de forma limpia.

- [ ] **Tarea 2: Sistema de Diseño y Layout Base**
  - Implementar tokens de diseño CSS (`tokens.css`): paleta de colores HSL (tema oscuro técnico y refinado, tema claro opcional), escala tipográfica con fuentes modernas (Inter / Outfit y JetBrains Mono para código/números) y variables de espaciado.
  - Crear el layout maestro `BaseLayout.astro` con metadatos SEO base, Open Graph, View Transitions y accesibilidad semántica.
  - Implementar la barra de navegación principal (`Header.astro`) y pie de página (`Footer.astro`) con enlaces a redes profesionales (GitHub, LinkedIn, Email).
  - *Criterio de Aceptación:* Layout responsivo funcional con estilos consistentes y navegación fluida entre páginas de prueba.

---

### Fase 2: Página Principal y Núcleo de Contenido
- [ ] **Tarea 3: Home / Dashboard Principal (`/`)**
  - Crear la sección Hero con presentación de alto impacto: titular profesional, resumen ejecutivo y llamada a la acción hacia el CV y los proyectos.
  - Diseñar el selector interactivo de los 4 pilares:
    - Backend & Infraestructura Cloud
    - Algoritmia & Trading Cuantitativo
    - Desarrollo & Simulación (Godot)
    - Multimedia & Creatividad (Piano & Vídeo)
  - Añadir sección de "Proyectos Destacados" con enlaces directos a las áreas correspondientes.
  - *Criterio de Aceptación:* Página de inicio visualmente atractiva, sin contenido de relleno (*lorem ipsum*), con transiciones suaves y tiempos de carga instantáneos.

- [ ] **Tarea 4: Sección de Backend e Infraestructura Cloud (`/backend`)**
  - Configurar la *Content Collection* para proyectos de Backend (Spring Cloud, Kubernetes, ArgoCD, Kafka).
  - Diseñar tarjetas interactivas de casos de estudio mostrando: arquitectura, tecnologías, desafíos técnicos y soluciones implementadas.
  - Integrar visualizadores de diagramas de arquitectura (SVG / Mermaid / componentes interactivos).
  - *Criterio de Aceptación:* Fichas técnicas completas que demuestren profundidad de ingeniería senior con diagramas legibles y código estructurado.

- [ ] **Tarea 5: Sección de Algoritmia y Trading Cuantitativo (`/trading`)**
  - Configurar la *Content Collection* para estrategias de trading y EAs (MQL4, MQL5, Python).
  - Implementar tarjetas de proyectos con desglose de lógica operativa, gestión de riesgo y métricas auditables (Profit Factor, Sharpe Ratio, Max Drawdown).
  - Integrar componente interactivo ligero para visualizar curvas de balance / equidad simuladas.
  - *Criterio de Aceptación:* Presentación rigurosa de trading cuantitativo con métricas comprensibles y transparentes.

- [ ] **Tarea 6: Sección de Desarrollo en Godot & Simulación (`/gamedev`)**
  - Configurar la *Content Collection* para proyectos y prototipos de Godot Engine.
  - Implementar showcase con capturas, vídeos demostrativos de mecánicas y análisis de arquitectura de software para juegos (State Machines, optimización de físicas).
  - Preparar contenedor para posible embebido WebGL/WebAssembly de prototipos jugables ligeros.
  - *Criterio de Aceptación:* Galería de juegos atractiva con desglose de retos de desarrollo y enlaces a código o builds ejecutables.

- [ ] **Tarea 7: Auditorio Multimedia: Piano Clásico y Edición de Vídeo (`/multimedia`)**
  - Desarrollar un reproductor de audio customizado, minimalista y persistente para escuchar interpretaciones de piano clásico.
  - Crear catálogo de piezas musicales con notas explicativas de contexto histórico e interpretación.
  - Sección de muestras audiovisuales y postproducción de vídeo (motion graphics, gradación de color).
  - *Criterio de Aceptación:* Reproductor de audio fluido con controles limpios, visualizador de onda sutil y carga eficiente de archivos multimedia.

- [ ] **Tarea 8: CV Dinámico e Interactivo (`/cv`)**
  - Implementar línea de tiempo interactiva con historial profesional, educación y certificaciones.
  - Desarrollar filtro interactivo por tecnologías (ej. filtrar proyectos por "Kubernetes", "Spring", "Python", "Godot").
  - Botón de exportación o descarga de CV estructurado en formato PDF (versiones en español e inglés).
  - Modo de vista simplificado para impresión/lectura rápida.
  - *Criterio de Aceptación:* CV accesible, interactivo y con experiencia de filtrado instantánea sin recarga de página.

---

### Fase 3: Optimización, Auditoría y Despliegue
- [ ] **Tarea 9: Optimización SEO, Accesibilidad y Rendimiento (Lighthouse 100/100)**
  - Configurar `sitemap-xml`, `robots.txt` y metaetiquetas OpenGraph completas para redes sociales.
  - Auditoría de accesibilidad (WCAG AA compliant, navegación por teclado, roles ARIA).
  - Optimización de imágenes y compresión de activos estáticos.
  - *Criterio de Aceptación:* Auditoría de Lighthouse con puntuación de 100 en Rendimiento, Accesibilidad, Mejores Prácticas y SEO.

- [ ] **Tarea 10: Auditoría Final y Despliegue en Producción (GitHub Pages)**
  - Comprobación final del pipeline de GitHub Actions y despliegue en GitHub Pages.
  - Validación de enlaces relativos y resolución de base path en el entorno de producción.
  - Documentar instrucciones para actualización continua de contenido y creación de releases.
  - *Criterio de Aceptación:* Sitio web 100% operativo en GitHub Pages, con todas las rutas y assets resolviéndose correctamente.
