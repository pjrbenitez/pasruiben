import type { Locale } from './languages';

export interface CvExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  tags: string[];
  achievements: string[];
  stack: string[];
}

export interface CvSkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; note?: string }[];
}

export interface CvEducationItem {
  degree: string;
  institution: string;
  period: string;
  notes: string;
}

export interface CvCertification {
  title: string;
  issuer: string;
  year: string;
}

export interface CvLanguage {
  lang: string;
  level: string;
  desc: string;
}

export interface CvTranslations {
  meta: {
    pageTitle: string;
    pageDescription: string;
    status: string;
    name: string;
    title: string;
    location: string;
    updated: string;
    printBtn: string;
    summaryP1: string;
    summaryP2: string;
  };
  filter: {
    label: string;
    options: { id: string; label: string }[];
  };
  timeline: {
    badge: string;
    heading: string;
    stackLabel: string;
    items: CvExperience[];
  };
  skills: {
    badge: string;
    heading: string;
    categories: CvSkillCategory[];
  };
  education: {
    badge: string;
    heading: string;
    formalTitle: string;
    certsTitle: string;
    langTitle: string;
    items: CvEducationItem[];
    certifications: CvCertification[];
    languages: CvLanguage[];
  };
}

export const CV_TRANSLATIONS: Record<Locale, CvTranslations> = {
  en: {
    meta: {
      pageTitle: 'Curriculum Vitae | Pascual Ruiz Benítez (pjrbenitez)',
      pageDescription: 'Technical leadership, distributed systems architecture, Kubernetes GitOps, quantitative trading, Godot game engineering, and classical piano acoustic production.',
      status: 'AVAILABLE FOR ARCHITECTURE & HIGH-IMPACT INITIATIVES',
      name: 'Pascual Ruiz Benítez',
      title: 'Senior Backend & Cloud-Native Architect | Quant & Algorithmic Developer',
      location: 'Spain (Remote / Hybrid)',
      updated: '2026',
      printBtn: 'Print / Export PDF',
      summaryP1: 'Software Engineer and Cloud-Native Architect specialized in designing <strong>fault-tolerant distributed architectures</strong>, <strong>Kubernetes infrastructures under GitOps (ArgoCD)</strong>, and high-concurrency streaming pipelines with <strong>Java 21, Spring Cloud, and Apache Kafka</strong>.',
      summaryP2: 'I blend high-rigor systems engineering with mathematical modeling in <strong>quantitative trading (MQL5/Python)</strong>, game simulation architectures in <strong>Godot 4 (C#/WASM)</strong>, and the acoustic precision of <strong>high-fidelity classical piano</strong>.',
    },
    filter: {
      label: 'FILTER EXPERIENCE:',
      options: [
        { id: 'all', label: 'Full Career' },
        { id: 'backend', label: 'Backend & Cloud' },
        { id: 'kubernetes', label: 'Kubernetes & GitOps' },
        { id: 'trading', label: 'Quantitative Trading' },
        { id: 'gamedev', label: 'Godot & Simulation' },
        { id: 'architecture', label: 'Architecture & Leadership' },
      ],
    },
    timeline: {
      badge: '01 / CAREER TRACK',
      heading: 'Professional Experience',
      stackLabel: 'Stack:',
      items: [
        {
          period: '2023 - Present',
          role: 'Lead Cloud-Native Architect & Senior Backend Engineer',
          company: 'Distributed Systems & Enterprise Platforms',
          location: 'Remote / Spain',
          tags: ['backend', 'kubernetes', 'architecture'],
          achievements: [
            'Architected and implemented event-driven distributed systems powered by Java 21, Spring Boot 3, and Apache Kafka, processing >50,000 ops/sec with p99 < 12ms latency.',
            'Led zero-downtime migration to Kubernetes (EKS/k3s) managed 100% via GitOps with ArgoCD, eradicating configuration drift and securing an RTO < 5 minutes.',
            'Reduced p95 response times by 45% using multi-tier caching: L1 (in-memory Caffeine) + L2 (Redis Clustered) with asynchronous Kafka invalidation.',
            'Implemented end-to-end distributed observability with OpenTelemetry, Jaeger distributed tracing, and Prometheus/Grafana alerting on proactive SLAs.',
          ],
          stack: ['Java 21', 'Spring Cloud', 'Kafka', 'Kubernetes', 'ArgoCD', 'Docker', 'PostgreSQL', 'Redis', 'OpenTelemetry'],
        },
        {
          period: '2021 - 2023',
          role: 'Senior Backend Developer & DevOps Specialist',
          company: 'Cloud Infrastructure & Microservices',
          location: 'Remote',
          tags: ['backend', 'kubernetes'],
          achievements: [
            'Decoupled legacy monolith into 8 modular microservices following Domain-Driven Design (DDD) and hexagonal architecture, increasing release velocity by 300%.',
            'Orchestrated automated CI/CD pipelines with GitHub Actions and SonarQube static analysis, achieving 85%+ code coverage across unit and integration tests.',
            'Engineered parameter-driven Helm charts featuring Sealed Secrets and fine-grained NetworkPolicies for strict Zero-Trust cluster compliance.',
          ],
          stack: ['Java 17', 'Spring Boot', 'Docker', 'Helm', 'GitHub Actions', 'RabbitMQ', 'MySQL', 'Prometheus'],
        },
        {
          period: '2020 - Present',
          role: 'Quantitative Systems & Algorithmic Strategy Developer',
          company: 'Independent Initiative / Quantitative Portfolio',
          location: 'Spain',
          tags: ['trading', 'architecture'],
          achievements: [
            'Engineered event-driven algorithmic trading engines in MQL4 and MQL5 operating on live accounts with audited maximum historical drawdown under 8.5%.',
            'Constructed a quantitative research pipeline in Python utilizing vectorbt and pandas for multi-asset tick backtesting (>10 years tick data with spread/slippage modeling).',
            'Conducted Monte Carlo simulations with block bootstrapping (10,000 runs) to stress-test risk of ruin and parameter robustness, mitigating data snooping bias.',
          ],
          stack: ['MQL5', 'MQL4', 'Python 3.12', 'vectorbt', 'NumPy', 'Pandas', 'Monte Carlo', 'MetaTrader 5'],
        },
        {
          period: '2022 - Present',
          role: 'Game Systems & Simulation Engineer',
          company: 'Indie Game Systems & Interactive Simulation',
          location: 'Spain',
          tags: ['gamedev'],
          achievements: [
            'Engineered decoupled Hierarchical State Machines (HSM) in Godot 4 / C# for complex entity behavioral AI, maintaining a rock-solid 60 FPS.',
            'Optimized cross-compilation pipeline targeting WebAssembly (WASM) and WebGL, enabling native web execution with zero desktop dependencies.',
            'Designed deterministic procedural generation algorithms and layered physics collision spaces with minimal memory allocation per frame.',
          ],
          stack: ['Godot 4', 'C#', 'GDScript', 'WebAssembly', 'Linear Algebra', 'State Machines'],
        },
      ],
    },
    skills: {
      badge: '02 / COMPETENCIES',
      heading: 'Technical Skills Matrix',
      categories: [
        {
          title: 'Backend & Distributed Systems',
          icon: 'server',
          skills: [
            { name: 'Java 21 / 17', level: 'Advanced / Core', note: 'Virtual Threads, ZGC, Memory Model' },
            { name: 'Spring Boot 3 / Cloud', level: 'Advanced', note: 'Security, Data, Gateway, Config' },
            { name: 'Apache Kafka', level: 'Advanced', note: 'Event-Driven, Streams, Partitioning' },
            { name: 'PostgreSQL & JPA', level: 'Advanced', note: 'Query tuning, indexes, ACID transactions' },
            { name: 'Redis', level: 'Advanced', note: 'Distributed cache, pub/sub, rate limiting' },
            { name: 'gRPC & Protocol Buffers', level: 'Intermediate-High', note: 'Low-latency inter-service RPC' },
          ],
        },
        {
          title: 'Cloud-Native, DevOps & GitOps',
          icon: 'cloud',
          skills: [
            { name: 'Kubernetes (K8s)', level: 'Advanced', note: 'Deployments, Services, Ingress, RBAC' },
            { name: 'ArgoCD (GitOps)', level: 'Advanced', note: 'Automated sync, Progressive Delivery' },
            { name: 'Docker & Containerd', level: 'Advanced', note: 'Multi-stage builds, slim images' },
            { name: 'Helm Charts', level: 'Advanced', note: 'Parameterized packaging & versioning' },
            { name: 'GitHub Actions CI/CD', level: 'Advanced', note: 'Automated multi-environment pipelines' },
            { name: 'Prometheus & Grafana', level: 'Advanced', note: 'RED/USE metrics, proactive alerting' },
          ],
        },
        {
          title: 'Quantitative Trading & Algorithmic Modeling',
          icon: 'trending-up',
          skills: [
            { name: 'MQL5 / MQL4', level: 'Advanced', note: 'Event-driven Expert Advisors' },
            { name: 'Python 3.12 (vectorbt)', level: 'Advanced', note: 'Vectorized backtesting, NumPy, Pandas' },
            { name: 'Monte Carlo Simulation', level: 'Advanced', note: 'Bootstrapping & risk of ruin analysis' },
            { name: 'Risk Management', level: 'Advanced', note: 'Strict drawdown and leverage budgeting' },
          ],
        },
        {
          title: 'Godot Engine & Systems Architecture',
          icon: 'cpu',
          skills: [
            { name: 'Godot 4', level: 'Advanced', note: '2D/3D engine, scene tree & custom shaders' },
            { name: 'C# / .NET', level: 'Advanced', note: 'Architectural design patterns & profiling' },
            { name: 'WebAssembly (WASM)', level: 'Intermediate-High', note: 'Web export & embedded execution' },
            { name: 'Hierarchical State Machines', level: 'Advanced', note: 'Modular agent logic & entity control' },
          ],
        },
        {
          title: 'Architecture & Engineering Practices',
          icon: 'layers',
          skills: [
            { name: 'Hexagonal Architecture / DDD', level: 'Advanced', note: 'Decoupled domain & persistence' },
            { name: 'Event-Driven Architecture (EDA)', level: 'Advanced', note: 'Eventual consistency & Saga patterns' },
            { name: 'TDD & Automated Testing', level: 'Advanced', note: 'JUnit 5, Mockito, Testcontainers' },
            { name: 'Zero-Trust Security', level: 'Advanced', note: 'mTLS, HashiCorp Vault, secrets hygiene' },
          ],
        },
        {
          title: 'Multimedia & Acoustic Audio',
          icon: 'music',
          skills: [
            { name: 'Classical Piano Performance', level: 'Advanced', note: 'Baroque, Romantic & Modern repertoire' },
            { name: 'ORTF Stereo Recording', level: 'Advanced', note: 'Room microphony & acoustic soundstage' },
            { name: 'Lossless Mastering (24/96)', level: 'Advanced', note: 'Spectral cleaning & dynamic preservation' },
            { name: 'DaVinci Resolve Studio', level: 'Intermediate-High', note: 'Color grading & multicam A/V sync' },
          ],
        },
      ],
    },
    education: {
      badge: '03 / EDUCATION & LANGUAGES',
      heading: 'Education, Certifications & Languages',
      formalTitle: 'Formal Education',
      certsTitle: 'Certifications & Specialized Courses',
      langTitle: 'LANGUAGES',
      items: [
        {
          degree: 'B.Sc. in Computer Software Engineering',
          institution: 'University Degree in Computer Science & Software Engineering',
          period: '2015 - 2019',
          notes: 'Specialization in Software Engineering, Advanced Algorithmic Systems, and Distributed Computing.',
        },
        {
          degree: 'Professional Conservatory Music Degree (Classical Piano)',
          institution: 'Professional Conservatory of Music',
          period: 'Official Conservatory Graduate',
          notes: 'Specialization in Classical Piano Solo Performance, Functional Harmony, Acoustic Analysis, and Counterpoint.',
        },
      ],
      certifications: [
        { title: 'Kubernetes Cloud-Native Architecture', issuer: 'Cloud Native Computing Foundation (CNCF)', year: '2023' },
        { title: 'Distributed Systems & Event-Driven Design with Kafka', issuer: 'Confluent', year: '2022' },
        { title: 'Spring Certified Professional Developer', issuer: 'VMware', year: '2021' },
        { title: 'Quantitative Trading & Risk Analysis Modeling', issuer: 'Independent Research & Validation', year: '2021' },
      ],
      languages: [
        { lang: 'English', level: 'C1 Professional / Full Working Proficiency', desc: 'Fluent in multinational environments, technical architecture design, and comprehensive documentation' },
        { lang: 'Spanish', level: 'Native / Bilingual', desc: 'Mother tongue' },
      ],
    },
  },
  es: {
    meta: {
      pageTitle: 'Curriculum Vitae | Pascual Ruiz Benítez (pjrbenitez)',
      pageDescription: 'Trayectoria técnica, arquitectura de sistemas distribuidos, Kubernetes GitOps, trading cuantitativo, desarrollo en Godot y producción acústica de piano clásico.',
      status: 'DISPONIBLE PARA PROYECTOS Y ARQUITECTURA',
      name: 'Pascual Ruiz Benítez',
      title: 'Senior Backend & Cloud-Native Architect | Quant & Algorithmic Developer',
      location: 'España (Remoto / Híbrido)',
      updated: '2026',
      printBtn: 'Imprimir / Exportar PDF',
      summaryP1: 'Ingeniero de Software y Arquitecto Cloud-Native especializado en el diseño de <strong>sistemas distribuidos tolerantes a fallos</strong>, infraestructuras <strong>Kubernetes bajo GitOps (ArgoCD)</strong> y pipelines de streaming de alta concurrencia con <strong>Java 21, Spring Cloud y Apache Kafka</strong>.',
      summaryP2: 'Complemento el rigor ingenieril con el modelado algorítmico en <strong>trading cuantitativo (MQL5/Python)</strong>, la programación de motores y simulación en <strong>Godot 4 (C#/WASM)</strong>, y la sensibilidad interpretativa y acústica del <strong>piano clásico de alta fidelidad</strong>.',
    },
    filter: {
      label: 'FILTRAR EXPERIENCIA:',
      options: [
        { id: 'all', label: 'Toda la Trayectoria' },
        { id: 'backend', label: 'Backend & Cloud' },
        { id: 'kubernetes', label: 'Kubernetes & GitOps' },
        { id: 'trading', label: 'Trading Cuantitativo' },
        { id: 'gamedev', label: 'Godot & Simulación' },
        { id: 'architecture', label: 'Arquitectura & Liderazgo' },
      ],
    },
    timeline: {
      badge: '01 / TRAYECTORIA',
      heading: 'Experiencia Profesional',
      stackLabel: 'Stack:',
      items: [
        {
          period: '2023 - Presente',
          role: 'Lead Cloud-Native Architect & Senior Backend Engineer',
          company: 'Sistemas Distribuidos & Soluciones Enterprise',
          location: 'Remoto / España',
          tags: ['backend', 'kubernetes', 'architecture'],
          achievements: [
            'Diseño e implementación de arquitectura distribuida event-driven basada en Java 21, Spring Boot 3 y Apache Kafka, procesando >50.000 ops/seg con p99 < 12ms.',
            'Liderazgo en la migración a Kubernetes (EKS/k3s) gestionado 100% mediante GitOps con ArgoCD, eliminando discrepancias de despliegue y logrando RTO < 5 minutos.',
            'Reducción del 45% en tiempos de respuesta p95 mediante caché multinivel L1 (Caffeine en memoria) + L2 (Redis Clustered) con invalidación asíncrona por Kafka.',
            'Implementación de observabilidad distribuida integral con OpenTelemetry, Jaeger tracing y dashboards Prometheus/Grafana con alertas SLA proactivas.',
          ],
          stack: ['Java 21', 'Spring Cloud', 'Kafka', 'Kubernetes', 'ArgoCD', 'Docker', 'PostgreSQL', 'Redis', 'OpenTelemetry'],
        },
        {
          period: '2021 - 2023',
          role: 'Senior Backend Developer & DevOps Specialist',
          company: 'Infraestructura & Microservicios Cloud',
          location: 'Remoto',
          tags: ['backend', 'kubernetes'],
          achievements: [
            'Desacoplamiento de monolito legado a 8 microservicios independientes bajo DDD y arquitectura hexagonal, aumentando la cadencia de release semanal en un 300%.',
            'Orquestación de pipelines CI/CD automatizados con GitHub Actions y análisis estático SonarQube, alcanzando 85%+ de cobertura de tests unitarios y de integración.',
            'Configuración de Helm charts modulares con Sealed Secrets y políticas NetworkPolicies para cumplimiento estricto de seguridad Zero-Trust en clúster.',
          ],
          stack: ['Java 17', 'Spring Boot', 'Docker', 'Helm', 'GitHub Actions', 'RabbitMQ', 'MySQL', 'Prometheus'],
        },
        {
          period: '2020 - Presente',
          role: 'Quantitative Systems & Algorithmic Strategy Developer',
          company: 'Iniciativa Independiente / Portfolio Cuantitativo',
          location: 'España',
          tags: ['trading', 'architecture'],
          achievements: [
            'Desarrollo de motores de trading algorítmico en MQL4 y MQL5 orientados a eventos, operando en cuentas reales con drawdown histórico limitado bajo el 8.5%.',
            'Pipeline de investigación cuantitativa en Python utilizando vectorbt y pandas para backtesting masivo multiactivo (>10 años de datos tick con modelado de slippage/spread).',
            'Simulaciones de Monte Carlo con remuestreo de bloques (10.000 iteraciones) para cuantificar riesgo de ruina y robustez de parámetros, descartando sobreajuste (overfitting).',
          ],
          stack: ['MQL5', 'MQL4', 'Python 3.12', 'vectorbt', 'NumPy', 'Pandas', 'Monte Carlo', 'MetaTrader 5'],
        },
        {
          period: '2022 - Presente',
          role: 'Game Systems & Simulation Engineer',
          company: 'Desarrollo Indie & Simulación Interactiva',
          location: 'España',
          tags: ['gamedev'],
          achievements: [
            'Arquitectura de máquinas de estado jerárquicas (HSM) desacopladas en Godot 4 / C# para entidades con comportamientos complejos, alcanzando 60 FPS estables.',
            'Optimización de pipeline de compilación cruzada hacia WebAssembly (WASM) y WebGL, permitiendo ejecución fluida directa en navegador sin dependencias nativas.',
            'Diseño de algoritmos de generación procedural determinista y sistemas de física por capas con mínimo consumo de memoria y cero allocation per frame.',
          ],
          stack: ['Godot 4', 'C#', 'GDScript', 'WebAssembly', 'Linear Algebra', 'State Machines'],
        },
      ],
    },
    skills: {
      badge: '02 / COMPETENCIAS',
      heading: 'Matriz de Habilidades Técnicas',
      categories: [
        {
          title: 'Backend & Sistemas Distribuidos',
          icon: 'server',
          skills: [
            { name: 'Java 21 / 17', level: 'Avanzado / Core', note: 'Virtual Threads, ZGC, Memory Model' },
            { name: 'Spring Boot 3 / Cloud', level: 'Avanzado', note: 'Security, Data, Gateway, Config' },
            { name: 'Apache Kafka', level: 'Avanzado', note: 'Event-Driven, Streams, Particionamiento' },
            { name: 'PostgreSQL & JPA', level: 'Avanzado', note: 'Optimización de queries, índices, transacciones' },
            { name: 'Redis', level: 'Avanzado', note: 'Distributed cache, pub/sub, rate limiting' },
            { name: 'gRPC & Protocol Buffers', level: 'Intermedio-Alto', note: 'RPC de baja latencia entre servicios' },
          ],
        },
        {
          title: 'Cloud-Native, DevOps & GitOps',
          icon: 'cloud',
          skills: [
            { name: 'Kubernetes (K8s)', level: 'Avanzado', note: 'Deployments, Services, Ingress, RBAC' },
            { name: 'ArgoCD (GitOps)', level: 'Avanzado', note: 'Sync automatizado, Progressive Delivery' },
            { name: 'Docker & Containerd', level: 'Avanzado', note: 'Multi-stage builds, imágenes minimalistas' },
            { name: 'Helm Charts', level: 'Avanzado', note: 'Empaquetado parametrizado y versionado' },
            { name: 'GitHub Actions CI/CD', level: 'Avanzado', note: 'Pipelines multi-entorno automatizados' },
            { name: 'Prometheus & Grafana', level: 'Avanzado', note: 'Métricas RED/USE, alertas y dashboards' },
          ],
        },
        {
          title: 'Trading Cuantitativo & Algoritmia',
          icon: 'trending-up',
          skills: [
            { name: 'MQL5 / MQL4', level: 'Avanzado', note: 'Expert Advisors orientados a eventos' },
            { name: 'Python 3.12 (vectorbt)', level: 'Avanzado', note: 'Backtesting vectorial, NumPy, Pandas' },
            { name: 'Simulación Monte Carlo', level: 'Avanzado', note: 'Remuestreo y análisis de riesgo de ruina' },
            { name: 'Risk Management', level: 'Avanzado', note: 'Control estricto de drawdown y apalancamiento' },
          ],
        },
        {
          title: 'Godot & Desarrollo de Sistemas',
          icon: 'cpu',
          skills: [
            { name: 'Godot 4', level: 'Avanzado', note: 'Motor 2D/3D, scene tree y shaders' },
            { name: 'C# / .NET', level: 'Avanzado', note: 'Patrones arquitectónicos y performance' },
            { name: 'WebAssembly (WASM)', level: 'Intermedio-Alto', note: 'Export web y ejecución embebida' },
            { name: 'Hierarchical State Machines', level: 'Avanzado', note: 'Lógica modular de agentes y entidades' },
          ],
        },
        {
          title: 'Arquitectura & Buenas Prácticas',
          icon: 'layers',
          skills: [
            { name: 'Arquitectura Hexagonal / DDD', level: 'Avanzado', note: 'Desacoplamiento de dominio y persistencia' },
            { name: 'Event-Driven Architecture (EDA)', level: 'Avanzado', note: 'Consistencia eventual y sagas' },
            { name: 'TDD & Testing Unitario', level: 'Avanzado', note: 'JUnit 5, Mockito, Testcontainers' },
            { name: 'Seguridad & Zero-Trust', level: 'Avanzado', note: 'mTLS, Vault, gestión de secretos' },
          ],
        },
        {
          title: 'Multimedia & Acústica Musical',
          icon: 'music',
          skills: [
            { name: 'Piano Clásico de Grado', level: 'Avanzado', note: 'Repertorio barroco, romántico y moderno' },
            { name: 'Grabación Estéreo ORTF', level: 'Avanzado', note: 'Microfonía de sala e imagen estéreo acústica' },
            { name: 'Mastering Lossless 24/96', level: 'Avanzado', note: 'Edición espectral y preservación de dinámica' },
            { name: 'DaVinci Resolve Studio', level: 'Intermedio-Alto', note: 'Etalonaje y sincronización A/V multicámara' },
          ],
        },
      ],
    },
    education: {
      badge: '03 / FORMACIÓN & IDIOMAS',
      heading: 'Educación, Certificaciones e Idiomas',
      formalTitle: 'Educación Formal',
      certsTitle: 'Certificaciones & Cursos Especializados',
      langTitle: 'IDIOMAS',
      items: [
        {
          degree: 'Grado en Ingeniería Informática',
          institution: 'Universidad / Formación Superior en Software',
          period: '2015 - 2019',
          notes: 'Especialización en Ingeniería del Software, Algoritmia Avanzada y Sistemas Distribuidos.',
        },
        {
          degree: 'Grado Profesional de Música / Piano Clásico',
          institution: 'Conservatorio Profesional de Música',
          period: 'Formación de Grado Oficial',
          notes: 'Especialidad en interpretación pianística clásica, armonía funcional, análisis acústico y contrapunto.',
        },
      ],
      certifications: [
        { title: 'Kubernetes Cloud-Native Architecture', issuer: 'Cloud Native Computing Foundation (CNCF)', year: '2023' },
        { title: 'Distributed Systems & Event-Driven Design with Kafka', issuer: 'Confluent', year: '2022' },
        { title: 'Spring Certified Professional Developer', issuer: 'VMware', year: '2021' },
        { title: 'Quantitative Trading & Risk Analysis Modeling', issuer: 'Investigación Independiente', year: '2021' },
      ],
      languages: [
        { lang: 'Español', level: 'Nativo / Bilingüe', desc: 'Lengua materna' },
        { lang: 'Inglés', level: 'C1 Profesional / Técnico', desc: 'Fluidez completa en entornos multinacionales, documentación y arquitectura técnica' },
      ],
    },
  },
};
