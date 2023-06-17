import i18next from "i18next";
import enTranslation from "@/src/i18n/en";
import csTranslation from "@/src/i18n/cs";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const initTranslations = async () => {
    await i18next
        // .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                en: enTranslation,
                cs: csTranslation,
            },
            // lng: "en",
            fallbackLng: "en",
            interpolation: {
                escapeValue: true,
            },
            keySeparator: ".",
        });
};
