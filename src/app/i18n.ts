import { createInstance, i18n } from "i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend'
import resourcesToBackend from "i18next-resources-to-backend";
import { i18nConfig } from "../../i18nConfig";

// await i18next
//     .use(initReactI18next)
//     .use(LanguageDetector)
//     .use(Backend)
//     .init({
//         debug: true,
//         fallbackLng: 'en',
//         saveMissing: true
//     });

// export default i18next;

export async function initTranslations(
    locale: string,
    namespaces: string[],
    i18nInstance?: i18n,
    resources?: any
) {
    i18nInstance = i18nInstance || createInstance();

    if(!resources) {
        i18nInstance.use(
            resourcesToBackend(
                (language: string, namespace: string) => {
                    return import(`@/locales/${language}/${namespace}.json`)
                }
            )
        );
    }

    await i18nInstance.init({
        lng: locale,
        resources,
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        defaultNS: namespaces[0],
        fallbackNS: namespaces[0],
        ns: namespaces,
        preload: resources? []: i18nConfig.locales
    });

    return {
        i18n: i18nInstance,
        resources: { [locale]: i18nInstance.services.resourceStore.data[locale] },
        t: i18nInstance.t
    }
}
