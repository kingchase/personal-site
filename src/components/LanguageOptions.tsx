
import { Languages } from "@/lib/data/Languages";
import { useTranslation } from "react-i18next";

export default function LanguageOptions() {
    const languages = Languages.getLanguages();
    const { i18n } = useTranslation();
    return (
        <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10
               ring-1 ring-black ring-opacity-5
               transition ease-out duration-200 transform origin-top-right scale-95 opacity-0
               animate-dropdown-open'>
            <ul className='py-2'>
                {Object.keys(languages).map((lng) => (
                    <li
                        key={lng}
                        onClick={() => { i18n.changeLanguage(lng); }}
                        className='cursor-pointer px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white rounded'
                    >
                        {languages[lng].nativeName}
                    </li>
                ))}
            </ul>
        </div>
    );
}