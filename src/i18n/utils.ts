import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

// Definimos los idiomas que soportamos
export const LANGUAGES = {
  en: 'English',
  es: 'Español',
};

// Idioma por defecto
export const DEFAULT_LANG = 'es';

// Creamos un objeto que contiene todas las traducciones
const translations = {
  en: enTranslations,
  es: esTranslations,
};

/**
 * Obtiene el código del idioma desde la URL.
 * Ejemplo: /es/experiencia -> 'es'
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in LANGUAGES) return lang as keyof typeof LANGUAGES;
  return DEFAULT_LANG;
}

/**
 * Devuelve una función `t` que se puede usar para obtener las traducciones.
 */
export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof typeof translations[typeof DEFAULT_LANG]) {
    return translations[lang][key] || translations[DEFAULT_LANG][key];
  }
}