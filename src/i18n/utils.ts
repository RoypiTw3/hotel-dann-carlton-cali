import es from './es.json';
import en from './en.json';

export type Locale = 'es' | 'en';

const translations = { es, en };

export function getLocale(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
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
  // Strip leading locale if present
  let cleanPath = pathname;
  if (cleanPath.startsWith('/en/')) {
    cleanPath = cleanPath.replace(/^\/en/, '');
  } else if (cleanPath === '/en') {
    cleanPath = '/';
  }

  // Ensure leading slash
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  if (targetLocale === 'en') {
    return cleanPath === '/' ? '/en' : `/en${cleanPath}`;
  }

  return cleanPath;
}
