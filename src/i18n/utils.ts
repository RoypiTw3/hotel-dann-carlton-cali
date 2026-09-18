import es from './es.json';
import en from './en.json';

export type Locale = 'es' | 'en';

const translations = { es, en };

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export function p(path: string = ''): string {
  if (!path) return BASE ? `${BASE}/` : '/';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
}

export function getLocale(url: URL | string): Locale {
  let pathname = typeof url === 'string' ? url : url.pathname;
  if (BASE && pathname.startsWith(BASE)) {
    pathname = pathname.slice(BASE.length);
  }
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return 'en';
  }
  return 'es';
}

export function t(locale: Locale, key: string, params?: Record<string, string | number>): string {
  const dict = translations[locale] || translations.es;
  const parts = key.split('.');
  let current: any = dict;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      // Fallback to ES if not found in target locale
      let fallback: any = translations.es;
      for (const fbPart of parts) {
        if (fallback && typeof fallback === 'object' && fbPart in fallback) {
          fallback = fallback[fbPart];
        } else {
          return key;
        }
      }
      current = fallback;
      break;
    }
  }

  if (typeof current !== 'string') {
    return key;
  }

  if (params) {
    let result = current;
    for (const [pKey, pVal] of Object.entries(params)) {
      result = result.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
    }
    return result;
  }

  return current;
}

export function localizedPath(pathname: string, targetLocale: Locale): string {
  let cleanPath = pathname;
  if (BASE && cleanPath.startsWith(BASE)) {
    cleanPath = cleanPath.slice(BASE.length);
  }

  // Strip leading locale if present
  if (cleanPath.startsWith('/en/')) {
    cleanPath = cleanPath.replace(/^\/en/, '');
  } else if (cleanPath === '/en') {
    cleanPath = '/';
  }

  // Ensure leading slash
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  let finalPath = cleanPath;
  if (targetLocale === 'en') {
    finalPath = cleanPath === '/' ? '/en' : `/en${cleanPath}`;
  }

  return p(finalPath);
}
