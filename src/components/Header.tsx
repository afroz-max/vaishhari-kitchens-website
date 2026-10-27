import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { BUSINESS_PHONE, BRAND_TAGLINE } from '../data/menuData';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t('navHome'), href: '#home' },
    { label: t('navPindiVantalu'), href: '#pindi-vantalu' },
    { label: t('navBiryani'), href: '#biryani' },
    { label: t('navPickles'), href: '#pickles' },
    { label: t('navAboutUs'), href: '#about-us' },
    { label: t('navDeliveryContact'), href: '#delivery' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF7ED]/98 backdrop-blur-md border-b border-[#C49A35]/30 shadow-md'
          : 'bg-[#FBF7ED] border-b border-[#E7DECB]'
      }`}
    >
      {/* Top micro-bar with brand message and phone */}
      <div className="bg-[#103D2B] text-[#FBF7ED] text-[11px] sm:text-xs py-1 px-3 sm:px-4 font-medium tracking-wide border-b border-[#C49A35]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <span className="truncate text-[#EAE2D2] text-center sm:text-left">
            {t('topMicroBar')}
          </span>
          <div className="hidden md:flex items-center gap-2 text-xs font-medium shrink-0">
            <span className="text-[#C49A35]">{t('whatsappOrders')}</span>
            <a
              href={`https://wa.me/91${BUSINESS_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 font-mono tracking-wider font-bold text-[#D8AC42]"
            >
              <Phone className="w-3 h-3 inline" />
              {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Wordmark & Monogram */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#103D2B] border-2 border-[#C49A35] flex items-center justify-center text-[#D8AC42] font-brand text-base sm:text-lg font-bold shadow-xs group-hover:scale-105 transition-transform shrink-0">
            VH
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#103D2B] tracking-tight group-hover:text-[#082D20] transition-colors leading-tight">
              VaishHari <span className="text-[#C49A35] font-normal">Kitchens</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#5C4A3E] font-medium tracking-wider uppercase leading-none hidden xs:inline">
              {BRAND_TAGLINE}
            </span>
          </div>
        </a>

        {/* Clean Typographic Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13.5px] font-semibold text-[#5C4A3E]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#103D2B] hover:underline underline-offset-8 decoration-[#C49A35] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side controls: Language Selector + Cart Trigger + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop Language Selector */}
          <div className="hidden md:block">
            <LanguageSelector variant="header" />
          </div>

          {/* Primary Action Button (Order Now with Live Cart Count) */}
          <button
            onClick={onOpenCart}
            aria-label={`${t('cartButton')}: ${cartCount}`}
            className="relative flex items-center gap-2 bg-[#103D2B] text-[#FBF7ED] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-[#082D20] active:scale-98 transition-all font-semibold text-xs sm:text-sm shadow-xs cursor-pointer whitespace-nowrap border border-[#C49A35]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A35] min-h-[42px]"
          >
            <ShoppingBag className="w-4 h-4 text-[#C49A35]" />
            <span className="hidden sm:inline">{t('navOrderNow')}</span>
            <span
              className={`font-bold text-xs px-1.5 py-0.5 rounded-full min-w-5 text-center ${
                cartCount > 0
                  ? 'bg-[#C49A35] text-[#103D2B]'
                  : 'bg-white/15 text-[#FBF7ED]'
              }`}
            >
              {cartCount}
            </span>
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
            className="lg:hidden p-2 rounded-lg text-[#103D2B] hover:bg-[#EAE2D2] active:bg-[#E0D5C0] transition-colors cursor-pointer min-w-[42px] min-h-[42px] flex items-center justify-center border border-[#E7DECB]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[calc(18px+4.5rem)] sm:top-[calc(20px+5rem)] z-50 lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative bg-[#FBF7ED] border-b-2 border-[#C49A35] px-5 py-6 space-y-5 shadow-2xl max-h-[calc(100vh-5.5rem)] overflow-y-auto">
            {/* Mobile Language Selector */}
            <div className="p-3 bg-white/80 rounded-xl border border-[#E7DECB]">
              <LanguageSelector variant="mobile" />
            </div>

            {/* Navigation links */}
            <div className="space-y-1">
              <div className="text-[11px] text-[#8D6B19] font-bold uppercase tracking-widest px-2 pb-1">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 text-[#103D2B] font-semibold hover:text-[#C49A35] hover:bg-white/60 active:bg-[#EAE2D2] rounded-lg text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Contact & WhatsApp CTA */}
            <div className="pt-2 border-t border-[#E7DECB] space-y-2">
              <a
                href={`https://wa.me/91${BUSINESS_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-[#103D2B] bg-[#C49A35] hover:bg-[#D8AC42] rounded-xl shadow-xs"
              >
                <Phone className="w-4 h-4 fill-[#103D2B]" />
                <span>WhatsApp: {BUSINESS_PHONE}</span>
              </a>
              <div className="text-center text-[11px] text-[#5C4A3E]">
                Kitchen: Marina Skies Tower 1, Flat 212
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
