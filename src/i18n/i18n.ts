import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh from "./lang/zh";
import en from "./lang/en";


i18n.use(initReactI18next)
    .init({
        lng: "zh", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        resources: {
            en, zh
        }
    });

export default i18n;