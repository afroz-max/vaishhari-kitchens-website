import React, { useState } from 'react';
import { Product } from '../types';
import { BIRYANI_PRODUCTS, BUSINESS_PHONE } from '../data/menuData';
import { Plus, Minus, ShoppingBag, Check, Users, Utensils, MessageCircle, AlertCircle } from 'lucide-react';
import { ProductImage } from './ProductImage';
import { useLanguage } from '../i18n/LanguageContext';

interface BiryaniSectionProps {
  onAddToCart: (product: Product, quantity: number, selectedSize?: string) => void;
}

export const BiryaniSection: React.FC<BiryaniSectionProps> = ({ onAddToCart }) => {
  const { t, language, getProductName, getProductDescription } = useLanguage();
  const [selectedPortions, setSelectedPortions] = useState<Record<string, string>>({
    'biryani-chicken': '1 kg',
    'biryani-mutton': '1 kg',
    'biryani-egg': '1 kg',
    'biryani-veg': '1 kg',
    'biryani-paneer': '1 kg',
  });
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedItemAlert, setAddedItemAlert] = useState<string | null>(null);

  const getQty = (id: string) => quantities[id] || 1;

  const setQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handlePortionChange = (productId: string, portion: string) => {
    setSelectedPortions((prev) => ({ ...prev, [productId]: portion }));
  };

  const handleAdd = (product: Product) => {
    const qty = getQty(product.id);
    const portion = selectedPortions[product.id] || '1 kg';
    onAddToCart(product, qty, portion);
    setAddedItemAlert(product.id);
    setTimeout(() => {
      setAddedItemAlert(null);
    }, 2000);
  };

  const sides = [
    {
      name: t('sideRaita'),
      desc: language === 'te' ? 'పెరుగు, ఉల్లిపాయ, పచ్చిమిర్చి కలిపిన తాజా రైతా' : language === 'hi' ? 'दही, प्याज और मसालों से बना ताज़ा रायता' : 'Creamy spiced curd with chopped onions & herbs',
    },
    {
      name: t('sideSalan'),
      desc: language === 'te' ? 'వేరుశెనగ, నువ్వుల మసాలాతో చేసిన ఘాటైన సాలన్' : language === 'hi' ? 'मूंगफली, तिल और साबुत मिर्च का चटपटा सालन' : 'Authentic mirchi ka salan in rich peanut sesame gravy',
    },
    {
      name: t('sideOnionLemon'),
      desc: language === 'te' ? 'తాజా ఉల్లిపాయ చక్రాలు & నిమ్మకాయ ముక్కలు' : language === 'hi' ? 'ताज़ा कटा प्याज और रसदार नींबू के टुकड़े' : 'Crisp onion roundels & juicy lemon wedges',
    },
    {
      name: t('sideEggs'),
      desc: language === 'te' ? 'చికెన్/మటన్ దమ్ బిర్యానీతో ఉడికించిన గుడ్లు' : language === 'hi' ? 'चिकन व मटन बिरयानी के साथ उबले अंडे' : 'Boiled spiced eggs with chicken/mutton dum packs',
    },
  ];

  return (
    <section id="biryani" className="scroll-mt-24 py-12 sm:py-20 bg-[#FBF7ED] border-b border-[#E7DECB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C49A35] mb-2">
            {t('biryaniBadge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#103D2B] tracking-tight mb-3">
            {t('biryaniTitle')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5C4A3E] leading-relaxed">
            {t('biryaniSubtitle')}
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-[#5C4A3E]">
            <Utensils className="w-3.5 h-3.5 text-[#C49A35]" />
            <span>{t('orderNoticeHero')}</span>
          </div>
        </div>

        {/* 5 Biryani Cards Grid: 1 col on mobile, 2 on md, 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {BIRYANI_PRODUCTS.map((product) => {
            const qty = getQty(product.id);
            const portion = selectedPortions[product.id] || '1 kg';
            const isStandard1Kg = portion === '1 kg';
            const isAdded = addedItemAlert === product.id;
            const localizedName = getProductName(product);
            const localizedDesc = getProductDescription(product);

            const inquiryMsg = encodeURIComponent(
              language === 'te'
                ? `నమస్తే వైష్‌హరి కిచెన్స్! నేను "${localizedName}" (${portion}) ఆర్డర్ చేయాలనుకుంటున్నాను. ధర మరియు డెలివరీ లభ్యత ధృవీకరించగలరు.`
                : language === 'hi'
                ? `नमस्ते वैष्णहरी किचन्स! मैं "${localizedName}" (${portion}) का ऑर्डर देना चाहता हूँ। कृपया उपलब्धता और कीमत कन्फर्म करें।`
                : `Hello VaishHari Kitchens! I would like to inquire about ordering ${portion} of ${product.name}. Please confirm price and delivery date.`
            );

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-[#E7DECB] hover:border-[#C49A35] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden group focus-within:ring-2 focus-within:ring-[#C49A35]"
              >
                <div>
                  {/* Biryani Card Image & Tags */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#103D2B]/5">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      category={product.category}
                      productName={product.name}
                      className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 bg-[#103D2B]/95 text-[#D8AC42] text-xs font-bold px-3 py-1 rounded-md border border-[#C49A35]/40 backdrop-blur-xs font-mono">
                      {t('listed1kg')}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-[#FBF7ED]">
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#D8AC42] transition-colors">
                        {localizedName}
                      </h3>
                      {language !== 'te' && product.teluguName && (
                        <div lang="te" className="font-telugu text-xs font-semibold text-[#D8AC42] mt-0.5">
                          {product.teluguName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Body & Specs */}
                  <div className="p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed mb-4 min-h-[40px]">
                      {localizedDesc}
                    </p>

                    {/* Price banner */}
                    <div className="bg-[#FBF7ED] p-3 sm:p-3.5 rounded-xl border border-[#E7DECB] mb-4">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-2xl font-bold font-mono text-[#103D2B] tabular-nums">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-[#5C4A3E] font-medium ml-1">
                            {t('per1kg')}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-[#103D2B] bg-[#F5EEDB] px-2.5 py-0.5 rounded-md">
                          {t('flyerPriceConfirmed')}
                        </span>
                      </div>
                    </div>

                    {/* Portion Selector */}
                    <div className="space-y-2 mb-4">
                      <label className="text-xs font-bold text-[#5C4A3E] uppercase tracking-wide flex items-center justify-between">
                        <span>{t('selectPortion')}</span>
                        {!isStandard1Kg && (
                          <span className="text-[11px] font-semibold text-[#C49A35] flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 text-[#C49A35]" />
                            {t('rateConfirmedWhatsapp')}
                          </span>
                        )}
                      </label>
                      <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#FBF7ED] rounded-xl border border-[#E7DECB]">
                        {product.availableSizes?.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => handlePortionChange(product.id, size)}
                            className={`py-2 px-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                              portion === size
                                ? 'bg-[#103D2B] text-[#FBF7ED] shadow-xs'
                                : 'text-[#5C4A3E] hover:bg-[#EAE2D2]'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      {!isStandard1Kg && (
                        <p className="text-[11px] text-[#5C4A3E] italic">
                          {t('portionDisclaimer')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-4 sm:p-5 pt-0 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center border border-[#D5C9B3] rounded-xl bg-[#FBF7ED] p-1">
                      <button
                        onClick={() => setQty(product.id, -1)}
                        aria-label="Decrease quantity"
                        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#103D2B] hover:bg-[#EAE2D2] rounded-lg transition-colors cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 sm:w-9 text-center text-xs sm:text-sm font-bold font-mono text-[#103D2B]">
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(product.id, 1)}
                        aria-label="Increase quantity"
                        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#103D2B] hover:bg-[#EAE2D2] rounded-lg transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[42px] ${
                        isAdded
                          ? 'bg-[#15803D] text-white shadow-xs'
                          : 'bg-[#103D2B] text-[#FBF7ED] hover:bg-[#082D20] active:scale-98 shadow-xs border border-[#C49A35]/30'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>{t('addedToOrder')}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-[#C49A35]" />
                          <span>
                            {t('addToOrder')} ({portion})
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={`https://wa.me/91${BUSINESS_PHONE}?text=${inquiryMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-1 text-[11px] font-semibold text-[#5C4A3E] hover:text-[#103D2B] hover:underline"
                  >
                    <MessageCircle className="w-3 h-3 text-[#25D366]" />
                    <span>{t('askOnWhatsapp')}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callouts: Included sides + Approximate Serving Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Included with Each Pack (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E7DECB] p-5 sm:p-8">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#C49A35] uppercase tracking-wider">
              <Utensils className="w-4 h-4 text-[#C49A35]" />
              <span>{t('eachPackIncludes')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#103D2B] mb-2 sm:mb-3">
              {t('eachPackIncludes')}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4A3E] mb-6">
              {language === 'te'
                ? 'ప్రతి బిర్యానీ ప్యాక్‌తో సంప్రదాయ సైడ్ డిష్‌లు పరిశుభ్రంగా ప్యాక్ చేసి అందించబడును.'
                : language === 'hi'
                ? 'हर बिरयानी पैक के साथ प्रामाणिक होममेड साइड्स स्वच्छता से पैक करके दिए जाते हैं।'
                : 'Every biryani pack is carefully paired with authentic homemade sides, freshly packed to guarantee a complete Hyderabadi feast.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {sides.map((side) => (
                <div
                  key={side.name}
                  className="bg-[#FBF7ED] border border-[#E7DECB] rounded-xl p-3.5 text-left hover:border-[#C49A35] transition-colors"
                >
                  <div className="text-sm font-serif font-bold text-[#103D2B] mb-1">
                    {side.name}
                  </div>
                  <div className="text-xs text-[#5C4A3E] leading-relaxed">
                    {side.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approximate Serving Guide (5 cols) */}
          <div className="lg:col-span-5 bg-[#103D2B] text-[#FBF7ED] rounded-2xl p-5 sm:p-8 flex flex-col justify-between border-2 border-[#C49A35]/40 shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#D8AC42] uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#D8AC42]" />
                <span>{t('servingGuideTitle')}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                {t('servingGuideTitle')}
              </h3>
              <p className="text-xs text-[#EAE2D2] mb-5">
                {language === 'te'
                  ? 'వ్యక్తుల ఆకలి మరియు సందర్భాన్ని బట్టి పరిమాణాలు సుమారుగా సరిపోతాయి.'
                  : language === 'hi'
                  ? 'सर्विंग क्षमता आवश्यकता और अवसर के अनुसार अनुमानित है।'
                  : 'Serving counts are approximate and depend on individual appetite.'}
              </p>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FBF7ED]/10 border border-[#C49A35]/30 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-[#D8AC42] text-sm sm:text-base">1 KG</span>
                  <span className="font-medium text-white">{t('serving1kg')}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FBF7ED]/10 border border-[#C49A35]/30 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-[#D8AC42] text-sm sm:text-base">1.5 KG</span>
                  <span className="font-medium text-white">{t('serving1_5kg')}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FBF7ED]/10 border border-[#C49A35]/30 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-[#D8AC42] text-sm sm:text-base">2.5 KG</span>
                  <span className="font-medium text-white">{t('serving2_5kg')}</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-[#FBF7ED]/20 text-xs text-[#EAE2D2]">
              WhatsApp: <span className="font-mono font-bold text-[#D8AC42]">{BUSINESS_PHONE}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
