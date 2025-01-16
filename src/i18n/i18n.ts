import i18n from "i18next";
import zh from "./lang/zh";
import en from "./lang/en";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en,
    zh,
  },
});

export default i18n;
