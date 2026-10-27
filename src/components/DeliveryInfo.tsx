import React from 'react';
import { Truck, Calendar, MapPin, AlertCircle, MessageCircle } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_ADDRESS } from '../data/menuData';
import { useLanguage } from '../i18n/LanguageContext';

export const DeliveryInfo: React.FC = () => {
  const { t, language } = useLanguage();

  const getDeliveryWhatsappMsg = () => {
    if (language === 'te') {
      return encodeURIComponent(
        'నమస్తే వైష్‌హరి కిచెన్స్! నా చిరునామాకు హోమ్ డెలివరీ లభ్యత మరియు డెలివరీ సమయం గురించి తెలుసుకోవాలనుకుంటున్నాను.'
      );
    }
    if (language === 'hi') {
      return encodeURIComponent(
        'नमस्ते वैष्णहरी किचन्स! मैं अपने पते पर होम डिलीवरी की सुविधा और समय की जानकारी जानना चाहता हूँ।'
      );
    }
    return encodeURIComponent(
      'Hello VaishHari Kitchens! I would like to check home delivery availability to my address.'
    );
  };

  return (
    <section id="delivery" className="scroll-mt-24 py-12 sm:py-20 bg-[#F5EEDB] border-b border-[#E7DECB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C49A35] mb-2">
            {t('freshnessGuaranteed')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#103D2B] tracking-tight mb-3">
            {t('deliveryTitle')}
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3E]">
            {t('deliverySubtitle')}
          </p>
        </div>

        {/* 3 Information Cards: 1 col on mobile, 3 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {/* Card 1: Advance Notice Requirements */}
          <div className="bg-[#FBF7ED] rounded-2xl p-5 sm:p-7 border border-[#E7DECB] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#103D2B] text-[#D8AC42] flex items-center justify-center mb-4 border border-[#C49A35]/30">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#103D2B] mb-2">
                {t('card1Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed mb-4">
                {t('card1Desc')}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#103D2B] font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A35] mt-2 shrink-0" />
                  <span>{t('card1Biryani')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A35] mt-2 shrink-0" />
                  <span>{t('card1Pindi')}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E7DECB] text-[11px] text-[#5C4A3E]">
              {t('card1Footer')}
            </div>
          </div>

          {/* Card 2: Home Delivery */}
          <div className="bg-[#FBF7ED] rounded-2xl p-5 sm:p-7 border border-[#E7DECB] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#103D2B] text-[#D8AC42] flex items-center justify-center mb-4 border border-[#C49A35]/30">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#103D2B] mb-2">
                {t('card2Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed mb-4">
                {t('card2Desc')}
              </p>
              <div className="bg-white p-3.5 rounded-xl border border-[#E2D5BE] space-y-1 text-xs text-[#5C4A3E]">
                <div className="font-semibold text-[#103D2B]">{t('card2Pickup')}</div>
                <div className="text-[#8D6B19] font-medium">{t('card2Address')}</div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E7DECB] text-[11px] text-[#5C4A3E]">
              {t('card2Footer')}
            </div>
          </div>

          {/* Card 3: Hygiene & Pure Ingredients */}
          <div className="bg-[#FBF7ED] rounded-2xl p-5 sm:p-7 border border-[#E7DECB] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#103D2B] text-[#D8AC42] flex items-center justify-center mb-4 border border-[#C49A35]/30">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#103D2B] mb-2">
                {t('card3Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed mb-4">
                {t('card3Desc')}
              </p>
              <div className="bg-white p-3.5 rounded-xl border border-[#E2D5BE] text-xs font-semibold text-[#103D2B] space-y-1">
                <div>• {t('card3Ghee')}</div>
                <div>• {t('card3Clean')}</div>
                <div className="text-[11px] font-normal text-[#5C4A3E] mt-1 pt-1 border-t border-[#F0E8D9]">
                  WhatsApp: <span className="font-mono font-bold text-[#103D2B]">{BUSINESS_PHONE}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E7DECB]">
              <a
                href={`https://wa.me/91${BUSINESS_PHONE}?text=${getDeliveryWhatsappMsg()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#C49A35] text-[#103D2B] font-bold text-xs hover:bg-[#D8AC42] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#103D2B]" />
                <span>WhatsApp: {BUSINESS_PHONE}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-xl bg-[#FBF7ED] border border-[#E2D5BE] flex items-center gap-3 text-xs text-[#5C4A3E]">
          <AlertCircle className="w-4 h-4 text-[#C49A35] shrink-0" />
          <span className="leading-relaxed">
            {language === 'te'
              ? 'గమనిక: మేము ముందుగా వండి నిల్వ ఉంచిన పదార్థాలు లేదా కృత్రిమ రంగులను ఉపయోగించము. మీ ముందస్తు ఆర్డర్ ద్వారా మాత్రమే స్వచ్ఛమైన పదార్థాలతో తాజాగా తయారుచేస్తాము.'
              : language === 'hi'
              ? 'कृपया ध्यान दें: हम पहले से बने बासी भोजन या कृत्रिम फ्लेवर्स का उपयोग नहीं करते हैं। आपके अग्रिम ऑर्डर से हमें ताज़ी सामग्रियां जुटाकर प्यार से पकाने का समय मिलता है।'
              : 'Please note: We do not use pre-cooked batches or artificial flavor enhancers. Pre-booking allows us to source fresh ingredients and handcraft your food with traditional love.'}
          </span>
        </div>
      </div>
    </section>
  );
};
