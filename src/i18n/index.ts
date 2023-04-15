import i18next from "i18next";
import enTranslation from "@/src/i18n/en";
import csTranslation from "@/src/i18n/cs";
import { initReactI18next } from "react-i18next";

export const initTranslations = async () => {
    await i18next.use(initReactI18next).init({
        resources: {
            en: enTranslation,
            cs: csTranslation,
        },
        lng: undefined,
        fallbackLng: "en",
        interpolation: {
            escapeValue: true,
        },
        keySeparator: ".",
    });
};
