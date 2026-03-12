import { translations, type Lang } from './translations';

export function useTranslations(lang: Lang) {
  return translations[lang];
}
