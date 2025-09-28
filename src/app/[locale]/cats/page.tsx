'use client';

import Image from "next/image";
import "./cats.css";
import { useTranslation } from "react-i18next";


export default function Cats() {
  const { t } = useTranslation();
  // const { t, resources } = ;

  return (
    <div>
      <div className="px-4 py-4 flex flex-col gap-10">
        <div className="mx-auto">
          <Image
            className="rounded-lg"
            src="/images/hazel.webp"
            alt="Hazel the calico cat"
            width={400}
            height={300} />
        </div>
        <div className="flex flex-col gap-4">
          <h2>{t('cats:hazel.title')}</h2>
          <div className="flex flex-col gap-4">
            <p className="whitespace-pre-line">{t('cats:hazel.detailed')}</p>
          </div>
        </div>
        <div className="mx-auto">
          <Image
            className="rounded-lg"
            src="/images/pecan.webp"
            alt="Pecan the orange cat"
            width={400}
            height={300} />
        </div>
        <div className="flex flex-col gap-4">
          <h2>{t('cats:pecan.title')}</h2>
          <div className="flex flex-col gap-4">
            <p className="whitespace-pre-line">{t('cats:pecan.detailed')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
