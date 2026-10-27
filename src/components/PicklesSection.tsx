import React, { useState } from 'react';
import { Product } from '../types';
import { PICKLE_PRODUCTS, BUSINESS_PHONE } from '../data/menuData';
import { Plus, Minus, ShoppingBag, Check, ShieldAlert, Flame, MessageCircle } from 'lucide-react';
import { ProductImage } from './ProductImage';
import { useLanguage } from '../i18n/LanguageContext';

interface PicklesSectionProps {
  onAddToCart: (product: Product, quantity: number, selectedSize?: string) => void;
}

export const PicklesSection: React.FC<PicklesSectionProps> = ({ onAddToCart }) => {
  const { t, language, getProductName, getProductDescription } = useLanguage();
  // Quantities represented in kg, strictly enforcing minimum order of 1 kg
  const [quantitiesKg, setQuantitiesKg] = useState<Record<string, number>>({
    'pickle-chicken': 1,
    'pickle-mutton': 1,
  });
  const [addedItemAlert, setAddedItemAlert] = useState<string | null>(null);

  const getKg = (id: string) => quantitiesKg[id] || 1;

  const handleKgChange = (id: string, delta: number) => {
    setQuantitiesKg((prev) => {
      const current = prev[id] || 1;
      // Cannot go below 1 kg (strictly enforced minimum order requirement)
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleAdd = (product: Product) => {
    const kg = getKg(product.id);
    onAddToCart(product, kg, `${kg} kg pack`);
    setAddedItemAlert(product.id);
    setTimeout(() => {
      setAddedItemAlert(null);
    }, 2000);
  };

  return (
    <section id="pickles" className="scroll-mt-24 py-12 sm:py-20 bg-[#FBF7ED] border-b border-[#E7DECB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C49A35] mb-2 flex items-center justify-center gap-1.5">
            <Flame className="w-4 h-4 text-[#B91C1C]" />
            <span>{t('picklesBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#103D2B] tracking-tight mb-3">
            {t('picklesTitle')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5C4A3E] leading-relaxed">
            {t('picklesSubtitle')}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#5C4A3E] bg-[#F5EEDB] px-3.5 py-1.5 rounded-full border border-[#E2D5BE]">
            <ShieldAlert className="w-4 h-4 text-[#C49A35] shrink-0" />
            <span>{t('strictMinOrder')}</span>
          </div>
        </div>

        {/* Product Cards: 1 col on mobile, 2 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {PICKLE_PRODUCTS.map((product) => {
            const kg = getKg(product.id);
            const isAdded = addedItemAlert === product.id;
            const totalPrice = product.price * kg;
            const localizedName = getProductName(product);
            const localizedDesc = getProductDescription(product);

            const inquiryMsg = encodeURIComponent(
              language === 'te'
                ? `నమస్తే వైష్‌హరి కిచెన్స్! నేను "${localizedName}" (${kg} కేజీ - ₹${totalPrice}) ఆర్డర్ చేయాలనుకుంటున్నాను. తయారీ మరియు డెలివరీ సమయం తెలపగలరు.`
                : language === 'hi'
                ? `नमस्ते वैष्णहरी किचन्स! मैं "${localizedName}" (${kg} किलो - ₹${totalPrice}) का ऑर्डर देना चाहता हूँ। कृपया तैयारी और डिलीवरी समय बताएं।`
                : `Hello VaishHari Kitchens! I would like to inquire about ordering ${kg} kg of ${product.name} (₹${totalPrice}). Please confirm preparation schedule and delivery.`
            );

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-[#E7DECB] hover:border-[#C49A35] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden group focus-within:ring-2 focus-within:ring-[#C49A35]"
              >
                <div>
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-[#103D2B]/5">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      category={product.category}
                      productName={product.name}
                      className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 bg-[#103D2B]/95 text-[#D8AC42] text-xs font-bold px-3 py-1 rounded-md border border-[#C49A35]/40 font-mono shadow-xs">
                      {t('minOrderTag')}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#D8AC42] transition-colors">
                        {localizedName}
                      </h3>
                      {language !== 'te' && product.teluguName && (
                        <div lang="te" className="font-telugu text-xs font-semibold text-[#D8AC42] mt-0.5">
                          {product.teluguName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed mb-4 min-h-[40px]">
                      {localizedDesc}
                    </p>

                    {/* Pricing with confirmed minimum */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#FBF7ED] border border-[#E7DECB] mb-4">
                      <div className="flex items-baseline justify-between mb-1">
                        <div>
                          <span className="text-xs text-[#5C4A3E] block font-medium">
                            {t('rateLabel')}
                          </span>
                          <span className="text-2xl font-bold font-mono text-[#103D2B] tabular-nums">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-[#5C4A3E] ml-1">
                            {t('per1kg')}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[#5C4A3E] block font-medium">
                            Total:
                          </span>
                          <span className="text-xl font-bold font-mono text-[#103D2B] tabular-nums">
                            ₹{totalPrice.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] text-[#5C4A3E] block">
                            ({kg} kg pack)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Kg Stepper */}
                    <div className="space-y-1.5 mb-2">
                      <label className="text-xs font-bold text-[#5C4A3E] block">
                        {t('selectKgStepper')}
                      </label>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-[#FBF7ED] border border-[#E7DECB]">
                        <span className="text-xs font-semibold text-[#103D2B]">
                          Quantity in Kilograms:
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleKgChange(product.id, -1)}
                            disabled={kg <= 1}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                              kg <= 1
                                ? 'bg-[#EAE2D2] text-[#8C8275] cursor-not-allowed opacity-50'
                                : 'bg-[#103D2B] text-[#FBF7ED] hover:bg-[#082D20] cursor-pointer'
                            }`}
                            aria-label="Decrease kg"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-12 text-center font-mono font-bold text-[#103D2B] text-sm sm:text-base">
                            {kg} KG
                          </span>
                          <button
                            type="button"
                            onClick={() => handleKgChange(product.id, 1)}
                            className="w-8 h-8 rounded-lg bg-[#103D2B] text-[#FBF7ED] hover:bg-[#082D20] flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                            aria-label="Increase kg"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 pt-0 space-y-3">
                  <button
                    onClick={() => handleAdd(product)}
                    className={`w-full py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px] ${
                      isAdded
                        ? 'bg-[#15803D] text-white shadow-xs'
                        : 'bg-[#103D2B] text-[#FBF7ED] hover:bg-[#082D20] active:scale-98 shadow-xs border border-[#C49A35]/30'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>{t('addedToOrder')}</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#C49A35]" />
                        <span>
                          {t('addToOrder')} ({kg} KG)
                        </span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/91${BUSINESS_PHONE}?text=${inquiryMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block text-[11px] font-semibold text-[#5C4A3E] hover:text-[#103D2B] hover:underline transition-colors py-1"
                  >
                    <MessageCircle className="w-3 h-3 inline mr-1 text-[#25D366]" />
                    <span>{t('askOnWhatsapp')}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
