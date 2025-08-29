'use client';
import { useTranslation } from "react-i18next";
import Image from 'next/image'

export const Hero = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-2">
            <div className="mx-auto">
                <Image
                    className="rounded-lg"
                    src="/images/chase.webp"
                    alt="Chase King"
                    width={400}
                    height={300} />
            </div>
            <h2 className="">{t('home:name')}</h2>
            <p>{t('home:intro.detailed')}</p>
        </div>
    );
}