import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { i18nConfig } from "../../../i18nConfig";
import { dir } from "i18next";
import { Navbar } from "@/components/Navbar";
import TranslationsProvider from "@/components/TranslationsProvider";
import { initTranslations } from "../i18n";

interface LayoutParams {
  locale: string
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chase King Personal Site",
  description: "Personal site about my career and personal life.",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = ['home', 'common', 'languages', 'cats'];

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: LayoutParams
}>) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <React.Suspense>
      <html lang={locale} dir={dir(locale)}>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >

            <div className="max-w-xl mx-auto">
              <div>
                <Navbar />
              </div>
              {children}
            </div>
            <footer className="bg-gray-400 text-white py-6 px-4 flex flex-col items-center">
              <a target="_blank" rel="noopener noreferrer" className="hover:underline" href="https://www.linkedin.com/in/chase-king-900155164/">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer" className="hover:underline" href="https://github.com/kingchase">Github</a>
              <a target="_blank" rel="noopener noreferrer" className="hover:underline" href="https://github.com/kingchase/personal-site">{t('common:footer.source-code')}</a>
              <p className="text-gray-600">© Chase King 2025</p>
            </footer>
          </body>
        </TranslationsProvider>
      </html>
    </React.Suspense>

  );
}
