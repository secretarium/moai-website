import NextI18Next from 'next-i18next';

export const nextI18next = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['fr'],
    fallbackLng: 'en',
    localePath: './public/static/locales'
});

export const {
    appWithTranslation,
    withTranslation
} = nextI18next;