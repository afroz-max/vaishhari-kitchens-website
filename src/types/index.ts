export type Language = 'en' | 'te' | 'hi';

export type ProductCategory = 'pindi-vantalu' | 'biryani' | 'pickles';
export type PindiSubCategory = 'all' | 'sweets' | 'savories';

export interface Product {
  id: string;
  name: string;
  teluguName?: string;
  hindiName?: string;
  category: ProductCategory;
  subCategory?: 'sweet' | 'savory';
  price: number; // Listed price
  priceUnit: string; // e.g., 'Ask about quantity' or 'per 1 kg'
  priceUnitTe?: string;
  priceUnitHi?: string;
  isPricePerKg: boolean;
  minOrderKg?: number;
  availableSizes?: string[]; // e.g. ['1 kg', '1.5 kg', '2.5 kg']
  description: string;
  descriptionTe?: string;
  descriptionHi?: string;
  image: string;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string; // e.g., '1 kg', '1.5 kg', '2.5 kg', 'Standard Pack'
  priceStatus: 'confirmed' | 'unconfirmed-quantity';
  calculatedPrice: number | null; // null if unconfirmed
}

export interface OrderFormData {
  customerName: string;
  phone: string;
  address: string;
  deliveryDate: string;
  specialInstructions: string;
}
