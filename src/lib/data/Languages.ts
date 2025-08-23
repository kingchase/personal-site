const languages: { [key: string]: { nativeName: string } } = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Español' },
    ja: { nativeName: '日本語' }
}

export class Languages {
    static getLanguages() {
        return languages;
    }

    static getLanguage(languageCode: string) {
        return languages[languageCode];
    }
}