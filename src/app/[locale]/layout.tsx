import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { i18nConfig } from "../../../i18nConfig";
import { dir } from "i18next";

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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: LayoutParams
}>) {
  const { locale } = await params;
  return (
    <React.Suspense>
      <html lang={locale} dir={dir(locale)}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </React.Suspense>

  );
}
