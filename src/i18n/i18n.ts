import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en";
import zh from "./lang/zh";


i18n.use(initReactI18next)
    .init({
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        resources: {
            en,
            zh
        },
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });