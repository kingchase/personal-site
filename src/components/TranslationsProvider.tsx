'use client';
import { initTranslations } from "@/app/i18n";
import { createInstance } from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { ReactNode } from "react";

interface TranslationsProviderProps {
    children: ReactNode,
    locale: string,
    namespaces: string[],
    resources?: any
}

export default function TranslationsProvider(props: TranslationsProviderProps) {
    const { children, locale, namespaces, resources } = props;
    const i18n = createInstance();
    i18n.use(initReactI18next);

    initTranslations(locale, namespaces, i18n, resources);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}