import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json", // Path to translation files
      //   loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    debug: true,
    fallbackLng: "en",
  });

// i18n
//   .use(HttpBackend)
//   .use(initReactI18next)
//   .init({
//     backend: {
//       loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
//     },
//     lng: "en", // Default language
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false, // React handles escaping
//     },
//   });

export default i18n;
