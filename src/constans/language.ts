export const language = [
  {
    name: "Türkçe",
    code: "tr",
    country_code: "TR",
    locale: "tr-TR",
    direction: "ltr",
  },
  {
    name: "English",
    code: "en",
    country_code: "EN",
    locale: "en-US",
    direction: "ltr",
  },
];

export const defaultLanguage = language[0];
export const languageCode = language.map((item) => item.code);
export const languageLocale = language.map((item) => item.locale);
export const languageCountryCode = language.map((item) => item.country_code);
export const languageName = language.map((item) => item.name);
export const languageDirection = language.map((item) => item.direction);
export const langs = language.map((item) => ({ lang: item.code }));
export const localeToDirection = (code: string) =>
  language.find((item) => item.code === code)?.direction ||
  defaultLanguage?.direction;
export const localeToCode = (locale: string) =>
  language.find((item) => item.locale === locale)?.code ||
  defaultLanguage?.code;
export const codeToLocale = (code: string) =>
  language.find((item) => item.code === code)?.locale ||
  defaultLanguage?.locale;
export const getLocale = (code: string) =>
  language.find((item) => item.code === code) || defaultLanguage;
