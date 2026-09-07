import type { Locale } from './languages';

export interface UiTranslations {
  nav: {
    home: string;
    backend: string;
    trading: string;
    gamedev: string;
    multimedia: string;
    cv: string;
  };
  header: {
    brandRole: string;
    ariaHome: string;
    ariaGithub: string;
    ariaOpenMenu: string;
    ariaCloseMenu: string;
    ariaNav: string;
    skipToContent: string;
  };
  languageSelector: {
    label: string;
    currentLanguage: string;
    switchLanguage: string;
  };
  footer: {
    bio: string;
    status: string;
    pillarsTitle: string;
    quickAccessTitle: string;
    cvLink: string;
    githubLink: string;
    contactLink: string;
    copyright: string;
    stack: string;
    hosted: string;
  };
  common: {
    backToHub: string;
    readCase: string;
    viewBacktest: string;
    playPrototype: string;
    listenPerformance: string;
    techStack: string;
    metrics: string;
    highlights: string;
    featured: string;
    contactBtn: string;
    contactCtaTitle: string;
    contactCtaDesc: string;
    role: string;
  };
}

export const UI_TRANSLATIONS: Record<Locale, UiTranslations> = {
  en: {
    nav: {
      home: 'Home',
      backend: 'Backend & Cloud',
      trading: 'Quantitative Trading',
      gamedev: 'Godot / GameDev',
      multimedia: 'Multimedia & Piano',
      cv: 'Dynamic CV',
    },
    header: {
      brandRole: 'Tech Lead & Architect',
      ariaHome: 'Go to homepage',
      ariaGithub: 'GitHub repository',
      ariaOpenMenu: 'Open navigation menu',
      ariaCloseMenu: 'Close navigation menu',
      ariaNav: 'Main navigation',
      skipToContent: 'Skip to main content',
    },
    languageSelector: {
      label: 'Language',
      currentLanguage: 'Current language',
      switchLanguage: 'Switch language',
    },
    footer: {
      bio: 'Tech Lead & Cloud-Native Architect specialized in distributed fault-tolerant systems, algorithmic quantitative trading (MQL/Python), Godot simulation engines, and acoustic high-fidelity multimedia.',
      status: 'Available for high-impact technical initiatives',
      pillarsTitle: 'Technical Pillars',
      quickAccessTitle: 'Quick Access',
      cvLink: 'Dynamic Curriculum Vitae',
      githubLink: 'Source Code on GitHub',
      contactLink: 'Direct Contact',
      copyright: 'All rights reserved.',
      stack: 'Built with Astro 5 + TypeScript',
      hosted: 'Hosted on GitHub Pages',
    },
    common: {
      backToHub: 'Back to Hub',
      readCase: 'Read Full Case Study',
      viewBacktest: 'View Backtest & Code',
      playPrototype: 'Play Web Prototype',
      listenPerformance: 'Listen & Audio Specs',
      techStack: 'Tech Stack:',
      metrics: 'Key Metrics',
      highlights: 'Technical Highlights',
      featured: 'Featured',
      contactBtn: 'Contact via Email',
      contactCtaTitle: 'Have a high-impact technical initiative or architecture in mind?',
      contactCtaDesc: 'Always open to discussing distributed engineering challenges, quantitative modeling, or innovative software architectures.',
      role: 'Role:',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      backend: 'Backend & Cloud',
      trading: 'Trading Cuantitativo',
      gamedev: 'Godot / GameDev',
      multimedia: 'Multimedia & Piano',
      cv: 'CV Dinámico',
    },
    header: {
      brandRole: 'Tech Lead & Arquitecto',
      ariaHome: 'Ir a la página principal',
      ariaGithub: 'Repositorio de GitHub',
      ariaOpenMenu: 'Abrir menú de navegación',
      ariaCloseMenu: 'Cerrar menú de navegación',
      ariaNav: 'Navegación principal',
      skipToContent: 'Saltar al contenido principal',
    },
    languageSelector: {
      label: 'Idioma',
      currentLanguage: 'Idioma actual',
      switchLanguage: 'Cambiar idioma',
    },
    footer: {
      bio: 'Tech Lead & Arquitecto Cloud-Native especializado en sistemas distribuidos tolerantes a fallos, trading algorítmico cuantitativo (MQL/Python), desarrollo en Godot y producción multimedia acústica.',
      status: 'Disponible para iniciativas de alto impacto técnico',
      pillarsTitle: 'Pilares Técnicos',
      quickAccessTitle: 'Acceso Directo',
      cvLink: 'Curriculum Vitae Dinámico',
      githubLink: 'Código Fuente en GitHub',
      contactLink: 'Contacto Directo',
      copyright: 'Todos los derechos reservados.',
      stack: 'Construido con Astro 5 + TypeScript',
      hosted: 'Alojado en GitHub Pages',
    },
    common: {
      backToHub: 'Volver al Hub',
      readCase: 'Ver Caso Completo',
      viewBacktest: 'Ver Backtest & Código',
      playPrototype: 'Jugar Prototipo Web',
      listenPerformance: 'Escuchar Grabación',
      techStack: 'Stack Tecnológico:',
      metrics: 'Métricas Principales',
      highlights: 'Aspectos Técnicos',
      featured: 'Destacado',
      contactBtn: 'Contactar por Email',
      contactCtaTitle: '¿Tienes un proyecto de alto impacto técnico o arquitectura en mente?',
      contactCtaDesc: 'Siempre abierto a discutir desafíos de ingeniería distribuida, modelos cuantitativos o iniciativas de software innovadoras.',
      role: 'Rol:',
    },
  },
};
