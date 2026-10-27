import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_PHONE } from '../data/menuData';
import { useLanguage } from '../i18n/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { t, language } = useLanguage();

  const getQuickMsg = () => {
    if (language === 'te') {
      return encodeURIComponent(
        'నమస్తే వైష్‌హరి కిచెన్స్! నేను మీ తాజా హోమ్‌మేడ్ వంటకాల మెనూ వివరాలు తెలుసుకుని ఆర్డర్ చేయాలనుకుంటున్నాను.'
      );
    }
    if (language === 'hi') {
      return encodeURIComponent(
        'नमस्ते वैष्णहरी किचन्स! मैं आपके होममेड मेन्यू के बारे में जानकारी और ऑर्डर के लिए संपर्क कर रहा हूँ।'
      );
    }
    return encodeURIComponent(
      'Hello VaishHari Kitchens! I would like to place an order or inquire about your homemade menu.'
    );
  };

  return (
    <aside
      aria-label="Contact via WhatsApp"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2 group"
    >
      <a
        href={`https://wa.me/91${BUSINESS_PHONE}?text=${getQuickMsg()}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with VaishHari Kitchens at ${BUSINESS_PHONE}`}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5B] text-[#103D2B] p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-white/30"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-[#103D2B] text-[#103D2B]" />
        <span className="hidden sm:inline font-bold text-xs pr-1 tracking-wide">
          {t('chatOnWhatsapp')}: {BUSINESS_PHONE}
        </span>
      </a>
    </aside>
  );
};
