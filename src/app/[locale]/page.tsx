import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { initTranslations } from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { Hero } from "@/components/Hero";

interface PageProps {
  params: {
    locale: string
  }
}

const i18nNamespaces = ['home', 'common'];

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
      </div>
      <div className="px-4 py-4">
        <Hero />
      </div>
      <div className="px-4 py-4">
        <div className="flex flex-col gap-4">
          <h2>{t('home:my-technologies')}</h2>
          <div className="flex flex-col gap-4">
            <h3>{t('home:test-automation')}</h3>
            <p className="whitespace-pre-line">{t('home:test-automation.detailed')}</p>
          </div>
        </div>
      </div>
    </TranslationsProvider>
  );
}
