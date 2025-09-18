import * as t from "@/dictionaries/tr.json";
import * as e from "@/dictionaries/en.json";

const getLanguage = (path: string): string => {
  const lang = path.split("/").slice(1, 2)?.[0] == "en" ? "en" : "tr";
  return lang;
};

const l = (lang: string, key: string): string => {
  const tl = (lang == "tr" ? t : e) as {
    [key: string]: string;
  };
  return tl?.[key] || key;
};

export { l, getLanguage };
