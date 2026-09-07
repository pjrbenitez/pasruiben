import type { Locale } from './languages';

export interface HomeTranslations {
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitlePrefix: string;
    subtitleName: string;
    subtitleSuffix: string;
    cvBtn: string;
    pillarsBtn: string;
  };
  terminal: {
    title: string;
    status: string;
    command: string;
    cursor: string;
    items: { label: string; val: string; colorClass?: string }[];
  };
  stats: {
    value: string;
    unit: string;
    label: string;
    description: string;
  }[];
  pillars: {
    introBadge: string;
    introTitle: string;
    introSubtitle: string;
    highlightsTitle: string;
    actionBtn: string;
    items: {
      id: string;
      number: string;
      title: string;
      badge: string;
      badgeClass: string;
      gradientClass: string;
      accentVar: string;
      desc: string;
      features: string[];
      tech: string[];
      href: string;
    }[];
  };
  spotlight: {
    badge: string;
    title: string;
    viewAllCv: string;
    items: {
      category: string;
      badgeClass: string;
      title: string;
      summary: string;
      metrics: string;
      tags: string[];
      href: string;
    }[];
  };
  cta: {
    badge: string;
    title: string;
    desc: string;
    emailBtn: string;
    cvBtn: string;
  };
}

export const HOME_TRANSLATIONS: Record<Locale, HomeTranslations> = {
  en: {
    hero: {
      badge: 'Available for high-impact technical initiatives',
      titleStart: 'Distributed ',
      titleHighlight: 'software engineering',
      titleEnd: ', algorithmic thinking, and technical excellence.',
      subtitlePrefix: "I'm ",
      subtitleName: 'Pascual Ruiz Benítez',
      subtitleSuffix: ', Tech Lead and Cloud-Native Architect. I build mission-critical enterprise platforms, design quantitative algorithmic systems, develop game simulations in Godot, and produce acoustic high-fidelity multimedia.',
      cvBtn: 'Explore Dynamic CV',
      pillarsBtn: 'View 4 Pillars',
    },
    terminal: {
      title: 'pjr@edge-node: ~/architecture/telemetry.sys',
      status: 'SYNCED',
      command: 'sysctl --inspect-profile --verbose',
      cursor: 'READY_FOR_ENGAGEMENT_',
      items: [
        { label: 'PROFILE:', val: 'Pascual Ruiz Benítez' },
        { label: 'ROLE:', val: 'Tech Lead & Cloud Architect', colorClass: 't-cyan' },
        { label: 'BACKEND:', val: 'Java 21 • Spring Cloud • Kafka • K8s' },
        { label: 'DEVOPS:', val: 'GitOps • ArgoCD • Zero-Downtime' },
        { label: 'QUANT:', val: 'MQL4/5 • Python • Backtesting Audit', colorClass: 't-green' },
        { label: 'GAMEDEV:', val: 'Godot 4 • Shaders • WebAssembly', colorClass: 't-purple' },
        { label: 'CREATIVE:', val: 'Classical Piano • Lossless • Video Post', colorClass: 't-amber' },
      ],
    },
    stats: [
      {
        value: '+10',
        unit: 'Years',
        label: 'Engineering & Leadership',
        description: 'Resilient enterprise architectures',
      },
      {
        value: '4',
        unit: 'Pillars',
        label: 'Core Disciplines',
        description: 'Backend, Trading, Godot & Multimedia',
      },
      {
        value: '99.99%',
        unit: 'SLA',
        label: 'Cloud Resilience',
        description: 'Fault-tolerant distributed microservices',
      },
      {
        value: 'GitOps',
        unit: 'ArgoCD',
        label: 'Continuous Delivery',
        description: 'Declarative zero-downtime automation',
      },
    ],
    pillars: {
      introBadge: 'Domains of Specialization',
      introTitle: 'The Four Technical Pillars',
      introSubtitle: 'A rare synergy between mission-critical infrastructure engineering, mathematical quantitative finance, and creative artistic precision.',
      highlightsTitle: 'Key Highlights',
      actionBtn: 'Explore Pillar',
      items: [
        {
          id: 'backend',
          number: '01',
          title: 'Backend & Cloud-Native',
          badge: 'Critical Architecture',
          badgeClass: 'badge-backend',
          gradientClass: 'gradient-text-backend',
          accentVar: 'var(--accent-backend)',
          desc: 'Distributed microservices architectures powered by Java 21 and Spring Cloud, high-throughput asynchronous event streaming with Apache Kafka, and Kubernetes orchestration via ArgoCD GitOps.',
          features: [
            'Microservices with Spring Boot 3 & Spring Cloud',
            'Event-Driven Architecture with Apache Kafka',
            'Declarative automated GitOps delivery with ArgoCD',
            'Fault tolerance, Circuit Breakers & Observability',
          ],
          tech: ['Java 21', 'Spring Cloud', 'Kubernetes', 'ArgoCD', 'Kafka', 'PostgreSQL'],
          href: '/backend',
        },
        {
          id: 'trading',
          number: '02',
          title: 'Algorithmic & Quantitative Trading',
          badge: 'Quantitative Finance',
          badgeClass: 'badge-trading',
          gradientClass: 'gradient-text-trading',
          accentVar: 'var(--accent-trading)',
          desc: 'Development of automated Expert Advisors for MetaTrader (MQL4/MQL5) and analytical backtesting pipelines in Python. Strict risk budgeting, Monte Carlo stress testing, and audited metrics.',
          features: [
            'Robust event-driven Expert Advisors in MQL4 & MQL5',
            'Quantitative analysis & backtesting pipelines in Python',
            'Asymmetric risk management and drawdown constraints',
            'Audited metrics: Profit Factor, Sharpe & Sortino ratios',
          ],
          tech: ['MQL5', 'Python', 'Pandas', 'Backtrader', 'MetaTrader', 'Risk Control'],
          href: '/trading',
        },
        {
          id: 'gamedev',
          number: '03',
          title: 'Godot Engine & System Simulation',
          badge: 'Game Systems & Wasm',
          badgeClass: 'badge-gamedev',
          gradientClass: 'gradient-text-gamedev',
          accentVar: 'var(--accent-gamedev)',
          desc: 'Development of interactive prototypes and simulations in Godot Engine 4.x. Implementation of decoupled Hierarchical State Machines, physics optimization, and WebAssembly compilation.',
          features: [
            'Game architectural patterns (State Machines, ECS)',
            'Custom rendering shaders and performance profiling',
            'Cross-platform export and web browser execution (Wasm)',
            'Modular game mechanic design in GDScript & C#',
          ],
          tech: ['Godot 4', 'GDScript', 'C#', 'GLSL Shaders', 'WebAssembly'],
          href: '/gamedev',
        },
        {
          id: 'multimedia',
          number: '04',
          title: 'Classical Piano & Acoustic Production',
          badge: 'Acoustic & Visual Precision',
          badgeClass: 'badge-media',
          gradientClass: 'gradient-text-media',
          accentVar: 'var(--accent-media)',
          desc: 'High-difficulty classical piano performances (Baroque, Classical, and Romantic repertoire) integrated with studio acoustic recording, multichannel synchronization, and cinematic color grading.',
          features: [
            'Concert-grade performance of demanding masterworks',
            'Studio acoustic recording & mastering in 24-bit/96kHz lossless',
            'Cinematic post-production and DaVinci color grading',
            'Custom web player preserving dynamic acoustic range',
          ],
          tech: ['Classical Piano', 'Lossless Audio', 'DaVinci Resolve', 'Color Grading'],
          href: '/multimedia',
        },
      ],
    },
    spotlight: {
      badge: 'Showcase',
      title: 'Featured Case Studies & Systems',
      viewAllCv: 'View full track record in CV',
      items: [
        {
          category: 'Backend & Cloud',
          badgeClass: 'badge-backend',
          title: 'Resilient Cloud-Native Microservices Architecture',
          summary: 'High-throughput transactional platform with Java 21, Spring Cloud, and GitOps orchestration via ArgoCD on multi-zone Kubernetes clusters.',
          metrics: '99.99% Uptime &bull; Zero-Downtime Releases',
          tags: ['Spring Cloud', 'Kubernetes', 'ArgoCD', 'Kafka'],
          href: '/backend',
        },
        {
          category: 'Algorithmic Trading',
          badgeClass: 'badge-trading',
          title: 'Dynamic Hedging EA & Quantitative Risk Control',
          summary: 'Algorithmic strategy for MetaTrader 5 featuring volatility-adjusted position sizing and a Python statistical validation pipeline.',
          metrics: 'Profit Factor: 2.18 &bull; Max Drawdown &lt; 6.5%',
          tags: ['MQL5', 'Python', 'Backtesting', 'Monte Carlo'],
          href: '/trading',
        },
        {
          category: 'Godot Engine',
          badgeClass: 'badge-gamedev',
          title: 'Physics Simulation Engine & 2D/3D State Machine',
          summary: 'Simulation-oriented architecture with decoupled entity logic, optimized shaders, and direct browser WebAssembly export.',
          metrics: 'Solid 60 FPS &bull; Native WebAssembly',
          tags: ['Godot 4', 'GDScript / C#', 'Shaders', 'Wasm'],
          href: '/gamedev',
        },
      ],
    },
    cta: {
      badge: 'Collaboration & Contact',
      title: 'Have a high-impact technical challenge or architecture in mind?',
      desc: 'Always open to discussing distributed engineering architecture, quantitative algorithmic models, or innovative software initiatives.',
      emailBtn: 'Contact via Email',
      cvBtn: 'Review Curriculum Vitae',
    },
  },
  es: {
    hero: {
      badge: 'Disponible para iniciativas técnicas de alto impacto',
      titleStart: 'Ingeniería de software ',
      titleHighlight: 'distribuida',
      titleEnd: ', pensamiento algorítmico y excelencia técnica.',
      subtitlePrefix: 'Soy ',
      subtitleName: 'Pascual Ruiz Benítez',
      subtitleSuffix: ', Tech Lead e Ingeniero de Software. Construyo plataformas empresariales de misión crítica, diseño sistemas algorítmicos cuantitativos, desarrollo simulaciones en Godot y produzco contenido multimedia de alta fidelidad.',
      cvBtn: 'Explorar CV Dinámico',
      pillarsBtn: 'Ver 4 Pilares',
    },
    terminal: {
      title: 'pjr@edge-node: ~/architecture/telemetry.sys',
      status: 'SYNCED',
      command: 'sysctl --inspect-profile --verbose',
      cursor: 'READY_FOR_ENGAGEMENT_',
      items: [
        { label: 'PROFILE:', val: 'Pascual Ruiz Benítez' },
        { label: 'ROLE:', val: 'Tech Lead & Cloud Architect', colorClass: 't-cyan' },
        { label: 'BACKEND:', val: 'Java 21 • Spring Cloud • Kafka • K8s' },
        { label: 'DEVOPS:', val: 'GitOps • ArgoCD • Zero-Downtime' },
        { label: 'QUANT:', val: 'MQL4/5 • Python • Backtesting Audit', colorClass: 't-green' },
        { label: 'GAMEDEV:', val: 'Godot 4 • Shaders • WebAssembly', colorClass: 't-purple' },
        { label: 'CREATIVE:', val: 'Piano Clásico • Lossless • Video Post', colorClass: 't-amber' },
      ],
    },
    stats: [
      {
        value: '+10',
        unit: 'Años',
        label: 'Ingeniería & Liderazgo',
        description: 'Arquitecturas empresariales resilientes',
      },
      {
        value: '4',
        unit: 'Pilares',
        label: 'Especializaciones Clave',
        description: 'Backend, Trading, Godot y Multimedia',
      },
      {
        value: '99.99%',
        unit: 'SLA',
        label: 'Resiliencia Cloud',
        description: 'Microservicios con tolerancia a fallos',
      },
      {
        value: 'GitOps',
        unit: 'ArgoCD',
        label: 'Despliegues Continuos',
        description: 'Automatización declarativa zero-downtime',
      },
    ],
    pillars: {
      introBadge: 'Dominios de Especialización',
      introTitle: 'Los Cuatro Pilares Técnicos',
      introSubtitle: 'Una combinación única entre solvencia técnica en infraestructuras de misión crítica, rigor matemático en finanzas cuantitativas y sensibilidad artística y creativa.',
      highlightsTitle: 'Puntos Destacados',
      actionBtn: 'Explorar área',
      items: [
        {
          id: 'backend',
          number: '01',
          title: 'Backend & Cloud-Native',
          badge: 'Arquitectura Crítica',
          badgeClass: 'badge-backend',
          gradientClass: 'gradient-text-backend',
          accentVar: 'var(--accent-backend)',
          desc: 'Arquitecturas de microservicios distribuidos con Java y Spring Cloud, mensajería asíncrona de alto throughput con Apache Kafka y orquestación con Kubernetes y ArgoCD GitOps.',
          features: [
            'Microservicios con Spring Boot 3 & Spring Cloud',
            'Event-Driven Architecture con Apache Kafka',
            'GitOps declarativo automatizado con ArgoCD',
            'Tolerancia a fallos, Circuit Breakers & Observabilidad',
          ],
          tech: ['Java 21', 'Spring Cloud', 'Kubernetes', 'ArgoCD', 'Kafka', 'PostgreSQL'],
          href: '/backend',
        },
        {
          id: 'trading',
          number: '02',
          title: 'Algoritmia & Trading Cuantitativo',
          badge: 'Finanzas Cuantitativas',
          badgeClass: 'badge-trading',
          gradientClass: 'gradient-text-trading',
          accentVar: 'var(--accent-trading)',
          desc: 'Desarrollo de Expert Advisors automatizados para MetaTrader (MQL4/MQL5) y pipelines analíticos en Python. Enfoque riguroso en gestión de riesgo, Monte Carlo y backtesting auditado.',
          features: [
            'Expert Advisors (EAs) robustos en MQL4 y MQL5',
            'Análisis cuantitativo y backtesting con Python',
            'Gestión asimétrica de riesgo y control de drawdown',
            'Métricas auditadas: Profit Factor, Sharpe Ratio, Sortino',
          ],
          tech: ['MQL5', 'Python', 'Pandas', 'Backtrader', 'MetaTrader', 'Risk Control'],
          href: '/trading',
        },
        {
          id: 'gamedev',
          number: '03',
          title: 'Desarrollo en Godot & Simulación',
          badge: 'Simulación & Juegos',
          badgeClass: 'badge-gamedev',
          gradientClass: 'gradient-text-gamedev',
          accentVar: 'var(--accent-gamedev)',
          desc: 'Creación de prototipos interactivos y simulaciones en Godot Engine 4.x. Implementación de máquinas de estados jerárquicas, optimización de físicas y compilación a WebAssembly.',
          features: [
            'Patrones de arquitectura de juego (State Machines, ECS)',
            'Optimización de rendering y shaders personalizados',
            'Exportación multiplataforma y navegador (Wasm)',
            'Diseño modular de mecánicas de juego en GDScript/C#',
          ],
          tech: ['Godot 4', 'GDScript', 'C#', 'GLSL Shaders', 'WebAssembly'],
          href: '/gamedev',
        },
        {
          id: 'multimedia',
          number: '04',
          title: 'Multimedia & Piano Clásico',
          badge: 'Rigor Acústico & Visual',
          badgeClass: 'badge-media',
          gradientClass: 'gradient-text-media',
          accentVar: 'var(--accent-media)',
          desc: 'Interpretaciones de piano clásico de alta dificultad técnica (repertorio barroco, clásico y romántico) combinadas con edición de vídeo profesional, sincronización multicanal y corrección de color.',
          features: [
            'Interpretación de obras clásicas de alta exigencia',
            'Grabación y masterización de audio acústico en alta fidelidad',
            'Postproducción y gradación de color profesional',
            'Reproductor web personalizado libre de compresión destructiva',
          ],
          tech: ['Piano Clásico', 'Audio Lossless', 'DaVinci Resolve', 'Color Grading'],
          href: '/multimedia',
        },
      ],
    },
    spotlight: {
      badge: 'Showcase',
      title: 'Casos de Estudio & Proyectos Clave',
      viewAllCv: 'Ver trayectoria en CV',
      items: [
        {
          category: 'Backend & Cloud',
          badgeClass: 'badge-backend',
          title: 'Arquitectura de Microservicios Cloud-Native Resiliente',
          summary: 'Plataforma transaccional con Java 21, Spring Cloud y orquestación GitOps con ArgoCD en clúster Kubernetes multizona.',
          metrics: '99.99% Uptime &bull; Despliegues Zero-Downtime',
          tags: ['Spring Cloud', 'Kubernetes', 'ArgoCD', 'Kafka'],
          href: '/backend',
        },
        {
          category: 'Algoritmia & Trading',
          badgeClass: 'badge-trading',
          title: 'Expert Advisor de Cobertura Dinámica y Gestión de Riesgo',
          summary: 'Estrategia algorítmica para MetaTrader 5 con dimensionamiento de lote por volatilidad y pipeline cuantitativo en Python.',
          metrics: 'Profit Factor: 2.18 &bull; Max Drawdown &lt; 6.5%',
          tags: ['MQL5', 'Python', 'Backtesting', 'Monte Carlo'],
          href: '/trading',
        },
        {
          category: 'Godot Engine',
          badgeClass: 'badge-gamedev',
          title: 'Motor de Simulación Física y Máquina de Estados 2D/3D',
          summary: 'Arquitectura orientada a simulación interactiva con renderizado optimizado y compilación directa a WebAssembly.',
          metrics: '60 FPS estables &bull; WebAssembly nativo',
          tags: ['Godot 4', 'GDScript / C#', 'Shaders', 'Wasm'],
          href: '/gamedev',
        },
      ],
    },
    cta: {
      badge: 'Contacto & Colaboración',
      title: '¿Tienes un proyecto de alto impacto técnico o arquitectura en mente?',
      desc: 'Siempre abierto a discutir desafíos de ingeniería distribuida, modelos cuantitativos o iniciativas de software innovadoras.',
      emailBtn: 'Contactar por Email',
      cvBtn: 'Consultar Curriculum Vitae',
    },
  },
};
