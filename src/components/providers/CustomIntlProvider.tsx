import React from 'react';
import { IntlProvider } from 'react-intl';
import { messages } from '../../data/messages';

export type Language = keyof typeof messages;

export const LANGUAGE = {
    ja: 'ja',
    en: 'en',
} as const;

export type CustomIntlContext = [Language];

export const CustomIntlContext = React.createContext<CustomIntlContext>({} as CustomIntlContext);

type Props = {
    children: React.ReactNode;
    language: Language;
};

export const CustomIntlProvider: React.VFC<Props> = ({ children, language }) => (
    <IntlProvider locale={language} messages={messages[language]}>
        <CustomIntlContext.Provider value={[language]}>{children}</CustomIntlContext.Provider>
    </IntlProvider>
);
