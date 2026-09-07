/**
 * Utilidad para resolver rutas relativas respetando el base path de GitHub Pages (/pasruiben).
 */
export function getUrl(targetPath: string = '/'): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = targetPath.startsWith('/') ? targetPath : '/' + targetPath;

  if (cleanPath === '/') {
    return cleanBase ? cleanBase + '/' : '/';
  }
  return cleanBase + cleanPath;
}
