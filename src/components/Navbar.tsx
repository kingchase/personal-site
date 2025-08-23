'use client';
import { useTranslation } from "react-i18next";
import LanguagePicker from "./LanguagePicker"

export const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="px-4 py-4">
            <ul className="flex flex-row gap-8 md:gap-6">
                <li>
                    <a href="/" className="text-lg font-medium hover:underline">
                        {t('common:nav.home')}
                    </a>
                </li>
                <li>
                    <a href="/career" className="text-lg font-medium hover:underline">
                        {t('common:nav.career')}
                    </a>
                </li>
                <li>
                    <a href="/languages" className="text-lg font-medium hover:underline">
                        {t('common:nav.languages')}
                    </a>
                </li>
                <li>
                    <LanguagePicker/>
                </li>
            </ul>
        </nav>
    )
}