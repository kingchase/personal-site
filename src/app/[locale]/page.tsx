import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { initTranslations } from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

interface PageProps {
  params: {
    locale: string
  }
}

const i18nNamespaces = ['home'];

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  console.log(`locale: ${locale}`)
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  // const { t, resources } = ;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <div>
        <Navbar></Navbar>
        <p>{t('home:intro.detailed')}</p>
      </div>
    </TranslationsProvider>
  );
}
