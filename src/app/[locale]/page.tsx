'use client';
import { Hero } from "@/components/Hero";
import { useTranslation } from "react-i18next";


export default function Home() {
  const { t } = useTranslation();
  // const { t, resources } = ;

  return (
      <div>
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
            <div className="flex flex-col gap-4">
              <h3>{t('home:web')}</h3>
              <p className="whitespace-pre-line">{t('home:web.detailed')}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3>{t('home:cicd')}</h3>
              <p className="whitespace-pre-line">{t('home:cicd.detailed')}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3>{t('home:sql')}</h3>
              <p className="whitespace-pre-line">{t('home:sql.detailed')}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
