# Pascual Ruiz Benítez — Portfolio & Dynamic CV

[![Deploy to GitHub Pages](https://github.com/pjrbenitez/pasruiben/actions/workflows/deploy.yml/badge.svg)](https://github.com/pjrbenitez/pasruiben/actions/workflows/deploy.yml)
[![Astro Version](https://img.shields.io/badge/Astro-5.4-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Sitio web personal, portfolio interactivo de ingeniería y currículum dinámico de **Pascual Ruiz Benítez (pjrbenitez)**. Diseñado con arquitectura pura SSG de ultra alto rendimiento, tipografía fluida y estética *cyberpunk / dark HUD*.

**Despliegue en producción:** [https://pjrbenitez.github.io/pasruiben/](https://pjrbenitez.github.io/pasruiben/)

---

## 🏛️ Los 4 Pilares del Portfolio

El portfolio se estructura en torno a cuatro especialidades técnicas y creativas:

1. **[Backend & Cloud-Native (`/backend`)](https://pjrbenitez.github.io/pasruiben/backend/)**
   - Microservicios en **Java 21** y **Spring Boot 3** (Virtual Threads, ZGC).
   - Orquestación en **Kubernetes (K8s)** con GitOps mediante **ArgoCD**.
   - Streaming distribuido de eventos con **Apache Kafka** (>50.000 ops/s).
   - Arquitectura hexagonal / DDD, caché multinivel (Caffeine + Redis) y observabilidad integral con **OpenTelemetry**.

2. **[Algoritmia & Trading Cuantitativo (`/trading`)](https://pjrbenitez.github.io/pasruiben/trading/)**
   - Desarrollo de *Expert Advisors* en **MQL4 / MQL5** orientados a eventos para MetaTrader 4 y 5.
   - Pipelines de backtesting masivo con **Python 3.12** y `vectorbt` sobre 10+ años de datos tick.
   - Modelado de riesgo y robustez estadística mediante simulaciones de **Monte Carlo** (10.000 iteraciones).

3. **[Godot Engine & Simulación de Sistemas (`/gamedev`)](https://pjrbenitez.github.io/pasruiben/gamedev/)**
   - Arquitectura de software desacoplada en **Godot 4** con **C#** y **GDScript**.
   - Máquinas de estado jerárquicas (*Hierarchical State Machines - HSM*), algoritmos de generación procedural y físicas optimizadas a 60 FPS.
   - Pipeline de exportación hacia **WebAssembly (WASM)** y WebGL para ejecución embebida en navegador.

4. **[Auditorio Multimedia: Piano Clásico & Edición (`/multimedia`)](https://pjrbenitez.github.io/pasruiben/multimedia/)**
   - Interpretación de repertorio para piano clásico (Bach, Chopin, Liszt).
   - Grabación de alta fidelidad acústica mediante técnica estéreo **ORTF** y micrófonos de condensador emparejados.
   - Masterización en formato sin pérdidas **FLAC 24-bit / 96 kHz** y postproducción de vídeo en **DaVinci Resolve Studio**.

---

## 🛠️ Stack Tecnológico

- **Core SSG:** [Astro 5](https://astro.build/) (`output: 'static'`) con *View Transitions* habilitadas.
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) en modo estricto (`strict: true`).
- **Componentes Interactivos:** [React 19](https://react.dev/) para islas interactivas puntuales.
- **Estilos:** CSS nativo modular basado en tokens (`src/styles/tokens.css`, `global.css`) con variables HSL, gradientes de acento e interfaz *glassmorphism*.
- **SEO & Accesibilidad:** Metaetiquetas OpenGraph completas, JSON-LD Schema.org (`Person`), sitemap dinámico (`@astrojs/sitemap`), `robots.txt`, Skip Link y cumplimiento WCAG AA.
- **Pipeline CI/CD:** GitHub Actions con despliegue automatizado en GitHub Pages.

---

## 🚀 Desarrollo Local

### Prerrequisitos
- **Node.js:** v20 o superior
- **npm:** v10 o superior

### Instalación y ejecución
```bash
# Clonar el repositorio
git clone https://github.com/pjrbenitez/pasruiben.git
cd pasruiben

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Validación de tipos y compilación estática
npm run build

# Previsualizar el build estático localmente
npm run preview
```

---

## 📝 Gestión de Contenido

El sitio utiliza **Astro Content Collections** para gestionar los proyectos mediante archivos Markdown estructurados con frontmatter tipado:

- `src/content/backend/*.md`: Casos de estudio de arquitectura backend y cloud.
- `src/content/trading/*.md`: Estrategias algorítmicas y sistemas cuantitativos.
- `src/content/gamedev/*.md`: Devlogs y proyectos en Godot.
- `src/content/multimedia/*.md`: Catálogo de grabaciones musicales y proyectos audiovisuales.

Para agregar una nueva ficha técnica, basta con crear un archivo `.md` en la colección deseada respetando el esquema definido en `src/content.config.ts`.

---

## 🚢 Despliegue en GitHub Pages

El repositorio cuenta con integración continua configurada en `.github/workflows/deploy.yml`:
1. Cada `git push` a la rama `main` dispara el flujo de GitHub Actions.
2. Se instalan las dependencias (`npm ci`) y se ejecuta `npm run build`.
3. Astro genera los 18 archivos estáticos en `./dist` resolviendo todas las rutas bajo el subdirectorio `/pasruiben/`.
4. La acción oficial `actions/deploy-pages@v4` publica automáticamente el sitio en [https://pjrbenitez.github.io/pasruiben/](https://pjrbenitez.github.io/pasruiben/).

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.\n