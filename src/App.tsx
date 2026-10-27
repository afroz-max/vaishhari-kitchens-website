import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryTiles } from './components/CategoryTiles';
import { PindiVantaluSection, PindiFilterType } from './components/PindiVantaluSection';
import { BiryaniSection } from './components/BiryaniSection';
import { PicklesSection } from './components/PicklesSection';
import { DeliveryInfo } from './components/DeliveryInfo';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function VaishHariApp() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vaishhari_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [pindiFilter, setPindiFilter] = useState<PindiFilterType>('all');

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vaishhari_cart', JSON.stringify(cartItems));
    } catch {
      // ignore storage errors
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity: number, selectedSize?: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + quantity,
        };
        return next;
      }

      const isPriceConfirmed = product.isPricePerKg && selectedSize === '1 kg';

      return [
        ...prev,
        {
          product,
          quantity,
          selectedSize: selectedSize || (product.isPricePerKg ? '1 kg' : undefined),
          priceStatus: isPriceConfirmed ? 'confirmed' : 'unconfirmed-quantity',
          calculatedPrice: isPriceConfirmed ? product.price * quantity : null,
        },
      ];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], quantity: newQty };
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('pindi-vantalu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: 'sweets' | 'savories' | 'millets' | 'biryani' | 'pickles') => {
    if (category === 'sweets') {
      setPindiFilter('sweet');
      const el = document.getElementById('pindi-vantalu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (category === 'savories') {
      setPindiFilter('savory');
      const el = document.getElementById('pindi-vantalu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (category === 'millets') {
      setPindiFilter('millet');
      const el = document.getElementById('pindi-vantalu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (category === 'biryani') {
      const el = document.getElementById('biryani');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (category === 'pickles') {
      const el = document.getElementById('pickles');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7ED] text-[#2C241E] overflow-x-hidden">
      {/* Header with Navigation, Language Selector and Cart Counter */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreMenu={scrollToMenu} />

        {/* Category Exploration Tiles */}
        <CategoryTiles onSelectCategory={handleSelectCategory} />

        {/* 1. Pindi Vantalu Section (18 products matching flyer) */}
        <PindiVantaluSection
          onAddToCart={handleAddToCart}
          activeFilter={pindiFilter}
          onFilterChange={setPindiFilter}
        />

        {/* 2. Hyderabadi-Style Biryani (5 varieties + accompaniments + serving guide) */}
        <BiryaniSection onAddToCart={handleAddToCart} />

        {/* 3. Traditional Chicken & Mutton Pickles (min. 1 kg) */}
        <PicklesSection onAddToCart={handleAddToCart} />

        {/* 4. Delivery & Advance Notice Guidelines */}
        <DeliveryInfo />

        {/* 5. About Us & 6 Brand Values */}
        <AboutSection />
      </main>

      {/* Footer & Contact Section */}
      <Footer onOpenCart={() => setIsCartOpen(true)} />

      {/* Slide-out Order Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <VaishHariApp />
    </LanguageProvider>
  );
}
