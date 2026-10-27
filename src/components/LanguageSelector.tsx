import React from 'react';
import { Globe, Check } from 'lucide-react';
import { Language } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'header' | 'mobile' | 'footer';
  className?: string;
}

const LANGUAGES: { code: Language; label: string; native: string; fontClass: string }[] = [
  { code: 'en', label: 'English', native: 'English', fontClass: 'font-sans' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు', fontClass: 'font-telugu' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', fontClass: 'font-devanagari' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'header',
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-bold text-[#5C4A3E] uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5 text-[#C49A35]" />
          <span>Select Language / భాష / भाषा</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {LANGUAGES.map((item) => {
            const isSelected = language === item.code;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 border cursor-pointer active:scale-95 ${
                  isSelected
                    ? 'bg-[#103D2B] text-[#FBF7ED] border-[#C49A35] shadow-xs'
                    : 'bg-white/80 text-[#5C4A3E] border-[#E7DECB] hover:bg-[#F5EEDB]'
                }`}
                aria-pressed={isSelected}
              >
                <span className={`text-sm leading-none ${item.fontClass}`}>{item.native}</span>
                <span className="text-[10px] opacity-75 font-normal">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Header segmented pill / dropdown selector
  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-[#103D2B]/8 border border-[#C49A35]/40 shadow-2xs ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <div className="pl-2 pr-1 text-[#103D2B] flex items-center shrink-0">
        <Globe className="w-3.5 h-3.5 text-[#C49A35]" />
      </div>
      <div className="flex items-center gap-0.5">
        {LANGUAGES.map((item) => {
          const isSelected = language === item.code;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => setLanguage(item.code)}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                item.fontClass
              } ${
                isSelected
                  ? 'bg-[#103D2B] text-[#FBF7ED] shadow-xs font-bold'
                  : 'text-[#103D2B] hover:text-[#C49A35] hover:bg-[#F5EEDB]/60'
              }`}
              aria-pressed={isSelected}
            >
              {item.native}
            </button>
          );
        })}
      </div>
    </div>
  );
};
