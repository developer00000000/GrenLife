import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from "./locales/en/default.json";
import ruLang from "./locales/ru/default.json";
import uzLang from "./locales/uz/default.json";

const i18next = () =>
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enLang,
      },
      uz: {
        translation: uzLang,
      },
      ru: {
        translation: ruLang,
      },
    },
    lng: "uz",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
