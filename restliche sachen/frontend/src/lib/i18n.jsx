/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { de } from '../locales/de';
import { en } from '../locales/en';
import { getTranslatedRoute } from './routes';

const LanguageContext = createContext();

const translations = {
    de,
    en
};

export function LanguageProvider({ children }) {
    const location = useLocation();
    const navigate = useNavigate();

    const isEnglish = location.pathname === '/en' || location.pathname.startsWith('/en/');
    const language = isEnglish ? 'en' : 'de';

    const t = (path) => {
        const keys = path.split('.');
        let current = translations[language];
        for (const key of keys) {
            if (current === undefined || current[key] === undefined) return path;
            current = current[key];
        }
        return current;
    };

    const switchLanguage = (newLang) => {
        if (newLang === language) return;
        const newRoute = getTranslatedRoute(location.pathname, newLang);
        navigate(newRoute);
    };

    return (
        <LanguageContext.Provider value={{ language, t, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
