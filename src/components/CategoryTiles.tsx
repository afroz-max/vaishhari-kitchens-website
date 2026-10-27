import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/menuData';
import { useLanguage } from '../i18n/LanguageContext';

interface CategoryTilesProps {
  onSelectCategory: (category: 'sweets' | 'savories' | 'millets' | 'biryani' | 'pickles') => void;
}

export const CategoryTiles: React.FC<CategoryTilesProps> = ({ onSelectCategory }) => {
  const { t, language } = useLanguage();

  const categories = [
    {
      id: 'sweets' as const,
      title: t('catSweetsTitle'),
      subtitle: language === 'te' ? 'తీపి వంటలు' : language === 'hi' ? 'पारंपरिक मिठाइयाँ' : 'Traditional Sweets',
      count: t('catSweetsCount'),
      description: t('catSweetsDesc'),
      image: PRODUCT_IMAGES.sweetGavvalu,
      alt: 'Traditional homemade Andhra & Telangana sweets',
    },
    {
      id: 'savories' as const,
      title: t('catSavoriesTitle'),
      subtitle: language === 'te' ? 'కారం వంటలు' : language === 'hi' ? 'कुरकुरे नमकीन' : 'Crispy Savories',
      count: t('catSavoriesCount'),
      description: t('catSavoriesDesc'),
      image: PRODUCT_IMAGES.murukulu,
      alt: 'Crispy homemade traditional snacks and savories',
    },
    {
      id: 'millets' as const,
      title: t('catMilletsTitle'),
      subtitle: language === 'te' ? 'మిల్లెట్ పిండివంటలు' : language === 'hi' ? 'बाजरा और रागी लड्डू' : 'Healthy Millets',
      count: t('catMilletsCount'),
      description: t('catMilletsDesc'),
      image: PRODUCT_IMAGES.milletSunnundalu,
      alt: 'Organic multi-millet healthy traditional sunnundalu',
    },
    {
      id: 'biryani' as const,
      title: t('catBiryaniTitle'),
      subtitle: language === 'te' ? 'హైదరాబాదీ దమ్ బిర్యానీ' : language === 'hi' ? 'हैदराबादी दम बिरयानी' : 'Dum Biryani',
      count: t('catBiryaniCount'),
      description: t('catBiryaniDesc'),
      image: PRODUCT_IMAGES.biryaniChicken,
      alt: 'Authentic Hyderabadi dum biryani with rich spices',
    },
    {
      id: 'pickles' as const,
      title: t('catPicklesTitle'),
      subtitle: language === 'te' ? 'నాటు పచ్చళ్ళు' : language === 'hi' ? 'पारंपरिक नॉन-वेज आचार' : 'Non-Veg Pickles',
      count: t('catPicklesCount'),
      description: t('catPicklesDesc'),
      image: PRODUCT_IMAGES.pickleChicken,
      alt: 'Authentic Andhra style homemade chicken and mutton pickles',
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#FBF7ED] border-b border-[#E7DECB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C49A35] block mb-1">
              {t('curatedCollection')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#103D2B] tracking-tight">
              {t('exploreByCategory')}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C4A3E] max-w-md">
            {t('categoryIntro')}
          </p>
        </div>

        {/* Responsive grid: 1 col on xs, 2 cols on sm, 3 on md, 5 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E7DECB] hover:border-[#C49A35] shadow-2xs hover:shadow-md transition-all duration-300 text-left flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A35]"
            >
              {/* Image aspect container */}
              <div className="relative aspect-16/10 sm:aspect-4/3 w-full overflow-hidden bg-[#103D2B]/5">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold font-mono tracking-wider uppercase text-[#FBF7ED] bg-[#103D2B]/85 px-2 py-0.5 rounded-md backdrop-blur-xs border border-[#C49A35]/30">
                  {cat.count}
                </span>
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 text-[#103D2B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 text-[#C49A35]" />
                </div>
              </div>

              {/* Text metadata */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#103D2B] group-hover:text-[#C49A35] transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p
                    lang={language === 'te' ? 'te' : language === 'hi' ? 'hi' : 'en'}
                    className={`text-xs text-[#8D6B19] font-medium mb-1 mt-0.5 ${
                      language === 'te'
                        ? 'font-telugu'
                        : language === 'hi'
                        ? 'font-devanagari'
                        : ''
                    }`}
                  >
                    {cat.subtitle}
                  </p>
                  <p className="text-xs text-[#5C4A3E] leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#F2ECE1] flex items-center justify-between text-xs font-semibold text-[#103D2B] group-hover:text-[#C49A35]">
                  <span>{t('viewDelicacies')}</span>
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
