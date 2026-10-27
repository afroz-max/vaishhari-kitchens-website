import React from 'react';
import { Phone, MapPin, Calendar, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_ADDRESS, BRAND_TAGLINE, BRAND_MOTTO } from '../data/menuData';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface FooterProps {
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCart }) => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getFooterWhatsappMsg = () => {
    if (language === 'te') {
      return encodeURIComponent(
        'నమస్తే వైష్‌హరి కిచెన్స్! నేను మీ తాజా వంటకాలను ఆర్డర్ చేయాలనుకుంటున్నాను.'
      );
    }
    if (language === 'hi') {
      return encodeURIComponent(
        'नमस्ते वैष्णहरी किचन्स! मैं होममेड व्यंजनों का ऑर्डर देना चाहता हूँ।'
      );
    }
    return encodeURIComponent(
      'Hello VaishHari Kitchens! I would like to place an order.'
    );
  };

  return (
    <footer id="contact" className="bg-[#103D2B] text-[#FBF7ED] border-t-4 border-[#C49A35]">
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FBF7ED] border-2 border-[#C49A35] flex items-center justify-center text-[#103D2B] font-brand text-base font-bold shrink-0">
                VH
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-white tracking-tight">
                  VaishHari <span className="text-[#D8AC42] font-normal">Kitchens</span>
                </span>
                <p className="text-[10px] sm:text-[11px] text-[#EAE2D2] uppercase tracking-wider">
                  {BRAND_TAGLINE}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#D8CFBC] leading-relaxed">
              {t('footerDesc')}
            </p>

            <div className="text-xs text-[#D8AC42] italic font-serif">
              “{BRAND_MOTTO}”
            </div>

            {/* Language Selector in Footer */}
            <div className="pt-2">
              <LanguageSelector variant="footer" className="bg-white/10 border-white/20 text-white" />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#D8AC42] uppercase tracking-wider">
              {t('footerQuickLinks')}
            </h4>
            <ul className="space-y-2 text-xs text-[#D8CFBC]">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t('navHome')}
                </a>
              </li>
              <li>
                <a href="#pindi-vantalu" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t('navPindiVantalu')}
                </a>
              </li>
              <li>
                <a href="#biryani" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t('navBiryani')}
                </a>
              </li>
              <li>
                <a href="#pickles" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t('navPickles')}
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t('navAboutUs')}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCart}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer block py-0.5"
                >
                  {t('cartTitle')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ordering & Advance Notice */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#D8AC42] uppercase tracking-wider">
              {t('footerNoticeTitle')}
            </h4>
            <div className="space-y-2.5 text-xs text-[#D8CFBC]">
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-[#C49A35] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">{t('card1Biryani')}</strong>
                  <span>{t('card1Footer')}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-[#C49A35] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">{t('card1Pindi')}</strong>
                  <span>{t('card1Footer')}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C49A35] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">{t('trustHomeDeliveryTitle')}</strong>
                  <span>{t('card2Footer')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#D8AC42] uppercase tracking-wider">
              {t('footerContactTitle')}
            </h4>
            <div className="space-y-3 text-xs text-[#D8CFBC]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D8AC42] shrink-0 mt-0.5" />
                <span>{BUSINESS_ADDRESS}</span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#D8AC42] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] block text-[#D8CFBC]">Direct Business Line:</span>
                  <a
                    href={`tel:${BUSINESS_PHONE}`}
                    className="font-mono text-base font-bold text-[#D8AC42] hover:underline"
                  >
                    {BUSINESS_PHONE}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/91${BUSINESS_PHONE}?text=${getFooterWhatsappMsg()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-[#103D2B] font-bold text-xs hover:bg-[#20BE5B] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-[#103D2B]" />
                <span>WhatsApp: {BUSINESS_PHONE}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Closing Thank You Banner */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#FBF7ED]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm sm:text-base font-serif font-bold text-[#D8AC42]">
            <Heart className="w-4 h-4 fill-[#D8AC42] text-[#D8AC42]" />
            <span>Thank You for Supporting Homemade.</span>
          </div>

          <div className="text-xs text-[#D8CFBC]">
            Made with Love ❤️ Served with Pride
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs text-[#FBF7ED]/70 hover:text-white transition-colors cursor-pointer py-1"
          >
            <span>{t('backToTop')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Copyright strip in deep green #082D20 */}
      <div className="bg-[#082D20] py-3.5 px-4 text-center text-[11px] text-[#FBF7ED]/60 border-t border-[#FBF7ED]/10">
        <p>© {new Date().getFullYear()} VaishHari Kitchens. {t('footerCopyright')}</p>
      </div>
    </footer>
  );
};
