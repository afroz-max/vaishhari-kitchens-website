import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, OrderFormData } from '../types';
import { WHATSAPP_PHONE } from '../data/menuData';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { ProductImage } from './ProductImage';
import { useLanguage } from '../i18n/LanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const { t, language, getProductName } = useLanguage();

  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    phone: '',
    address: '',
    deliveryDate: '',
    specialInstructions: '',
  });

  const [formErrors, setFormErrors] = useState<{
    customerName?: string;
    phone?: string;
    address?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate confirmed vs estimated amounts
  let hasUnconfirmedItems = false;
  let estimatedTotal = 0;

  cartItems.forEach((item) => {
    if (item.product.category === 'pindi-vantalu') {
      hasUnconfirmedItems = true;
      estimatedTotal += item.product.price * item.quantity;
    } else if (item.product.category === 'biryani') {
      if (item.selectedSize === '1 kg') {
        estimatedTotal += item.product.price * item.quantity;
      } else {
        hasUnconfirmedItems = true;
        const factor = item.selectedSize === '1.5 kg' ? 1.5 : item.selectedSize === '2.5 kg' ? 2.5 : 1;
        estimatedTotal += item.product.price * factor * item.quantity;
      }
    } else if (item.product.category === 'pickles') {
      estimatedTotal += item.product.price * item.quantity;
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const errors: { customerName?: string; phone?: string; address?: string } = {};
    if (!formData.customerName.trim()) {
      errors.customerName = t('validationName');
    }
    const cleanPhone = formData.phone.trim().replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = t('validationPhone');
    }
    if (!formData.address.trim()) {
      errors.address = t('validationAddress');
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSendWhatsAppOrder = () => {
    if (!validateForm()) return;
    if (cartItems.length === 0) return;

    setIsSubmitting(true);

    let message = '';

    if (language === 'te') {
      const itemsSummary = cartItems
        .map((item, i) => {
          const prodName = getProductName(item.product);
          const sizeInfo = item.selectedSize ? ` [${item.selectedSize}]` : '';
          const priceNote =
            item.product.category === 'pindi-vantalu'
              ? `₹${item.product.price} (బరువు వాట్సాప్‌లో ఖరారవుతుంది)`
              : `₹${(item.product.price * (item.selectedSize === '1.5 kg' ? 1.5 : item.selectedSize === '2.5 kg' ? 2.5 : 1) * item.quantity).toLocaleString('en-IN')}`;
          return `${i + 1}. ${prodName}${sizeInfo} x ${item.quantity} -> ${priceNote}`;
        })
        .join('\n');

      const totalLine = hasUnconfirmedItems
        ? `అంచనా మొత్తం: ₹${estimatedTotal.toLocaleString('en-IN')} (ప్యాక్ బరువు ఆధారంగా తుది బిల్లు ఖరారవుతుంది)`
        : `మొత్తం: ₹${estimatedTotal.toLocaleString('en-IN')}`;

      const lines = [
        'నమస్తే వైష్‌హరి కిచెన్స్! నేను ఈ క్రింది తాజా వంటకాలను ఆర్డర్ చేయాలనుకుంటున్నాను:',
        '',
        `కస్టమర్ పేరు: ${formData.customerName.trim()}`,
        `మొబైల్ ఫోన్: ${formData.phone.trim()}`,
        formData.deliveryDate.trim() ? `కావలసిన తేదీ/సమయం: ${formData.deliveryDate.trim()}` : '',
        '',
        'ఆర్డర్ చేసిన వస్తువులు:',
        itemsSummary,
        '',
        totalLine,
        '',
        `డెలివరీ చిరునామా: ${formData.address.trim()}`,
        formData.specialInstructions.trim()
          ? `ప్రత్యేక సూచనలు: ${formData.specialInstructions.trim()}`
          : 'ప్రత్యేక సూచనలు: ఏమీ లేవు',
        '',
        'దయచేసి లభ్యత, తుది ధర మరియు డెలివరీ వివరాలను నిర్ధారించగలరు. ధన్యవాదాలు!',
      ].filter((line) => line !== '');

      message = lines.join('\n');
    } else if (language === 'hi') {
      const itemsSummary = cartItems
        .map((item, i) => {
          const prodName = getProductName(item.product);
          const sizeInfo = item.selectedSize ? ` [${item.selectedSize}]` : '';
          const priceNote =
            item.product.category === 'pindi-vantalu'
              ? `₹${item.product.price} (वजन व्हाट्सएप पर कन्फर्म होगा)`
              : `₹${(item.product.price * (item.selectedSize === '1.5 kg' ? 1.5 : item.selectedSize === '2.5 kg' ? 2.5 : 1) * item.quantity).toLocaleString('en-IN')}`;
          return `${i + 1}. ${prodName}${sizeInfo} x ${item.quantity} -> ${priceNote}`;
        })
        .join('\n');

      const totalLine = hasUnconfirmedItems
        ? `अनुमानित कुल: ₹${estimatedTotal.toLocaleString('en-IN')} (वजन और पैकिंग के अनुसार अंतिम बिल तय होगा)`
        : `कुल उप-योग: ₹${estimatedTotal.toLocaleString('en-IN')}`;

      const lines = [
        'नमस्ते वैष्णहरी किचन्स! मैं निम्नलिखित होममेड व्यंजनों का ऑर्डर देना चाहता हूँ:',
        '',
        `ग्राहक का नाम: ${formData.customerName.trim()}`,
        `मोबाइल नंबर: ${formData.phone.trim()}`,
        formData.deliveryDate.trim() ? `पसंदीदा तारीख/समय: ${formData.deliveryDate.trim()}` : '',
        '',
        'ऑर्डर की गई वस्तुएं:',
        itemsSummary,
        '',
        totalLine,
        '',
        `डिलीवरी का पता: ${formData.address.trim()}`,
        formData.specialInstructions.trim()
          ? `विशेष निर्देश: ${formData.specialInstructions.trim()}`
          : 'विशेष निर्देश: कोई नहीं',
        '',
        'कृपया ऑर्डर की उपलब्धता, अंतिम राशि और डिलीवरी समय कन्फर्म करें। धन्यवाद!',
      ].filter((line) => line !== '');

      message = lines.join('\n');
    } else {
      const itemsSummary = cartItems
        .map((item, i) => {
          const sizeInfo = item.selectedSize ? ` [${item.selectedSize}]` : '';
          const priceInfo =
            item.product.category === 'pindi-vantalu'
              ? `₹${item.product.price} (Pack size confirmed on WhatsApp)`
              : `₹${(item.product.price * (item.selectedSize === '1.5 kg' ? 1.5 : item.selectedSize === '2.5 kg' ? 2.5 : 1) * item.quantity).toLocaleString('en-IN')}`;
          return `${i + 1}. ${item.product.name}${sizeInfo} x ${item.quantity} -> ${priceInfo}`;
        })
        .join('\n');

      const totalSummaryText = hasUnconfirmedItems
        ? `Estimated Total: ₹${estimatedTotal.toLocaleString('en-IN')} (Subject to pack size & quantity confirmation)`
        : `Subtotal: ₹${estimatedTotal.toLocaleString('en-IN')}`;

      const lines = [
        'Hello VaishHari Kitchens! I would like to place an order.',
        '',
        `Name: ${formData.customerName.trim()}`,
        `Phone: ${formData.phone.trim()}`,
        formData.deliveryDate.trim() ? `Preferred Date/Notice: ${formData.deliveryDate.trim()}` : '',
        '',
        'Products:',
        itemsSummary,
        '',
        totalSummaryText,
        '',
        `Delivery Address: ${formData.address.trim()}`,
        formData.specialInstructions.trim()
          ? `Special Instructions: ${formData.specialInstructions.trim()}`
          : 'Special Instructions: None',
        '',
        'Please confirm availability, final pricing, and delivery details. Thank you!',
      ].filter((line) => line !== '');

      message = lines.join('\n');
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          {/* Backdrop with Motion Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-xs"
          />

          {/* Slide-out Panel with Spring Entrance */}
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-full sm:max-w-md md:max-w-lg bg-[#FBF7ED] shadow-2xl flex flex-col h-full border-l border-[#C49A35]/30"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 bg-[#103D2B] text-[#FBF7ED] flex items-center justify-between border-b border-[#C49A35]/30 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-[#C49A35] flex items-center justify-center text-[#D8AC42]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-serif font-bold text-white">
                      {t('cartTitle')}
                    </h2>
                    <span className="text-xs text-[#EAE2D2]">
                      {t('itemsSelected', { count: cartItems.length })}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close cart"
                  className="p-2 rounded-lg text-[#FBF7ED]/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Content Area */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#EAE2D2] flex items-center justify-center text-[#5C4A3E]">
                      <ShoppingBag className="w-8 h-8 opacity-60" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-serif font-bold text-[#103D2B]">
                        {t('emptyCartTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C4A3E] max-w-xs mx-auto">
                        {t('emptyCartDesc')}
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl bg-[#103D2B] text-[#FBF7ED] text-xs sm:text-sm font-semibold hover:bg-[#082D20] cursor-pointer"
                    >
                      {t('exploreMenuBtn')}
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Item list */}
                    <div className="space-y-3">
                      {cartItems.map((item, index) => {
                        const localizedName = getProductName(item.product);
                        const isPindi = item.product.category === 'pindi-vantalu';
                        const itemPrice = isPindi
                          ? item.product.price * item.quantity
                          : item.product.price *
                            (item.selectedSize === '1.5 kg' ? 1.5 : item.selectedSize === '2.5 kg' ? 2.5 : 1) *
                            item.quantity;

                        return (
                          <div
                            key={`${item.product.id}-${item.selectedSize || 'std'}-${index}`}
                            className="bg-white rounded-xl border border-[#E7DECB] p-3 sm:p-3.5 flex gap-3 items-center shadow-2xs"
                          >
                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#103D2B]/5 shrink-0 border border-[#E7DECB]">
                              <ProductImage
                                src={item.product.image}
                                alt={item.product.name}
                                category={item.product.category}
                                productName={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs sm:text-sm font-serif font-bold text-[#103D2B] truncate">
                                {localizedName}
                              </h4>
                              {item.selectedSize && (
                                <span className="inline-block text-[10px] sm:text-[11px] font-semibold text-[#8D6B19] bg-[#F5EEDB] px-2 py-0.5 rounded-sm mt-0.5">
                                  {item.selectedSize}
                                </span>
                              )}
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs sm:text-sm font-bold font-mono text-[#103D2B]">
                                  ₹{itemPrice.toLocaleString('en-IN')}
                                  {isPindi && (
                                    <span className="text-[10px] text-[#5C4A3E] font-normal ml-1">
                                      *
                                    </span>
                                  )}
                                </span>

                                <div className="flex items-center gap-1 border border-[#D5C9B3] rounded-lg bg-[#FBF7ED] p-0.5">
                                  <button
                                    onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                                    aria-label="Decrease quantity"
                                    className="w-6 h-6 flex items-center justify-center text-[#103D2B] hover:bg-[#EAE2D2] rounded cursor-pointer"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="w-6 text-center text-xs font-bold font-mono text-[#103D2B]">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                                    aria-label="Increase quantity"
                                    className="w-6 h-6 flex items-center justify-center text-[#103D2B] hover:bg-[#EAE2D2] rounded cursor-pointer"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => onRemoveItem(index)}
                              aria-label={`Remove ${item.product.name}`}
                              className="p-1.5 text-[#5C4A3E] hover:text-[#B91C1C] transition-colors cursor-pointer self-start"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* Subtotal & Notice */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E7DECB] space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-[#5C4A3E]">
                          {t('confirmedSubtotal')}
                        </span>
                        <span className="text-xl sm:text-2xl font-bold font-mono text-[#103D2B]">
                          ₹{estimatedTotal.toLocaleString('en-IN')}
                        </span>
                      </div>
                      {hasUnconfirmedItems && (
                        <p className="text-[11px] text-[#8D6B19] leading-relaxed border-t border-[#F2ECE1] pt-2">
                          {t('unconfirmedNotice')}
                        </p>
                      )}
                    </div>

                    {/* Customer Information Form */}
                    <div className="p-4 rounded-xl bg-white border border-[#E7DECB] space-y-3.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#103D2B] uppercase tracking-wider pb-1 border-b border-[#F2ECE1]">
                        <ShieldCheck className="w-4 h-4 text-[#C49A35]" />
                        <span>{t('customerDetailsTitle')}</span>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#5C4A3E] mb-1">
                          {t('nameLabel')}
                        </label>
                        <input
                          type="text"
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleInputChange}
                          placeholder={t('namePlaceholder')}
                          className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm bg-[#FBF7ED] text-[#103D2B] focus:outline-none focus:ring-2 focus:ring-[#C49A35] ${
                            formErrors.customerName ? 'border-[#B91C1C]' : 'border-[#D5C9B3]'
                          }`}
                        />
                        {formErrors.customerName && (
                          <span className="text-[11px] text-[#B91C1C] mt-1 block">
                            {formErrors.customerName}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#5C4A3E] mb-1">
                          {t('phoneLabel')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t('phonePlaceholder')}
                          className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm bg-[#FBF7ED] text-[#103D2B] focus:outline-none focus:ring-2 focus:ring-[#C49A35] ${
                            formErrors.phone ? 'border-[#B91C1C]' : 'border-[#D5C9B3]'
                          }`}
                        />
                        {formErrors.phone && (
                          <span className="text-[11px] text-[#B91C1C] mt-1 block">
                            {formErrors.phone}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#5C4A3E] mb-1">
                          {t('addressLabel')}
                        </label>
                        <textarea
                          name="address"
                          rows={2}
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder={t('addressPlaceholder')}
                          className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm bg-[#FBF7ED] text-[#103D2B] focus:outline-none focus:ring-2 focus:ring-[#C49A35] resize-none ${
                            formErrors.address ? 'border-[#B91C1C]' : 'border-[#D5C9B3]'
                          }`}
                        />
                        {formErrors.address && (
                          <span className="text-[11px] text-[#B91C1C] mt-1 block">
                            {formErrors.address}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#5C4A3E] mb-1">
                          {t('dateLabel')}
                        </label>
                        <input
                          type="text"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleInputChange}
                          placeholder={t('datePlaceholder')}
                          className="w-full px-3 py-2 rounded-lg border border-[#D5C9B3] text-xs sm:text-sm bg-[#FBF7ED] text-[#103D2B] focus:outline-none focus:ring-2 focus:ring-[#C49A35]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#5C4A3E] mb-1">
                          {t('notesLabel')}
                        </label>
                        <input
                          type="text"
                          name="specialInstructions"
                          value={formData.specialInstructions}
                          onChange={handleInputChange}
                          placeholder={t('notesPlaceholder')}
                          className="w-full px-3 py-2 rounded-lg border border-[#D5C9B3] text-xs sm:text-sm bg-[#FBF7ED] text-[#103D2B] focus:outline-none focus:ring-2 focus:ring-[#C49A35]"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Drawer Footer Actions */}
              {cartItems.length > 0 && (
                <div className="p-4 sm:p-5 bg-white border-t border-[#E7DECB] space-y-3 shrink-0">
                  <button
                    onClick={handleSendWhatsAppOrder}
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-[#C49A35] text-[#103D2B] font-bold text-sm sm:text-base hover:bg-[#D8AC42] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[48px]"
                  >
                    <MessageCircle className="w-5 h-5 fill-[#103D2B]" />
                    <span>{t('sendWhatsappOrder')}</span>
                  </button>

                  <div className="flex items-center justify-between text-xs text-[#5C4A3E] px-1">
                    <button
                      onClick={onClearCart}
                      className="hover:text-[#B91C1C] transition-colors cursor-pointer"
                    >
                      {t('clearCart')}
                    </button>
                    <button
                      onClick={onClose}
                      className="hover:text-[#103D2B] font-semibold transition-colors cursor-pointer"
                    >
                      {t('continueShopping')}
                    </button>
                  </div>

                  <p className="text-[10px] text-[#5C4A3E]/80 text-center leading-tight">
                    {t('orderNoticeFooter')}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
