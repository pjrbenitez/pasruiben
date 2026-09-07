import { DEFAULT_LOCALE, LOCALES, type Locale } from './languages';

/**
 * Returns the active base URL from environment (e.g. '/pasruiben' on GitHub Pages)
 */
export function getBaseUrl(): string {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

/**
 * Detects the locale from a given URL or pathname.
 */
export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const base = getBaseUrl();
  const pathWithoutBase = pathname.startsWith(base)
    ? pathname.slice(base.length)
    : pathname;

  const segments = pathWithoutBase.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && (LOCALES as readonly string[]).includes(firstSegment)) {
    return firstSegment as Locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Generates a localized path for a given route and locale.
 * Respects the base path (e.g. /pasruiben).
 *
 * Example:
 * getLocalizedPath('/cv', 'en') -> '/pasruiben/cv'
 * getLocalizedPath('/cv', 'es') -> '/pasruiben/es/cv'
 * getLocalizedPath('/', 'en')   -> '/pasruiben/'
 * getLocalizedPath('/', 'es')   -> '/pasruiben/es/'
 */
export function getLocalizedPath(targetPath: string = '/', locale: Locale = DEFAULT_LOCALE): string {
  const base = getBaseUrl();
  const cleanPath = targetPath.startsWith('/') ? targetPath : '/' + targetPath;

  let localizedSubPath = cleanPath;
  if (locale !== DEFAULT_LOCALE) {
    if (cleanPath === '/') {
      localizedSubPath = `/${locale}/`;
    } else {
      localizedSubPath = `/${locale}${cleanPath}`;
    }
  }

  if (localizedSubPath === '/') {
    return base ? `${base}/` : '/';
  }

  return `${base}${localizedSubPath}`;
}

/**
 * Generates the target URL for switching to another locale from the current URL.
 * Preserves the subpath and slugs.
 *
 * Example:
 * switchLocale('/pasruiben/backend/kubernetes-gitops-argocd', 'es')
 *   -> '/pasruiben/es/backend/kubernetes-gitops-argocd'
 * switchLocale('/pasruiben/es/cv', 'en')
 *   -> '/pasruiben/cv'
 */
export function getSwitchLocaleUrl(currentUrl: URL | string, targetLocale: Locale): string {
  const pathname = typeof currentUrl === 'string' ? currentUrl : currentUrl.pathname;
  const base = getBaseUrl();

  // Strip base prefix
  let relativePath = pathname.startsWith(base)
    ? pathname.slice(base.length)
    : pathname;

  if (!relativePath.startsWith('/')) {
    relativePath = '/' + relativePath;
  }

  // Check if current has a locale prefix like /es or /es/
  for (const loc of LOCALES) {
    if (relativePath === `/${loc}` || relativePath === `/${loc}/`) {
      relativePath = '/';
      break;
    } else if (relativePath.startsWith(`/${loc}/`)) {
      relativePath = relativePath.slice(`/${loc}`.length);
      break;
    }
  }

  return getLocalizedPath(relativePath, targetLocale);
}
