import React from 'react';
import { MessageCircle, ArrowRight, Heart, Sparkles, ShieldCheck, Clock, MapPin, Truck, Leaf, ChefHat } from 'lucide-react';
import { BUSINESS_PHONE, IMAGES } from '../data/menuData';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const { t, language } = useLanguage();

  const getQuickWhatsappMessage = () => {
    if (language === 'te') {
      return encodeURIComponent(
        'నమస్తే వైష్‌హరి కిచెన్స్! మీ తాజా పిండి వంటలు, బిర్యానీ మరియు పచ్చళ్ళ మెనూ వివరాలు తెలుసుకుని ఆర్డర్ చేయాలనుకుంటున్నాను.'
      );
    }
    if (language === 'hi') {
      return encodeURIComponent(
        'नमस्ते वैष्णहरी किचन्स! मैं आपके होममेड मेन्यू के बारे में जानकारी और ऑर्डर की उपलब्धता जानना चाहता हूँ।'
      );
    }
    return encodeURIComponent(
      'Hello VaishHari Kitchens! I would like to explore your homemade menu and check availability for an order.'
    );
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#FBF7ED] via-[#F5EEDB] to-[#FBF7ED] border-b border-[#E7DECB]">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#C49A35]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#103D2B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 md:pt-16 pb-12 sm:pb-16">
        {/* Main 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand, Headline, Description, CTAs, Notice */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            {/* Telugu Tagline & Brand Authenticity Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 border border-[#C49A35]/40 shadow-xs w-fit max-w-full">
              <span
                lang="te"
                className="font-telugu font-semibold text-[#103D2B] text-xs sm:text-sm md:text-base tracking-normal leading-snug select-text"
              >
                {t('exactTeluguTagline')}
              </span>
              <span className="text-[#C49A35] font-bold select-none" aria-hidden="true">·</span>
              <span className="text-[#8D6B19] uppercase tracking-wider text-[10px] sm:text-[11px] font-bold">
                {t('homemadeGoodness')}
              </span>
            </div>

            {/* Localized Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-[#103D2B] leading-[1.18] sm:leading-[1.14] tracking-tight text-balance">
              {t('heroHeadline1')}{' '}
              <span className="text-[#C49A35] italic font-normal underline decoration-[#C49A35]/40 underline-offset-8">
                {t('heroHeadline2')}
              </span>
            </h1>

            {/* Localized Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#5C4A3E] leading-relaxed max-w-2xl">
              {t('heroDescription')}
            </p>

            {/* Trust points line */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-[#5C4A3E]">
              <div className="flex items-center gap-1.5">
                <ChefHat className="w-4 h-4 text-[#C49A35] shrink-0" />
                <span>{t('trustSmallBatch')}</span>
              </div>
              <span className="text-[#C49A35] hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-[#103D2B] shrink-0" />
                <span>{t('trustPureGhee')}</span>
              </div>
              <span className="text-[#C49A35] hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#C49A35] fill-[#C49A35]/30 shrink-0" />
                <span>{t('trustMadeWithLove')}</span>
              </div>
            </div>

            {/* Action buttons with consistent height and touch-friendly mobile stacking */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreMenu}
                className="h-12 px-6 rounded-xl bg-[#103D2B] text-[#FBF7ED] font-semibold text-sm sm:text-base hover:bg-[#082D20] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{t('exploreMenu')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C49A35]" />
              </button>

              <a
                href={`https://wa.me/91${BUSINESS_PHONE}?text=${getQuickWhatsappMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-xl bg-[#C49A35] text-[#103D2B] font-bold text-sm sm:text-base hover:bg-[#D8AC42] active:scale-98 transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-[#103D2B]" />
                <span>{t('whatsappOrderBtn')}</span>
              </a>
            </div>

            {/* Advance Notice & Kitchen Location Strip */}
            <div className="pt-4 border-t border-[#E7DECB] grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-[#5C4A3E]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C49A35] shrink-0" />
                <span>{t('orderNoticeHero')}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#103D2B] shrink-0" />
                <span>{t('kitchenHero')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Culinary Visual with Gold Accents */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 border-[#C49A35] bg-[#103D2B]">
              <div className="absolute inset-2 border border-[#C49A35]/40 rounded-xl pointer-events-none z-10" />

              <img
                src={IMAGES.heroBiryani}
                alt="Authentic VaishHari Hyderabadi Dum Biryani with mirchi ka salan, boiled eggs, and cooling raita"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[430px] object-cover object-center transform hover:scale-103 transition-transform duration-700"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#082D20] via-[#082D20]/85 to-transparent p-4 sm:p-6 text-[#FBF7ED] z-20">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-[#C49A35] tracking-wider uppercase mb-1">
                  <span>{t('authenticDumBadge')}</span>
                  <span>{t('pureGheeBadge')}</span>
                </div>
                <div className="text-base sm:text-lg font-serif font-bold text-white leading-snug">
                  {t('heroImageTitle')}
                </div>
                <div className="text-[11px] sm:text-xs text-[#EAE2D2] mt-0.5 leading-relaxed">
                  {t('heroImageSubtitle')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refined Trust Strip directly below Hero */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#E7DECB]/90">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-white/75 border border-[#E7DECB] shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#103D2B]/10 text-[#103D2B] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#C49A35]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-[#103D2B]">
                  {t('trustTraditionalTasteTitle')}
                </h4>
                <p className="text-[11px] text-[#5C4A3E]">
                  {t('trustTraditionalTasteDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-white/75 border border-[#E7DECB] shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#103D2B]/10 text-[#103D2B] flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-[#C49A35] fill-[#C49A35]/30" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-[#103D2B]">
                  {t('trustHomemadeCareTitle')}
                </h4>
                <p className="text-[11px] text-[#5C4A3E]">
                  {t('trustHomemadeCareDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-white/75 border border-[#E7DECB] shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#103D2B]/10 text-[#103D2B] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#103D2B]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-[#103D2B]">
                  {t('trustQualityIngredientsTitle')}
                </h4>
                <p className="text-[11px] text-[#5C4A3E]">
                  {t('trustQualityIngredientsDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-white/75 border border-[#E7DECB] shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#103D2B]/10 text-[#103D2B] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-[#C49A35]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-[#103D2B]">
                  {t('trustHomeDeliveryTitle')}
                </h4>
                <p className="text-[11px] text-[#5C4A3E]">
                  {t('trustHomeDeliveryDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
