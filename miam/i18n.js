import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from './src/i18n/fr.json'
import en from './src/i18n/en.json'

// the translations
// (tip move them in a JSON file and import them)

const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;