import type { Locale } from './languages';

export interface HubTranslations {
  backend: {
    heroBadge: string;
    title: string;
    titleHighlight: string;
    intro: string;
    quickStack: { label: string; val: string }[];
    casesBadge: string;
    casesTitle: string;
    casesSubtitle: string;
    capabilitiesBadge: string;
    capabilitiesTitle: string;
    capabilities: { area: string; items: string[] }[];
  };
  trading: {
    heroBadge: string;
    title: string;
    titleHighlight: string;
    intro: string;
    quickMetrics: { label: string; val: string; desc: string }[];
    strategiesBadge: string;
    strategiesTitle: string;
    strategiesSubtitle: string;
    riskBadge: string;
    riskTitle: string;
    riskRules: { rule: string; detail: string }[];
  };
  gamedev: {
    heroBadge: string;
    title: string;
    titleHighlight: string;
    intro: string;
    quickSpecs: { label: string; val: string }[];
    gamesBadge: string;
    gamesTitle: string;
    gamesSubtitle: string;
    patternsBadge: string;
    patternsTitle: string;
    patterns: { pattern: string; desc: string }[];
  };
  multimedia: {
    heroBadge: string;
    title: string;
    titleHighlight: string;
    intro: string;
    quickSpecs: { label: string; val: string }[];
    performancesBadge: string;
    performancesTitle: string;
    performancesSubtitle: string;
    gearBadge: string;
    gearTitle: string;
    gearList: { category: string; items: string[] }[];
  };
}

export const HUBS_TRANSLATIONS: Record<Locale, HubTranslations> = {
  en: {
    backend: {
      heroBadge: 'Pillar 1 • Core Engineering',
      title: 'Enterprise Backend, ',
      titleHighlight: 'Cloud-Native Infrastructure',
      intro: 'Specialization in designing, developing, and leading mission-critical distributed software architectures. Rigorous focus on resilience, horizontal scalability, automated continuous delivery, and full-stack observability.',
      quickStack: [
        { label: 'CORE RUNTIME', val: 'Java 21 LTS' },
        { label: 'FRAMEWORK', val: 'Spring Boot 3 / Cloud' },
        { label: 'ORCHESTRATION', val: 'Kubernetes' },
        { label: 'GITOPS', val: 'ArgoCD' },
        { label: 'STREAMING', val: 'Apache Kafka' },
      ],
      casesBadge: 'Case Studies',
      casesTitle: 'Implemented Architectures',
      casesSubtitle: 'In-depth breakdown of architectural decisions, resilience patterns, and real-world production metrics.',
      capabilitiesBadge: 'Technical Competencies',
      capabilitiesTitle: 'Backend & Infrastructure Mastery Matrix',
      capabilities: [
        {
          area: 'Runtime & Languages',
          items: ['Java 21 LTS (Records, Virtual Threads, Pattern Matching)', 'Spring Boot 3.x', 'TypeScript / Node.js'],
        },
        {
          area: 'Cloud Ecosystem & Orchestration',
          items: ['Kubernetes (EKS, Helm 3, RBAC, Ingress NGINX)', 'GitOps with ArgoCD & Argo Rollouts (Canary)', 'Docker & Containerd'],
        },
        {
          area: 'Messaging & Event Integration',
          items: ['Apache Kafka (Event-Driven Architecture, Outbox Pattern)', 'RESTful APIs with OpenAPI / Swagger', 'gRPC & Protocol Buffers'],
        },
        {
          area: 'Resilience & Observability',
          items: ['Resilience4j (Circuit Breakers, Bulkheads)', 'OpenTelemetry, Prometheus, Grafana, Micrometer Tracing'],
        },
        {
          area: 'Storage & Caching',
          items: ['PostgreSQL (Tuning, Partitioning)', 'Redis (Distributed cache, Redlock)', 'Liquibase / Flyway'],
        },
      ],
    },
    trading: {
      heroBadge: 'Pillar 2 • Quantitative Finance',
      title: 'Algorithmic Trading & ',
      titleHighlight: 'Quantitative Modeling',
      intro: 'Engineering of automated event-driven Expert Advisors for MetaTrader (MQL4/MQL5) and vector-based research pipelines in Python. Strict focus on risk budgeting, Monte Carlo bootstrapping, and audited backtest metrics.',
      quickMetrics: [
        { label: 'MAX DRAWDOWN', val: '< 8.5%', desc: 'Audited historical limit' },
        { label: 'PROFIT FACTOR', val: '> 2.10', desc: 'Across validated strategies' },
        { label: 'SIMULATION RUNS', val: '10,000+', desc: 'Monte Carlo iterations' },
        { label: 'CORE STACK', val: 'MQL5 / Python', desc: 'vectorbt, pandas, MetaTrader' },
      ],
      strategiesBadge: 'Trading Systems',
      strategiesTitle: 'Validated Algorithmic Strategies',
      strategiesSubtitle: 'Detailed performance breakdown, risk management parameters, and quantitative metrics.',
      riskBadge: 'Risk Protocol',
      riskTitle: 'Core Quantitative Principles',
      riskRules: [
        { rule: 'Asymmetric Risk-Reward', detail: 'Targeting minimum 1.5:1 R:R with dynamic ATR-based trailing stops.' },
        { rule: 'Capital Preservation First', detail: 'Maximum 1.0% account equity exposure per individual trade setup.' },
        { rule: 'Monte Carlo Stress Testing', detail: 'Block bootstrapping across 10,000 runs to invalidate overfitted parameters.' },
        { rule: 'Slippage & Spread Modeling', detail: 'All historical tests incorporate realistic broker spreads and latency penalties.' },
      ],
    },
    gamedev: {
      heroBadge: 'Pillar 3 • Game Systems & Simulation',
      title: 'Godot Engine, Interactive Simulation & ',
      titleHighlight: 'WebAssembly',
      intro: 'Design and implementation of gameplay systems, physics simulations, and graphics shaders in Godot Engine 4.x. Focus on clean hierarchical state machines, performance profiling, and direct in-browser WebAssembly execution.',
      quickSpecs: [
        { label: 'ENGINE', val: 'Godot 4.x' },
        { label: 'LANGUAGES', val: 'GDScript & C#' },
        { label: 'WEB TARGET', val: 'WebAssembly / WebGL' },
        { label: 'TARGET FRAME RATE', val: '60 FPS Stable' },
      ],
      gamesBadge: 'Prototypes & Projects',
      gamesTitle: 'Interactive Prototypes & Simulations',
      gamesSubtitle: 'Playable web builds and technical breakdowns of gameplay architecture.',
      patternsBadge: 'Architecture',
      patternsTitle: 'Engine Design Patterns & Techniques',
      patterns: [
        { pattern: 'Hierarchical State Machines (HSM)', desc: 'Decoupled, modular state transitions for complex entity behaviors and animation blending.' },
        { pattern: 'Deterministic Procedural Generation', desc: 'Seed-based cellular automata and BSP room partitioning algorithms.' },
        { pattern: 'Memory & Allocation Optimization', desc: 'Zero allocation per frame, object pooling for high-frequency projectiles and particle effects.' },
        { pattern: 'Cross-Compilation to WebAssembly', desc: 'Single-codebase builds delivering native browser performance without plug-ins.' },
      ],
    },
    multimedia: {
      heroBadge: 'Pillar 4 • Artistic Production',
      title: 'Classical Piano Performance & ',
      titleHighlight: 'Acoustic Sound Production',
      intro: 'Concert-level classical piano interpretation combined with professional acoustic microphony, 24-bit/96kHz lossless mastering, and cinematic multicam video post-production.',
      quickSpecs: [
        { label: 'INSTRUMENT', val: 'Concert Grand Piano' },
        { label: 'AUDIO FORMAT', val: '24-bit / 96kHz FLAC' },
        { label: 'MICROPHONY', val: 'Matched Stereo Pair (ORTF)' },
        { label: 'VIDEO WORKFLOW', val: 'DaVinci Resolve Studio' },
      ],
      performancesBadge: 'Performances',
      performancesTitle: 'Classical Repertoire & Productions',
      performancesSubtitle: 'Lossless audio recordings with dynamic acoustic range and interpretive musicological notes.',
      gearBadge: 'Production Rig',
      gearTitle: 'Recording & Post-Production Rig',
      gearList: [
        { category: 'Acoustics & Microphony', items: ['Matched stereo small diaphragm condensers in ORTF stereo configuration', 'Clean Class-A microphone preamps with low-noise floor'] },
        { category: 'DAW & Signal Processing', items: ['Reaper & iZotope RX for non-destructive spectral restoration', 'Dynamic preservation with zero harsh compression'] },
        { category: 'Video & Color Grading', items: ['DaVinci Resolve Studio with custom ACES color management', 'Multicam synchronization referenced to high-res audio master'] },
      ],
    },
  },
  es: {
    backend: {
      heroBadge: 'Pilar 1 • Core Engineering',
      title: 'Backend Empresarial, ',
      titleHighlight: 'Infraestructura Cloud-Native y GitOps',
      intro: 'Especialización en el diseño, desarrollo y liderazgo técnico de arquitecturas de software distribuidas de misión crítica. Enfoque riguroso en resiliencia, escalabilidad horizontal, despliegues continuos automatizados y observabilidad de extremo a extremo.',
      quickStack: [
        { label: 'LENGUAJE CORE', val: 'Java 21 LTS' },
        { label: 'FRAMEWORK', val: 'Spring Boot 3 / Cloud' },
        { label: 'ORQUESTACIÓN', val: 'Kubernetes' },
        { label: 'GITOPS', val: 'ArgoCD' },
        { label: 'EVENT STREAMING', val: 'Apache Kafka' },
      ],
      casesBadge: 'Casos de Estudio',
      casesTitle: 'Arquitecturas Implementadas',
      casesSubtitle: 'Análisis detallado de decisiones de diseño, patrones de resiliencia y métricas de impacto real en producción.',
      capabilitiesBadge: 'Competencias Técnicas',
      capabilitiesTitle: 'Matriz de Dominio en Backend e Infraestructura',
      capabilities: [
        {
          area: 'Runtime & Lenguajes',
          items: ['Java 21 LTS (Records, Virtual Threads, Pattern Matching)', 'Spring Boot 3.x', 'TypeScript / Node.js'],
        },
        {
          area: 'Ecosistema Cloud & Orquestación',
          items: ['Kubernetes (EKS, Helm 3, RBAC, Ingress NGINX)', 'GitOps con ArgoCD & Argo Rollouts (Canary)', 'Docker'],
        },
        {
          area: 'Mensajería & Integración',
          items: ['Apache Kafka (Event-Driven Architecture, Outbox Pattern)', 'RESTful APIs con OpenAPI / Swagger', 'gRPC'],
        },
        {
          area: 'Resiliencia & Observabilidad',
          items: ['Resilience4j (Circuit Breakers, Bulkheads)', 'OpenTelemetry, Prometheus, Grafana, Micrometer Tracing'],
        },
        {
          area: 'Almacenamiento & Caché',
          items: ['PostgreSQL (Tuning, Particionamiento)', 'Redis (Caché distribuida, Redlock)', 'Liquibase / Flyway'],
        },
      ],
    },
    trading: {
      heroBadge: 'Pilar 2 • Finanzas Cuantitativas',
      title: 'Trading Algorítmico & ',
      titleHighlight: 'Modelado Cuantitativo',
      intro: 'Desarrollo de Expert Advisors automatizados para MetaTrader (MQL4/MQL5) y pipelines analíticos en Python. Enfoque riguroso en gestión de riesgo, Monte Carlo y backtesting auditado.',
      quickMetrics: [
        { label: 'MAX DRAWDOWN', val: '< 8.5%', desc: 'Límite histórico auditado' },
        { label: 'PROFIT FACTOR', val: '> 2.10', desc: 'En estrategias validadas' },
        { label: 'ITERACIONES', val: '10.000+', desc: 'Simulaciones Monte Carlo' },
        { label: 'STACK CORE', val: 'MQL5 / Python', desc: 'vectorbt, pandas, MetaTrader' },
      ],
      strategiesBadge: 'Sistemas de Trading',
      strategiesTitle: 'Estrategias Algorítmicas Validadas',
      strategiesSubtitle: 'Desglose detallado de rendimiento, reglas de gestión de riesgo y métricas cuantitativas.',
      riskBadge: 'Protocolo de Riesgo',
      riskTitle: 'Principios Cuantitativos Fundamentales',
      riskRules: [
        { rule: 'Riesgo-Beneficio Asimétrico', detail: 'Ratio objetivo mínimo de 1.5:1 con trailing stops dinámicos basados en ATR.' },
        { rule: 'Preservación de Capital', detail: 'Exposición máxima del 1.0% del balance de la cuenta por operación individual.' },
        { rule: 'Estrés con Monte Carlo', detail: 'Remuestreo por bloques en 10.000 iteraciones para invalidar el sobreajuste.' },
        { rule: 'Modelado de Slippage y Spread', detail: 'Todos los tests históricos incorporan costes reales y latencias de broker.' },
      ],
    },
    gamedev: {
      heroBadge: 'Pilar 3 • Simulación & Videojuegos',
      title: 'Godot Engine, Simulación Interactiva & ',
      titleHighlight: 'WebAssembly',
      intro: 'Diseño e implementación de sistemas de juego, simulaciones físicas y shaders en Godot Engine 4.x. Enfoque en máquinas de estados jerárquicas limpias, optimización de rendimiento y ejecución directa en navegador con WebAssembly.',
      quickSpecs: [
        { label: 'MOTOR', val: 'Godot 4.x' },
        { label: 'LENGUAJES', val: 'GDScript & C#' },
        { label: 'TARGET WEB', val: 'WebAssembly / WebGL' },
        { label: 'TICK RATE', val: '60 FPS Estables' },
      ],
      gamesBadge: 'Prototipos & Juegos',
      gamesTitle: 'Prototipos Interactivos y Simulaciones',
      gamesSubtitle: 'Compilaciones web ejecutables y análisis técnico de arquitectura de gameplay.',
      patternsBadge: 'Arquitectura',
      patternsTitle: 'Patrones y Técnicas de Diseño',
      patterns: [
        { pattern: 'Hierarchical State Machines (HSM)', desc: 'Transiciones de estado modulares y desacopladas para IA de entidades y mezcla de animaciones.' },
        { pattern: 'Generación Procedural Determinista', desc: 'Algoritmos de autómatas celulares y particionamiento BSP basados en semillas.' },
        { pattern: 'Optimización de Memoria y Rendimiento', desc: 'Cero asignaciones por fotograma, pooling de proyectiles y partículas de alta frecuencia.' },
        { pattern: 'Compilación a WebAssembly', desc: 'Exportación directa para un rendimiento nativo fluido en navegadores sin plug-ins.' },
      ],
    },
    multimedia: {
      heroBadge: 'Pilar 4 • Producción Artística',
      title: 'Interpretación de Piano Clásico & ',
      titleHighlight: 'Producción Acústica',
      intro: 'Interpretación de piano clásico de grado profesional combinada con microfonía acústica de sala, masterización en 24-bit/96kHz lossless y postproducción de vídeo multicámara cinematográfica.',
      quickSpecs: [
        { label: 'INSTRUMENTO', val: 'Piano de Cola de Concierto' },
        { label: 'FORMATO AUDIO', val: '24-bit / 96kHz FLAC' },
        { label: 'MICROFONÍA', val: 'Par Estéreo Emparejado (ORTF)' },
        { label: 'WORKFLOW VÍDEO', val: 'DaVinci Resolve Studio' },
      ],
      performancesBadge: 'Interpretaciones',
      performancesTitle: 'Repertorio Clásico y Producciones',
      performancesSubtitle: 'Grabaciones de audio en alta fidelidad con preservación del rango dinámico y notas musicológicas.',
      gearBadge: 'Equipamiento',
      gearTitle: 'Cadena de Grabación y Postproducción',
      gearList: [
        { category: 'Acústica y Microfonía', items: ['Par estéreo de condensadores de diafragma pequeño en configuración ORTF', 'Preamplificadores limpios Clase A de muy bajo ruido de fondo'] },
        { category: 'DAW y Procesamiento', items: ['Reaper e iZotope RX para restauración espectral no destructiva', 'Preservación de la dinámica natural sin compresión invasiva'] },
        { category: 'Vídeo y Gradación de Color', items: ['DaVinci Resolve Studio con gestión de color ACES', 'Sincronización multicámara sincronizada al audio máster de alta resolución'] },
      ],
    },
  },
};
