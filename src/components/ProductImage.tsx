import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  productName?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = '',
  productName,
}) => {
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // If the primary path fails, try alternate source before showing fallback
  const handleError = () => {
    if (currentSrc.startsWith('/images/products/')) {
      const filename = currentSrc.replace('/images/products/', '');
      setCurrentSrc(`/src/assets/images/${filename}`);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#F7F2E7] text-[#4A3B32] p-4 text-center select-none border border-[#E7DECB] ${className}`}>
        <div className="w-10 h-10 rounded-full bg-[#EDE4D0] flex items-center justify-center text-[#C49A35] mb-2 shadow-xs">
          <Utensils className="w-5 h-5 text-[#8D6B19]" />
        </div>
        <span className="text-xs font-semibold text-[#103D2B] max-w-[90%] truncate leading-normal">
          {productName || alt}
        </span>
        <span className="text-[10px] text-[#8D6B19] mt-0.5 font-medium tracking-wide">
          VaishHari Kitchens
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#FAF7EE] ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={handleError}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};
