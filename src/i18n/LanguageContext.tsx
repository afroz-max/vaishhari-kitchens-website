import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, Product } from '../types';
import { translations, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations, replacements?: Record<string, string | number>) => string;
  getProductName: (product: Product) => string;
  getProductDescription: (product: Product) => string;
  getPriceUnit: (product: Product) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'vaishhari_lang';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && (saved === 'en' || saved === 'te' || saved === 'hi')) {
      return saved;
    }
  } catch {
    // ignore localStorage read failure
  }

  // Detect browser language
  try {
    const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    const lower = browserLang.toLowerCase();
    if (lower.startsWith('te')) return 'te';
    if (lower.startsWith('hi')) return 'hi';
  } catch {
    // ignore
  }

  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.setAttribute('data-lang', language);
      document.documentElement.classList.remove('lang-en', 'lang-te', 'lang-hi');
      document.documentElement.classList.add(`lang-${language}`);

      if (document.body) {
        document.body.setAttribute('data-lang', language);
        document.body.classList.remove('lang-en', 'lang-te', 'lang-hi');
        document.body.classList.add(`lang-${language}`);
      }
    }
  }, [language]);

  const t = useMemo(() => {
    return (key: keyof Translations, replacements?: Record<string, string | number>): string => {
      const dict = translations[language] || translations.en;
      let text = dict[key] || translations.en[key] || (key as string);
      if (replacements) {
        Object.entries(replacements).forEach(([placeholder, value]) => {
          text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), String(value));
        });
      }
      return text;
    };
  }, [language]);

  const getProductName = useMemo(() => {
    return (product: Product): string => {
      if (language === 'te' && product.teluguName) return product.teluguName;
      if (language === 'hi' && product.hindiName) return product.hindiName;
      return product.name;
    };
  }, [language]);

  const getProductDescription = useMemo(() => {
    return (product: Product): string => {
      if (language === 'te' && product.descriptionTe) return product.descriptionTe;
      if (language === 'hi' && product.descriptionHi) return product.descriptionHi;
      return product.description;
    };
  }, [language]);

  const getPriceUnit = useMemo(() => {
    return (product: Product): string => {
      if (language === 'te' && product.priceUnitTe) return product.priceUnitTe;
      if (language === 'hi' && product.priceUnitHi) return product.priceUnitHi;
      return product.priceUnit;
    };
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        getProductName,
        getProductDescription,
        getPriceUnit,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
