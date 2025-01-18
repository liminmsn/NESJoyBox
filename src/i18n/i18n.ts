import zh from "./lang/zh";
import en from "./lang/en";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: (function () {
    let lang = localStorage.getItem("lang");
    return lang ? lang : "en";
  })(),
  debug: false,
  fallbackLng: "zh",
  resources: {
    en,
    zh,
  },
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lng: "zh" | "en") => {
  localStorage.setItem("lang", lng);
  window.location.reload();
};

export default i18n;
