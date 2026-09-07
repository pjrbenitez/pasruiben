export interface Language {
  code: 'en' | 'es' | string;
  name: string;
  localName: string;
  flagSvg: string;
}

export const DEFAULT_LOCALE = 'en' as const;
export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

// High-fidelity SVG flag definitions (crisp rendering across all OS including Windows)
export const LANGUAGES: Language[] = [
  {
    code: 'en',
    name: 'English',
    localName: 'English',
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" class="flag-icon" width="20" height="14" aria-hidden="true">
      <clipPath id="gb-clip">
        <rect width="60" height="40" rx="3" />
      </clipPath>
      <g clip-path="url(#gb-clip)">
        <rect width="60" height="40" fill="#012169"/>
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" stroke-width="8"/>
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#c8102e" stroke-width="4.5"/>
        <path d="M0,0 L30,20 M60,40 L30,20 M60,0 L30,20 M0,40 L30,20" stroke="#fff" stroke-width="2"/>
        <path d="M30,0 v40 M0,20 h60" stroke="#fff" stroke-width="12"/>
        <path d="M30,0 v40 M0,20 h60" stroke="#c8102e" stroke-width="7"/>
      </g>
    </svg>`,
  },
  {
    code: 'es',
    name: 'Spanish',
    localName: 'Español',
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" class="flag-icon" width="20" height="14" aria-hidden="true">
      <clipPath id="es-clip">
        <rect width="60" height="40" rx="3" />
      </clipPath>
      <g clip-path="url(#es-clip)">
        <rect width="60" height="40" fill="#AA151B"/>
        <rect y="10" width="60" height="20" fill="#F1BF00"/>
        <!-- Escudo simplificado elegante -->
        <g transform="translate(14, 14)">
          <rect width="6" height="8" rx="1" fill="#AA151B" stroke="#8A0000" stroke-width="0.6"/>
          <circle cx="3" cy="-1.5" r="1.5" fill="#C59B27"/>
        </g>
      </g>
    </svg>`,
  },
];
