# Plan de Trabajo y Backlog de Tareas (SDD Tasks Backlog)

Este documento registra el progreso secuencial del proyecto de acuerdo con la metodologÃ­a **Specification-Driven Development (SDD)**. Cada tarea debe completarse, verificarse y marcarse como `[x]` antes de proceder a la siguiente fase de desarrollo.

---

## Convenciones de Estado
- `[ ]` **Pendiente:** Tarea planificada pero aÃºn no iniciada.
- `[/]` **En Progreso:** Tarea en ejecuciÃ³n activa.
- `[x]` **Completado:** Tarea implementada, verificada y documentada.

---

## Backlog Secuencial de Tareas

### Fase 1: Fundaciones y ConfiguraciÃ³n Inicial
- [x] **Tarea 1: Setup del Repositorio, Dependencias Base y Pipeline GitHub Pages**
  - Inicializar proyecto Astro 5 con TypeScript en modo estricto y React (para islas).
  - Configurar `astro.config.mjs` con `output: 'static'` y soporte para `site` / `base` path (GitHub Pages).
  - Configurar scripts de desarrollo, build y previsualizaciÃ³n (`dev`, `build`, `preview`).
  - Configurar linters y formateadores de cÃ³digo (Prettier / ESLint).
  - Crear el pipeline de CI/CD para GitHub Pages en `.github/workflows/deploy.yml`.
  - Validar arranque del servidor local de desarrollo y build estÃ¡tico sin errores (`dist/`).
  - *Criterio de AceptaciÃ³n:* `npm run build` genera la salida estÃ¡tica en `dist/`, el workflow de GitHub Actions estÃ¡ listo y validado, y `npm run dev` arranca de forma limpia.

- [x] **Tarea 2: Sistema de DiseÃ±o y Layout Base**
  - Implementar tokens de diseÃ±o CSS (`tokens.css`): paleta de colores HSL (tema oscuro tÃ©cnico y refinado, tema claro opcional), escala tipogrÃ¡fica con fuentes modernas (Inter / Outfit y JetBrains Mono para cÃ³digo/nÃºmeros) y variables de espaciado.
  - Crear el layout maestro `BaseLayout.astro` con metadatos SEO base, Open Graph, View Transitions y accesibilidad semÃ¡ntica.
  - Implementar la barra de navegaciÃ³n principal (`Header.astro`) y pie de pÃ¡gina (`Footer.astro`) con enlaces a redes profesionales (GitHub, LinkedIn, Email).
  - *Criterio de AceptaciÃ³n:* Layout responsivo funcional con estilos consistentes y navegaciÃ³n fluida entre pÃ¡ginas de prueba.

---

### Fase 2: PÃ¡gina Principal y NÃºcleo de Contenido
- [x] **Tarea 3: Home / Dashboard Principal (`/`)**
  - Crear la secciÃ³n Hero con presentaciÃ³n de alto impacto: titular profesional, resumen ejecutivo y llamada a la acciÃ³n hacia el CV y los proyectos.
  - DiseÃ±ar el selector interactivo de los 4 pilares:
    - Backend & Infraestructura Cloud
    - Algoritmia & Trading Cuantitativo
    - Desarrollo & SimulaciÃ³n (Godot)
    - Multimedia & Creatividad (Piano & VÃ­deo)
  - AÃ±adir secciÃ³n de "Proyectos Destacados" con enlaces directos a las Ã¡reas correspondientes.
  - *Criterio de AceptaciÃ³n:* PÃ¡gina de inicio visualmente atractiva, sin contenido de relleno (*lorem ipsum*), con transiciones suaves y tiempos de carga instantÃ¡neos.

- [x] **Tarea 4: SecciÃ³n de Backend e Infraestructura Cloud (`/backend`)**
  - Configurar la *Content Collection* para proyectos de Backend (Spring Cloud, Kubernetes, ArgoCD, Kafka).
  - DiseÃ±ar tarjetas interactivas de casos de estudio mostrando: arquitectura, tecnologÃ­as, desafÃ­os tÃ©cnicos y soluciones implementadas.
  - Integrar visualizadores de diagramas de arquitectura (SVG / Mermaid / componentes interactivos).
  - *Criterio de AceptaciÃ³n:* Fichas tÃ©cnicas completas que demuestren profundidad de ingenierÃ­a senior con diagramas legibles y cÃ³digo estructurado.

- [x] **Tarea 5: SecciÃ³n de Algoritmia y Trading Cuantitativo (`/trading`)**
  - Configurar la *Content Collection* para estrategias de trading y EAs (MQL4, MQL5, Python).
  - Implementar tarjetas de proyectos con desglose de lÃ³gica operativa, gestiÃ³n de riesgo y mÃ©tricas auditables (Profit Factor, Sharpe Ratio, Max Drawdown).
  - Integrar componente interactivo ligero para visualizar curvas de balance / equidad simuladas.
  - *Criterio de AceptaciÃ³n:* PresentaciÃ³n rigurosa de trading cuantitativo con mÃ©tricas comprensibles y transparentes.

- [x] **Tarea 6: SecciÃ³n de Desarrollo en Godot & SimulaciÃ³n (`/gamedev`)**
  - Configurar la *Content Collection* para proyectos y prototipos de Godot Engine.
  - Implementar showcase con capturas, vÃ­deos demostrativos de mecÃ¡nicas y anÃ¡lisis de arquitectura de software para juegos (State Machines, optimizaciÃ³n de fÃ­sicas).
  - Preparar contenedor para posible embebido WebGL/WebAssembly de prototipos jugables ligeros.
  - *Criterio de AceptaciÃ³n:* GalerÃ­a de juegos atractiva con desglose de retos de desarrollo y enlaces a cÃ³digo o builds ejecutables.

- [ ] **Tarea 7: Auditorio Multimedia: Piano ClÃ¡sico y EdiciÃ³n de VÃ­deo (`/multimedia`)**
  - Desarrollar un reproductor de audio customizado, minimalista y persistente para escuchar interpretaciones de piano clÃ¡sico.
  - Crear catÃ¡logo de piezas musicales con notas explicativas de contexto histÃ³rico e interpretaciÃ³n.
  - SecciÃ³n de muestras audiovisuales y postproducciÃ³n de vÃ­deo (motion graphics, gradaciÃ³n de color).
  - *Criterio de AceptaciÃ³n:* Reproductor de audio fluido con controles limpios, visualizador de onda sutil y carga eficiente de archivos multimedia.

- [ ] **Tarea 8: CV DinÃ¡mico e Interactivo (`/cv`)**
  - Implementar lÃ­nea de tiempo interactiva con historial profesional, educaciÃ³n y certificaciones.
  - Desarrollar filtro interactivo por tecnologÃ­as (ej. filtrar proyectos por "Kubernetes", "Spring", "Python", "Godot").
  - BotÃ³n de exportaciÃ³n o descarga de CV estructurado en formato PDF (versiones en espaÃ±ol e inglÃ©s).
  - Modo de vista simplificado para impresiÃ³n/lectura rÃ¡pida.
  - *Criterio de AceptaciÃ³n:* CV accesible, interactivo y con experiencia de filtrado instantÃ¡nea sin recarga de pÃ¡gina.

---

### Fase 3: OptimizaciÃ³n, AuditorÃ­a y Despliegue
- [ ] **Tarea 9: OptimizaciÃ³n SEO, Accesibilidad y Rendimiento (Lighthouse 100/100)**
  - Configurar `sitemap-xml`, `robots.txt` y metaetiquetas OpenGraph completas para redes sociales.
  - AuditorÃ­a de accesibilidad (WCAG AA compliant, navegaciÃ³n por teclado, roles ARIA).
  - OptimizaciÃ³n de imÃ¡genes y compresiÃ³n de activos estÃ¡ticos.
  - *Criterio de AceptaciÃ³n:* AuditorÃ­a de Lighthouse con puntuaciÃ³n de 100 en Rendimiento, Accesibilidad, Mejores PrÃ¡cticas y SEO.

- [ ] **Tarea 10: AuditorÃ­a Final y Despliegue en ProducciÃ³n (GitHub Pages)**
  - ComprobaciÃ³n final del pipeline de GitHub Actions y despliegue en GitHub Pages.
  - ValidaciÃ³n de enlaces relativos y resoluciÃ³n de base path en el entorno de producciÃ³n.
  - Documentar instrucciones para actualizaciÃ³n continua de contenido y creaciÃ³n de releases.
  - *Criterio de AceptaciÃ³n:* Sitio web 100% operativo en GitHub Pages, con todas las rutas y assets resolviÃ©ndose correctamente.










