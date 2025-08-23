'use client';
import { useTranslation } from "react-i18next";

export const Hero = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-2">
            {/* Image */}
            {/* Text */}
            <h2>{t('home:name')}</h2>
            <p>{t('home:intro.detailed')}</p>
        </div>
    );
}