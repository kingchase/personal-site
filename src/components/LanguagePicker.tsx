'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react"
import LanguageOptions from "./LanguageOptions";
import { Languages } from "@/lib/data/Languages";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { i18nConfig } from "../../i18nConfig";

const languages = Languages.getLanguages();

export default function LanguagePicker() {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languagePickerRef = useRef<HTMLDivElement>(null);

    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (languagePickerRef.current && !languagePickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    const changeLanguage = (lang: string) => {
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${lang};expires=${expires};path=/`;

        // redirect to new locale path
        if ( currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + lang + currentPathname);
        } else {
            router.push(currentPathname!.replace(`/${currentLocale}`, `/${lang}`));
        }
    }

    return (
        <div className="relative inline-block" >
            <div className='flex flex-row gap-2 hover:underline' onClick={() => { setIsOpen(!isOpen); }}>
                <Image
                    src="/globe.svg"
                    alt="Choose language"
                    width={16}
                    height={16}
                />
                <p className="text-lg font-medium">{t('common:nav.change-language')}</p>
            </div>
            {isOpen && (
                <div>
                    <div className='absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10
                        ring-1 ring-black ring-opacity-5
                        transition ease-out duration-200 transform origin-top-right scale-95 opacity-100
                        animate-dropdown-open'>
                        <ul className='py-2'>
                            {Object.keys(languages).map((lng) => (
                                <li
                                    key={lng}
                                    onClick={() => { changeLanguage(lng); setIsOpen(false); }}
                                    className='cursor-pointer px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white rounded'
                                >
                                    {languages[lng].nativeName}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}