import React, { useState } from 'react';
import { Product } from '../types';
import { PINDI_VANTALU_PRODUCTS, BUSINESS_PHONE } from '../data/menuData';
import { Plus, Minus, MessageCircle, ShoppingBag, Check, Search } from 'lucide-react';
import { ProductImage } from './ProductImage';
import { useLanguage } from '../i18n/LanguageContext';

export type PindiFilterType = 'all' | 'sweet' | 'savory' | 'millet';

interface PindiVantaluSectionProps {
  onAddToCart: (product: Product, quantity: number, selectedSize?: string) => void;
  activeFilter?: PindiFilterType;
  onFilterChange?: (filter: PindiFilterType) => void;
}

export const PindiVantaluSection: React.FC<PindiVantaluSectionProps> = ({
  onAddToCart,
  activeFilter: propFilter,
  onFilterChange,
}) => {
  const { t, language, getProductName, getProductDescription, getPriceUnit } = useLanguage();
  const [internalFilter, setInternalFilter] = useState<PindiFilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedItemAlert, setAddedItemAlert] = useState<string | null>(null);

  const filter = propFilter !== undefined ? propFilter : internalFilter;
  const setFilter = (newFilter: PindiFilterType) => {
    if (onFilterChange) {
      onFilterChange(newFilter);
    }
    setInternalFilter(newFilter);
  };

  const getQty = (id: string) => quantities[id] || 1;

  const setQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleAdd = (product: Product) => {
    const qty = getQty(product.id);
    onAddToCart(product, qty, t('standardPackNotice'));
    setAddedItemAlert(product.id);
    setTimeout(() => {
      setAddedItemAlert(null);
    }, 2000);
  };

  const filteredProducts = PINDI_VANTALU_PRODUCTS.filter((product) => {
    let matchesFilter = true;
    if (filter === 'sweet') {
      matchesFilter = product.subCategory === 'sweet';
    } else if (filter === 'savory') {
      matchesFilter = product.subCategory === 'savory';
    } else if (filter === 'millet') {
      matchesFilter =
        product.name.toLowerCase().includes('millet') ||
        product.name.toLowerCase().includes('sunnundalu');
    }

    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesFilter;

    const matchesSearch =
      product.name.toLowerCase().includes(q) ||
      (product.teluguName && product.teluguName.includes(q)) ||
      (product.hindiName && product.hindiName.toLowerCase().includes(q)) ||
      product.description.toLowerCase().includes(q) ||
      (product.descriptionTe && product.descriptionTe.includes(q)) ||
      (product.descriptionHi && product.descriptionHi.includes(q));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="pindi-vantalu" className="scroll-mt-24 py-12 sm:py-20 bg-[#FBF7ED] border-b border-[#E7DECB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C49A35] mb-2">
            {t('pindiBadge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#103D2B] tracking-tight mb-3">
            {t('pindiTitle')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5C4A3E] leading-relaxed">
            {t('pindiSubtitle')}
          </p>
          <div className="mt-3 text-xs text-[#5C4A3E] flex flex-wrap items-center justify-center gap-2">
            <span
              lang="te"
              className="font-telugu font-semibold text-[#8D6B19] text-xs sm:text-sm"
            >
              సంప్రదాయ పిండి వంటలు
            </span>
            <span aria-hidden="true" className="text-[#C49A35]">·</span>
            <span className="font-medium text-[#103D2B]">{t('orderNoticeHero')}</span>
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 mb-8 bg-[#F5EEDB] p-3 sm:p-4 rounded-2xl border border-[#E7DECB]">
          {/* Subcategory buttons */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-[#FBF7ED] rounded-xl border border-[#E7DECB] overflow-x-auto no-scrollbar">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer min-h-[38px] ${
                filter === 'all'
                  ? 'bg-[#103D2B] text-[#FBF7ED] shadow-xs'
                  : 'text-[#5C4A3E] hover:text-[#103D2B] hover:bg-[#EAE2D2]'
              }`}
            >
              {t('filterAll')}
            </button>
            <button
              onClick={() => setFilter('sweet')}
              className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer min-h-[38px] ${
                filter === 'sweet'
                  ? 'bg-[#103D2B] text-[#FBF7ED] shadow-xs'
                  : 'text-[#5C4A3E] hover:text-[#103D2B] hover:bg-[#EAE2D2]'
              }`}
            >
              {t('filterSweets')}
            </button>
            <button
              onClick={() => setFilter('savory')}
              className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer min-h-[38px] ${
                filter === 'savory'
                  ? 'bg-[#103D2B] text-[#FBF7ED] shadow-xs'
                  : 'text-[#5C4A3E] hover:text-[#103D2B] hover:bg-[#EAE2D2]'
              }`}
            >
              {t('filterSavories')}
            </button>
            <button
              onClick={() => setFilter('millet')}
              className={`px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer min-h-[38px] ${
                filter === 'millet'
                  ? 'bg-[#103D2B] text-[#FBF7ED] shadow-xs'
                  : 'text-[#5C4A3E] hover:text-[#103D2B] hover:bg-[#EAE2D2]'
              }`}
            >
              {t('filterMillets')}
            </button>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 lg:w-80">
            <Search className="w-4 h-4 text-[#8D6B19] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-[#D5C9B3] bg-white text-xs sm:text-sm text-[#103D2B] placeholder:text-[#5C4A3E]/60 focus:outline-none focus:ring-2 focus:ring-[#C49A35] transition-all min-h-[42px]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5C4A3E] hover:text-[#103D2B] font-bold"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#5C4A3E] mb-6 px-1">
          <span>{t('showingItems', { count: filteredProducts.length })}</span>
          <span className="hidden sm:inline font-mono font-medium">18 Heritage Recipes</span>
        </div>

        {/* Product Cards Grid: 1 col on mobile, 2 on sm, 3 on lg */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E7DECB] p-8 sm:p-12 text-center max-w-lg mx-auto">
            <h3 className="text-lg font-serif font-bold text-[#103D2B] mb-2">
              {t('noProductsFound')}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4A3E] mb-5">
              {t('noProductsDesc')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilter('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#103D2B] text-[#FBF7ED] font-semibold text-xs sm:text-sm hover:bg-[#082D20] cursor-pointer"
            >
              {t('clearFilter')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProducts.map((product, index) => {
              const qty = getQty(product.id);
              const isAdded = addedItemAlert === product.id;
              const localizedName = getProductName(product);
              const localizedDesc = getProductDescription(product);
              const localizedUnit = getPriceUnit(product);

              const whatsappInquiryMsg = encodeURIComponent(
                language === 'te'
                  ? `నమస్తే వైష్‌హరి కిచెన్స్! నేను "${localizedName}" (ధర: ₹${product.price}) ప్యాకింగ్, బరువు మరియు ఆర్డర్ లభ్యత గురించి తెలుసుకోవాలనుకుంటున్నాను.`
                  : language === 'hi'
                  ? `नमस्ते वैष्णहरी किचन्स! मैं "${localizedName}" (कीमत: ₹${product.price}) के वजन और उपलब्धता के बारे में जानकारी चाहता हूँ।`
                  : `Hello VaishHari Kitchens! I would like to ask about package size, weight, and availability for "${product.name}" (Listed price: ₹${product.price}).`
              );

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-[#E7DECB] hover:border-[#C49A35] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden group focus-within:ring-2 focus-within:ring-[#C49A35]"
                >
                  <div>
                    {/* Visual card header */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-[#103D2B]/5">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        category={product.category}
                        productName={product.name}
                        className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Number index & New tag */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#103D2B] border border-[#C49A35] text-[#D8AC42] font-bold text-xs flex items-center justify-center font-mono shadow-xs">
                          {index + 1}
                        </span>
                        {product.isNew && (
                          <span className="bg-[#B91C1C] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-xs">
                            NEW
                          </span>
                        )}
                      </div>

                      {/* Subcategory label */}
                      <div className="absolute bottom-2.5 left-3 text-[11px] text-[#FBF7ED] font-medium tracking-wide flex items-center gap-1.5">
                        <span>
                          {product.subCategory === 'sweet' ? t('traditionalSweet') : t('crispySnack')}
                        </span>
                        {product.teluguName && language !== 'te' && (
                          <>
                            <span className="text-[#C49A35]">·</span>
                            <span lang="te" className="font-telugu text-[#F5EEDB] font-semibold">
                              {product.teluguName}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5">
                      <div className="mb-1">
                        <h3 className="text-base sm:text-lg font-serif font-bold text-[#103D2B] group-hover:text-[#C49A35] transition-colors leading-snug">
                          {localizedName}
                        </h3>
                        {/* Secondary subtitle in native Telugu script if in English/Hindi mode */}
                        {language !== 'te' && product.teluguName && (
                          <p lang="te" className="font-telugu text-xs font-semibold text-[#8D6B19] mt-0.5">
                            {product.teluguName}
                          </p>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed line-clamp-2 mb-4">
                        {localizedDesc}
                      </p>

                      {/* Pricing Display */}
                      <div className="flex items-baseline justify-between py-2.5 border-t border-b border-[#F0E8D9] mb-4">
                        <div>
                          <span className="text-xl sm:text-2xl font-bold text-[#103D2B] font-mono tabular-nums">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] sm:text-xs font-semibold text-[#5C4A3E] bg-[#F5EEDB] px-2.5 py-1 rounded-md">
                            {localizedUnit}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions: Quantity Selector & Add Button */}
                  <div className="p-4 sm:p-5 pt-0 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper with comfortable tap targets */}
                      <div className="flex items-center border border-[#D5C9B3] rounded-xl bg-[#FBF7ED] p-1">
                        <button
                          onClick={() => setQty(product.id, -1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#103D2B] hover:bg-[#EAE2D2] active:bg-[#D5C9B3] rounded-lg transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 sm:w-9 text-center text-xs sm:text-sm font-bold font-mono text-[#103D2B]">
                          {qty}
                        </span>
                        <button
                          onClick={() => setQty(product.id, 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#103D2B] hover:bg-[#EAE2D2] active:bg-[#D5C9B3] rounded-lg transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Add Button */}
                      <button
                        onClick={() => handleAdd(product)}
                        className={`flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer min-h-[42px] ${
                          isAdded
                            ? 'bg-[#15803D] text-white shadow-xs'
                            : 'bg-[#103D2B] text-[#FBF7ED] hover:bg-[#082D20] active:scale-98 shadow-xs'
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
                            <span>{t('addToOrder')}</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Quick WhatsApp Inquiry Link */}
                    <a
                      href={`https://wa.me/91${BUSINESS_PHONE}?text=${whatsappInquiryMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center block text-[11px] font-semibold text-[#8D6B19] hover:text-[#103D2B] hover:underline transition-colors py-1"
                    >
                      <MessageCircle className="w-3 h-3 inline mr-1 text-[#C49A35]" />
                      {t('askOnWhatsapp')}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
