'use client';
import { useTranslation } from "react-i18next";


export default function Languages() {
  const { t } = useTranslation();
  // const { t, resources } = ;

  return (
      <div className="flex flex-col gap-4">
        <div className="px-4 py-4">
        </div>
        <div className="px-4 py-4 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2>{t('languages:my-language-journey.title')}</h2>
            <div className="flex flex-col gap-4">
              <p className="whitespace-pre-line">{t('languages:my-language-journey.detailed')}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2>{t('languages:ongoing-practice.title')}</h2>
            <div className="flex flex-col gap-4">
              <p className="whitespace-pre-line">{t('languages:ongoing-practice.detailed')}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
