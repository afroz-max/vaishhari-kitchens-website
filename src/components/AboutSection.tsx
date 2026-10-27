import React from 'react';
import { Heart, Sparkles, ShieldCheck, Flame, ChefHat, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/menuData';
import { useLanguage } from '../i18n/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const brandValues = [
    {
      title: t('val1Title'),
      desc: t('val1Desc'),
      icon: <ChefHat className="w-5 h-5 text-[#C49A35]" />,
    },
    {
      title: t('val2Title'),
      desc: t('val2Desc'),
      icon: <Sparkles className="w-5 h-5 text-[#C49A35]" />,
    },
    {
      title: t('val3Title'),
      desc: t('val3Desc'),
      icon: <Heart className="w-5 h-5 text-[#C49A35] fill-[#C49A35]/20" />,
    },
    {
      title: t('val4Title'),
      desc: t('val4Desc'),
      icon: <ShieldCheck className="w-5 h-5 text-[#C49A35]" />,
    },
    {
      title: t('val5Title'),
      desc: t('val5Desc'),
      icon: <Flame className="w-5 h-5 text-[#C49A35]" />,
    },
    {
      title: t('val6Title'),
      desc: t('val6Desc'),
      icon: <CheckCircle2 className="w-5 h-5 text-[#C49A35]" />,
    },
  ];

  return (
    <section id="about-us" className="scroll-mt-24 py-12 sm:py-20 bg-[#FBF7ED] border-b border-[#E7DECB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Text Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C49A35]">
              {t('aboutBadge')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#103D2B] tracking-tight">
              {t('aboutTitle')}
            </h2>
            <div className="font-serif italic text-[#C49A35] text-base sm:text-lg">
              {t('aboutQuote')}
            </div>
            <p className="text-sm sm:text-base md:text-lg text-[#5C4A3E] leading-relaxed">
              {t('aboutP1')}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#5C4A3E] leading-relaxed">
              {t('aboutP2')}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-semibold text-[#103D2B]">
              <span className="bg-[#F5EEDB] px-3 sm:px-3.5 py-1.5 rounded-lg border border-[#E2D5BE]">
                {t('aboutTag1')}
              </span>
              <span className="bg-[#F5EEDB] px-3 sm:px-3.5 py-1.5 rounded-lg border border-[#E2D5BE]">
                {t('aboutTag2')}
              </span>
              <span className="bg-[#F5EEDB] px-3 sm:px-3.5 py-1.5 rounded-lg border border-[#E2D5BE]">
                {t('aboutTag3')}
              </span>
            </div>
          </div>

          {/* Right Image Collage / Spotlight (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C49A35] shadow-xl bg-[#103D2B]">
              <img
                src={IMAGES.sweets}
                alt="Artisanal homemade laddu and sunnundalu prepared by VaishHari Kitchens"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082D20] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-[#082D20]/90 border border-[#C49A35]/30 backdrop-blur-xs text-white">
                <div className="text-xs font-bold text-[#D8AC42] uppercase tracking-wider">
                  {t('aboutSpotlightTitle')}
                </div>
                <div className="text-xs sm:text-sm font-serif font-bold mt-0.5">
                  {t('aboutSpotlightDesc')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Brand Values Grid */}
        <div className="mt-8 sm:mt-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#103D2B] mb-2">
              Our Core Brand Values
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4A3E]">
              The principles behind every pot of biryani and every batch of sweets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {brandValues.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-[#E7DECB] hover:border-[#C49A35] transition-all hover:shadow-xs flex items-start gap-3.5 sm:gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FBF7ED] border border-[#E7DECB] flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-serif font-bold text-[#103D2B] mb-1">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#5C4A3E] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
