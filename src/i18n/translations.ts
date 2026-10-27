import { Language } from '../types';

export interface Translations {
  // Navigation & Header
  navHome: string;
  navPindiVantalu: string;
  navBiryani: string;
  navPickles: string;
  navAboutUs: string;
  navDeliveryContact: string;
  navOrderNow: string;
  topMicroBar: string;
  whatsappOrders: string;
  cartButton: string;
  openMenu: string;
  closeMenu: string;
  selectLanguage: string;

  // Hero Section
  exactTeluguTagline: string;
  homemadeGoodness: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroDescription: string;
  trustSmallBatch: string;
  trustPureGhee: string;
  trustMadeWithLove: string;
  exploreMenu: string;
  whatsappOrderBtn: string;
  orderNoticeHero: string;
  kitchenHero: string;
  authenticDumBadge: string;
  pureGheeBadge: string;
  heroImageTitle: string;
  heroImageSubtitle: string;

  // Trust Strip
  trustTraditionalTasteTitle: string;
  trustTraditionalTasteDesc: string;
  trustHomemadeCareTitle: string;
  trustHomemadeCareDesc: string;
  trustQualityIngredientsTitle: string;
  trustQualityIngredientsDesc: string;
  trustHomeDeliveryTitle: string;
  trustHomeDeliveryDesc: string;

  // Category Exploration
  curatedCollection: string;
  exploreByCategory: string;
  categoryIntro: string;
  catSweetsTitle: string;
  catSweetsCount: string;
  catSweetsDesc: string;
  catSavoriesTitle: string;
  catSavoriesCount: string;
  catSavoriesDesc: string;
  catMilletsTitle: string;
  catMilletsCount: string;
  catMilletsDesc: string;
  catBiryaniTitle: string;
  catBiryaniCount: string;
  catBiryaniDesc: string;
  catPicklesTitle: string;
  catPicklesCount: string;
  catPicklesDesc: string;
  viewDelicacies: string;

  // Pindi Vantalu
  pindiBadge: string;
  pindiTitle: string;
  pindiSubtitle: string;
  searchPlaceholder: string;
  filterAll: string;
  filterSweets: string;
  filterSavories: string;
  filterMillets: string;
  showingItems: string;
  noProductsFound: string;
  noProductsDesc: string;
  clearFilter: string;
  standardPackNotice: string;
  askOnWhatsapp: string;
  addToOrder: string;
  addedToOrder: string;
  flyerPriceConfirmed: string;
  traditionalSweet: string;
  crispySnack: string;

  // Biryani Section
  biryaniBadge: string;
  biryaniTitle: string;
  biryaniSubtitle: string;
  eachPackIncludes: string;
  sideRaita: string;
  sideSalan: string;
  sideOnionLemon: string;
  sideEggs: string;
  servingGuideTitle: string;
  serving1kg: string;
  serving1_5kg: string;
  serving2_5kg: string;
  selectPortion: string;
  rateConfirmedWhatsapp: string;
  portionDisclaimer: string;
  listed1kg: string;
  per1kg: string;

  // Pickles Section
  picklesBadge: string;
  picklesTitle: string;
  picklesSubtitle: string;
  strictMinOrder: string;
  rateLabel: string;
  minOrderTag: string;
  selectKgStepper: string;

  // Delivery Guidelines
  freshnessGuaranteed: string;
  deliveryTitle: string;
  deliverySubtitle: string;
  card1Title: string;
  card1Desc: string;
  card1Biryani: string;
  card1Pindi: string;
  card1Footer: string;
  card2Title: string;
  card2Desc: string;
  card2Pickup: string;
  card2Address: string;
  card2Footer: string;
  card3Title: string;
  card3Desc: string;
  card3Ghee: string;
  card3Clean: string;
  card3Footer: string;

  // About Section
  aboutBadge: string;
  aboutTitle: string;
  aboutQuote: string;
  aboutP1: string;
  aboutP2: string;
  aboutTag1: string;
  aboutTag2: string;
  aboutTag3: string;
  aboutSpotlightTitle: string;
  aboutSpotlightDesc: string;
  val1Title: string;
  val1Desc: string;
  val2Title: string;
  val2Desc: string;
  val3Title: string;
  val3Desc: string;
  val4Title: string;
  val4Desc: string;
  val5Title: string;
  val5Desc: string;
  val6Title: string;
  val6Desc: string;

  // Cart Drawer & Checkout Form
  cartTitle: string;
  emptyCartTitle: string;
  emptyCartDesc: string;
  exploreMenuBtn: string;
  itemsSelected: string;
  confirmedSubtotal: string;
  unconfirmedNotice: string;
  customerDetailsTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  addressLabel: string;
  addressPlaceholder: string;
  dateLabel: string;
  datePlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
  validationName: string;
  validationPhone: string;
  validationAddress: string;
  sendWhatsappOrder: string;
  clearCart: string;
  continueShopping: string;
  orderNoticeFooter: string;

  // Footer
  footerDesc: string;
  footerQuickLinks: string;
  footerContactTitle: string;
  footerLocationTitle: string;
  footerNoticeTitle: string;
  footerNoticeDesc: string;
  footerCopyright: string;
  backToTop: string;

  // Floating button
  chatOnWhatsapp: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    navHome: 'Home',
    navPindiVantalu: 'Pindi Vantalu',
    navBiryani: 'Biryani',
    navPickles: 'Pickles',
    navAboutUs: 'About Us',
    navDeliveryContact: 'Delivery & Contact',
    navOrderNow: 'Order Now',
    topMicroBar: 'Homemade • Healthy • Heartfelt | Made with Love, Served with Joy',
    whatsappOrders: 'WhatsApp Orders:',
    cartButton: 'Cart',
    openMenu: 'Open main menu',
    closeMenu: 'Close menu',
    selectLanguage: 'Language',

    exactTeluguTagline: 'సంప్రదాయ రుచి.. ఇంటి వంట ప్రేమ..',
    homemadeGoodness: '100% Homemade Goodness',
    heroHeadline1: 'Tradition You Can Taste.',
    heroHeadline2: 'Love in Every Bite.',
    heroDescription:
      'Discover authentic homemade Pindi Vantalu, flavorful Hyderabadi-style biryani, and traditional pickles prepared with care at VaishHari Kitchens.',
    trustSmallBatch: 'Small Batch Home Preparation',
    trustPureGhee: 'Pure Desi Ghee & Spices',
    trustMadeWithLove: 'Made with Love',
    exploreMenu: 'Explore Full Menu',
    whatsappOrderBtn: 'WhatsApp Order: 9440048979',
    orderNoticeHero: 'Order 1–2 days in advance for fresh preparation',
    kitchenHero: 'Kitchen: Marina Skies Tower 1, Flat 212',
    authenticDumBadge: 'Authentic Dum Cooking',
    pureGheeBadge: 'Pure Ghee Delicacies',
    heroImageTitle: 'Hyderabadi Dum Biryani & Pindi Vantalu',
    heroImageSubtitle: 'Made fresh to order with hand-selected ingredients and time-honored recipes',

    trustTraditionalTasteTitle: 'Traditional Taste',
    trustTraditionalTasteDesc: 'Authentic heritage recipes',
    trustHomemadeCareTitle: 'Homemade with Care',
    trustHomemadeCareDesc: 'Made with love in home kitchen',
    trustQualityIngredientsTitle: 'Quality Ingredients',
    trustQualityIngredientsDesc: 'Pure ghee, zero preservatives',
    trustHomeDeliveryTitle: 'Home Delivery Available',
    trustHomeDeliveryDesc: 'Delivered fresh on schedule',

    curatedCollection: 'Curated Menu Collection',
    exploreByCategory: 'Explore by Category',
    categoryIntro:
      'Prepared fresh in small batches using traditional recipes, pure desi ghee, and hand-selected spices.',
    catSweetsTitle: 'Traditional Sweets',
    catSweetsCount: '9 Specialties',
    catSweetsDesc: 'Golden Gavvalu, Ghee Laddus & Ariselu',
    catSavoriesTitle: 'Crispy Snacks',
    catSavoriesCount: '9 Specialties',
    catSavoriesDesc: 'Murukulu, Sakinalu & Spiced Mixtures',
    catMilletsTitle: 'Millet Specials',
    catMilletsCount: 'Wholesome & Pure',
    catMilletsDesc: 'Multi-Millet & Bellam Sunnundalu',
    catBiryaniTitle: 'Hyderabadi Biryani',
    catBiryaniCount: '5 Dum Varieties',
    catBiryaniDesc: 'Slow-Cooked Basmati with Salan & Raita',
    catPicklesTitle: 'Homemade Pickles',
    catPicklesCount: 'Non-Veg Delicacy',
    catPicklesDesc: 'Spicy Chicken & Mutton Pickles (1 KG)',
    viewDelicacies: 'View Delicacies',

    pindiBadge: '100% Homemade • Authentic Taste',
    pindiTitle: 'Traditional Pindi Vantalu',
    pindiSubtitle:
      'Handcrafted Telugu sweets and savory snacks made with pure desi ghee, jaggery, and time-honored traditional techniques.',
    searchPlaceholder: 'Search sweet or savory pindi vantalu...',
    filterAll: 'All (18)',
    filterSweets: 'Traditional Sweets (9)',
    filterSavories: 'Crispy Snacks (9)',
    filterMillets: 'Healthy Millets (2)',
    showingItems: 'Showing {count} specialties',
    noProductsFound: 'No snacks or sweets found',
    noProductsDesc: "Try searching for a different item name like 'Gavvalu', 'Laddu', or 'Murukulu'.",
    clearFilter: 'Clear Search Filter',
    standardPackNotice: 'Standard Pack (Confirm Weight with Kitchen)',
    askOnWhatsapp: 'Ask on WhatsApp',
    addToOrder: 'Add to Order',
    addedToOrder: 'Added to Order!',
    flyerPriceConfirmed: 'Flyer listed rate',
    traditionalSweet: 'Traditional Sweet',
    crispySnack: 'Crispy Snack',

    biryaniBadge: 'Fresh • Homemade • Delicious',
    biryaniTitle: 'Hyderabadi-Style Biryani',
    biryaniSubtitle:
      'Slow-cooked with premium long-grain basmati rice, aromatic spices, and traditional dum sealing. Listed prices are for 1 kg packs.',
    eachPackIncludes: 'Each Biryani Pack Includes:',
    sideRaita: 'Cooling Raita',
    sideSalan: 'Mirchi Ka Salan',
    sideOnionLemon: 'Fresh Onion & Lemon Wedges',
    sideEggs: 'Boiled Eggs (Dum Specials)',
    servingGuideTitle: 'Approximate Serving Guide:',
    serving1kg: '1 KG serves 3–4 members',
    serving1_5kg: '1.5 KG serves 4–6 members',
    serving2_5kg: '2.5 KG serves 6–10 members',
    selectPortion: 'Select Available Quantity:',
    rateConfirmedWhatsapp: 'Rate confirmed via WhatsApp',
    portionDisclaimer: '* Unlisted larger quantities: Final total will be verified by kitchen on WhatsApp.',
    listed1kg: 'Listed: 1 KG',
    per1kg: '/ 1 kg',

    picklesBadge: 'Authentic • Spicy • Homemade',
    picklesTitle: 'Traditional Non-Veg Pickles',
    picklesSubtitle:
      'Slow-cooked tender meats infused with hand-pounded spices, ginger-garlic paste, and pure cold-pressed sesame oil. Preservative-free homemade perfection.',
    strictMinOrder: 'Strict Minimum Order Requirement: 1 KG per pickle variety',
    rateLabel: 'Rate:',
    minOrderTag: 'Min. Order: 1 KG',
    selectKgStepper: 'Select quantity in kilograms (min. 1 KG)',

    freshnessGuaranteed: 'Freshness Guaranteed',
    deliveryTitle: 'Delivery & Ordering Guidelines',
    deliverySubtitle:
      'To ensure highest culinary quality and traditional taste, each item is freshly prepared specifically upon receiving your order.',
    card1Title: 'Advance Notice Required',
    card1Desc:
      'Because we prepare all delicacies at home from scratch with fresh ingredients, please place orders in advance:',
    card1Biryani: 'Biryani Orders: 1–2 days in advance',
    card1Pindi: 'Pindi Vantalu Orders: 2 days in advance',
    card1Footer: 'Delivered freshly cooked on the scheduled day.',
    card2Title: 'Home Delivery Available',
    card2Desc:
      'Doorstep delivery is available across Hyderabad through trusted courier & delivery partners. Delivery charges are calculated based on actual distance.',
    card2Pickup: 'Self-Pickup Available:',
    card2Address: 'Marina Skies Tower 1, Flat 212',
    card2Footer: 'Direct delivery right to your doorstep.',
    card3Title: 'Hygiene & Pure Ingredients',
    card3Desc:
      'Every delicacy is crafted with the utmost cleanliness, pure quality ingredients, and traditional family standards:',
    card3Ghee: '100% Pure Desi Ghee & cold-pressed oils',
    card3Clean: 'Zero artificial preservatives or food colors',
    card3Footer: 'Prepared in a clean, hygienic home kitchen environment.',

    aboutBadge: 'Our Kitchen Story',
    aboutTitle: 'About VaishHari Kitchens',
    aboutQuote: '“Made with Love, Served with Joy”',
    aboutP1:
      'VaishHari Kitchens is a dedicated homemade food business created to bring back the nostalgic, uncompromised flavors of heirloom Indian kitchens. We specialize in handcrafted traditional Pindi Vantalu, rich Hyderabadi-style biryani, and artisanal chicken & mutton pickles.',
    aboutP2:
      'In a world of factory-produced sweets and commercial cloud kitchens, every single recipe at VaishHari Kitchens is prepared in small batches using premium natural ingredients, authentic regional spices, and pure desi ghee—cooked with the same heartfelt care we put into feeding our own family.',
    aboutTag1: '100% Homemade',
    aboutTag2: 'Zero Preservatives',
    aboutTag3: 'Prepared Fresh on Order',
    aboutSpotlightTitle: 'Made with Pure Love',
    aboutSpotlightDesc: 'Small-batch home cooking rooted in Andhra and Telangana traditions.',
    val1Title: 'Homemade with Care',
    val1Desc: 'Cooked in a personal home environment with family dedication and uncompromising attention.',
    val2Title: 'Quality Ingredients',
    val2Desc: 'Crafted strictly with pure cow ghee, unadulterated jaggery, and selected spices.',
    val3Title: 'Traditional Taste',
    val3Desc: 'Authentic, heirloom Andhra and Telangana culinary heritage handed down through generations.',
    val4Title: 'Hygienic & Safe',
    val4Desc: 'Prepared in a sanitized, spotlessly clean kitchen following strict home hygiene standards.',
    val5Title: 'Freshly Made on Order',
    val5Desc: 'No pre-made old stock. Every item is cooked and packed fresh for your scheduled delivery.',
    val6Title: 'Perfect for All Occasions',
    val6Desc: 'Festivals, family reunions, celebrations, weekend feasts, and memorable gifting.',

    cartTitle: 'Your Order Cart',
    emptyCartTitle: 'Your cart is currently empty',
    emptyCartDesc:
      'Explore our homemade Pindi Vantalu, Hyderabadi Biryani, and traditional Pickles to start your fresh order.',
    exploreMenuBtn: 'Explore Our Menu',
    itemsSelected: '{count} Delicacies Selected',
    confirmedSubtotal: 'Confirmed Items Subtotal:',
    unconfirmedNotice:
      '* Additional items (Pindi Vantalu / custom quantities) will have final weights & rates confirmed by kitchen via WhatsApp.',
    customerDetailsTitle: 'Customer Details for WhatsApp Order',
    nameLabel: 'Your Full Name *',
    namePlaceholder: 'e.g., Rajesh Sharma',
    phoneLabel: 'Contact Mobile Number *',
    phonePlaceholder: '10-digit mobile number',
    addressLabel: 'Delivery Address *',
    addressPlaceholder: 'Flat / House No., Apartment name, Area, Hyderabad',
    dateLabel: 'Preferred Delivery Date & Time',
    datePlaceholder: 'e.g., Tomorrow evening / Oct 29th',
    notesLabel: 'Special Instructions (Optional)',
    notesPlaceholder: 'e.g., Less spicy, festive packing, deliver after 5 PM...',
    validationName: 'Please enter your name.',
    validationPhone: 'Please enter a valid 10-digit mobile number.',
    validationAddress: 'Please provide your delivery address.',
    sendWhatsappOrder: 'Send Order on WhatsApp',
    clearCart: 'Clear Cart',
    continueShopping: 'Continue Browsing Menu',
    orderNoticeFooter:
      'Your order will be sent directly to VaishHari Kitchens on WhatsApp (9440048979). We confirm availability and prepare everything fresh for you!',

    footerDesc:
      'Authentic Indian homemade delicacies. Traditional Pindi Vantalu, Hyderabadi Dum Biryani, and spiced meat pickles prepared with pure ingredients.',
    footerQuickLinks: 'Quick Links',
    footerContactTitle: 'Contact for Orders',
    footerLocationTitle: 'Kitchen Location',
    footerNoticeTitle: 'Advance Notice Required',
    footerNoticeDesc:
      'Order 1–2 days prior for Biryani and 2 days prior for Pindi Vantalu so we can source fresh ingredients and prepare to order.',
    footerCopyright: '© 2026 VaishHari Kitchens. All rights reserved.',
    backToTop: 'Back to Top',

    chatOnWhatsapp: 'Chat on WhatsApp',
  },

  te: {
    navHome: 'హోమ్',
    navPindiVantalu: 'పిండి వంటలు',
    navBiryani: 'బిర్యానీ',
    navPickles: 'పచ్చళ్ళు',
    navAboutUs: 'మా గురించి',
    navDeliveryContact: 'డెలివరీ & కాంటాక్ట్',
    navOrderNow: 'ఆర్డర్ చేయండి',
    topMicroBar: 'ఇంటి రుచి • స్వచ్ఛమైన ఆరోగ్యం • హృదయపూర్వకమైన ప్రేమ | ప్రేమతో తయారీ, సంతోషంతో వడ్డన',
    whatsappOrders: 'వాట్సాప్ ఆర్డర్లు:',
    cartButton: 'కార్ట్',
    openMenu: 'మెనూ తెరవండి',
    closeMenu: 'మెనూ మూసివేయండి',
    selectLanguage: 'భాష',

    exactTeluguTagline: 'సంప్రదాయ రుచి.. ఇంటి వంట ప్రేమ..',
    homemadeGoodness: '100% ఇంటి వంట మధురం',
    heroHeadline1: 'రుచిలోనే సంప్రదాయం.',
    heroHeadline2: 'ప్రతి ముద్దలో ప్రేమ.',
    heroDescription:
      'వైష్‌హరి కిచెన్స్ వద్ద స్వచ్ఛమైన దేశీ నెయ్యి, సంప్రదాయ పద్ధతులతో తాజాగా తయారుచేసిన నోరూరించే పిండి వంటలు, హైదరాబాదీ దమ్ బిర్యానీ మరియు నాటు పచ్చళ్ళు ఆస్వాదించండి.',
    trustSmallBatch: 'ఇంటి వద్దే కొద్ది పరిమాణంలో తయారీ',
    trustPureGhee: 'స్వచ్ఛమైన దేశీ నెయ్యి & నాణ్యమైన మసాలాలు',
    trustMadeWithLove: 'హృదయపూర్వకమైన ప్రేమతో',
    exploreMenu: 'మొత్తం మెనూ చూడండి',
    whatsappOrderBtn: 'వాట్సాప్ ఆర్డర్: 9440048979',
    orderNoticeHero: 'తాజా తయారీ కోసం 1–2 రోజుల ముందుగానే ఆర్డర్ చేయండి',
    kitchenHero: 'కిచెన్: మెరీనా స్కైస్ టవర్ 1, ఫ్లాట్ 212',
    authenticDumBadge: 'అసలైన దమ్ వంటకం',
    pureGheeBadge: 'స్వచ్ఛమైన నెయ్యి పిండివంటలు',
    heroImageTitle: 'హైదరాబాదీ దమ్ బిర్యానీ & సంప్రదాయ పిండి వంటలు',
    heroImageSubtitle: 'మీ ఆర్డర్ వచ్చిన తర్వాత మాత్రమే స్వచ్ఛమైన పదార్థాలతో తాజాగా తయారుచేయబడును',

    trustTraditionalTasteTitle: 'సంప్రదాయ రుచి',
    trustTraditionalTasteDesc: 'తరతరాల అసలైన పద్ధతులు',
    trustHomemadeCareTitle: 'ఇంటి వంట సంరక్షణ',
    trustHomemadeCareDesc: 'స్వయంగా ఇంట్లోనే ప్రేమతో వంట',
    trustQualityIngredientsTitle: 'నాణ్యమైన పదార్థాలు',
    trustQualityIngredientsDesc: 'స్వచ్ఛమైన నెయ్యి, ప్రిజర్వేటివ్స్ లేవు',
    trustHomeDeliveryTitle: 'హోమ్ డెలివరీ కలదు',
    trustHomeDeliveryDesc: 'సమయానికి వేడిగా డెలివరీ',

    curatedCollection: 'రుచికరమైన మెనూ సేకరణ',
    exploreByCategory: 'విభాగాల వారీగా చూడండి',
    categoryIntro:
      'స్వచ్ఛమైన దేశీ ఆవు నెయ్యి, ఆర్గానిక్ బెల్లం, తరతరాల ఇంటి వంట పద్ధతులతో తాజాగా తయారుచేయబడినవి.',
    catSweetsTitle: 'తీపి పిండి వంటలు',
    catSweetsCount: '9 రకాలు',
    catSweetsDesc: 'బంగారు గవ్వలు, నెయ్యి లడ్డులు & అరిసెలు',
    catSavoriesTitle: 'కారం పిండి వంటలు',
    catSavoriesCount: '9 రకాలు',
    catSavoriesDesc: 'మురుకులు, సకినాలు & మిక్చర్',
    catMilletsTitle: 'మిల్లెట్ స్పెషల్స్',
    catMilletsCount: 'ఆరోగ్యకరం & స్వచ్ఛం',
    catMilletsDesc: 'మల్టీ-మిల్లెట్ & బెల్లం సున్నుండలు',
    catBiryaniTitle: 'హైదరాబాదీ బిర్యానీ',
    catBiryaniCount: '5 దమ్ రకాలు',
    catBiryaniDesc: 'సాలన్ & రైతాతో బాస్మతీ బియ్యం వంటకం',
    catPicklesTitle: 'నాటు పచ్చళ్ళు',
    catPicklesCount: 'నాన్‌వెజ్ స్పెషల్',
    catPicklesDesc: 'ఘాటైన చికెన్ & మటన్ పచ్చళ్ళు (1 కేజీ)',
    viewDelicacies: 'రుచులు చూడండి',

    pindiBadge: '100% ఇంటి వంట • అచ్చమైన తెలుగు రుచి',
    pindiTitle: 'సంప్రదాయ పిండి వంటలు',
    pindiSubtitle:
      'స్వచ్ఛమైన దేశీ నెయ్యి, నాణ్యమైన బెల్లం, సాంప్రదాయ పద్ధతులతో చేతితో ప్రేమగా చేసిన పసందైన వంటలు.',
    searchPlaceholder: 'పిండి వంటలను శోధించండి (ఉదా: గవ్వలు, లడ్డు, మురుకులు)...',
    filterAll: 'అన్నీ (18)',
    filterSweets: 'తీపి వంటలు (9)',
    filterSavories: 'కారం వంటలు (9)',
    filterMillets: 'మిల్లెట్స్ (2)',
    showingItems: '{count} రకాల వంటలు అందుబాటులో ఉన్నాయి',
    noProductsFound: 'ఎలాంటి పిండి వంటలు లభించలేదు',
    noProductsDesc: "దయచేసి వేరే పేరుతో వెతకండి (ఉదాహరణకు: 'గవ్వలు', 'సున్నుండలు', 'మురుకులు').",
    clearFilter: 'ఫిల్టర్ తొలగించండి',
    standardPackNotice: 'స్టాండర్డ్ ప్యాక్ (బరువు వివరాలు వాట్సాప్‌లో తెలపబడును)',
    askOnWhatsapp: 'వాట్సాప్‌లో సంప్రదించండి',
    addToOrder: 'ఆర్డర్‌కు జోడించండి',
    addedToOrder: 'ఆర్డర్‌లో చేరింది!',
    flyerPriceConfirmed: 'పోస్టర్ ధర',
    traditionalSweet: 'తీపి వంటకం',
    crispySnack: 'కారం వంటకం',

    biryaniBadge: 'తాజా • ఇంటి వంట • అద్భుతమైన రుచి',
    biryaniTitle: 'హైదరాబాదీ దమ్ బిర్యానీ',
    biryaniSubtitle:
      'ప్రీమియం బాస్మతీ బియ్యం, సుగంధ ద్రవ్యాలతో సాంప్రదాయ దమ్ పద్ధతిలో వండినది. ధరలు 1 కేజీ ప్యాక్‌కు ఇవ్వబడ్డాయి.',
    eachPackIncludes: 'ప్రతి బిర్యానీ ప్యాక్‌తో ఉచితంగా లభించునవి:',
    sideRaita: 'చల్లని రైతా (పెరుగు పచ్చడి)',
    sideSalan: 'ఘాటైన మిర్చి కా సాలన్',
    sideOnionLemon: 'తాజా ఉల్లిపాయ ముక్కలు & నిమ్మకాయ',
    sideEggs: 'ఉడికించిన కోడిగుడ్లు (స్పెషల్)',
    servingGuideTitle: 'సుమారుగా సరిపోయే పరిమాణం:',
    serving1kg: '1 కేజీ — 3 నుండి 4 మందికి సరిపోతుంది',
    serving1_5kg: '1.5 కేజీ — 4 నుండి 6 మందికి సరిపోతుంది',
    serving2_5kg: '2.5 కేజీ — 6 నుండి 10 మందికి సరిపోతుంది',
    selectPortion: 'పరిమాణాన్ని ఎంచుకోండి:',
    rateConfirmedWhatsapp: 'ధర వాట్సాప్‌లో నిర్ధారించబడును',
    portionDisclaimer: '* పెద్ద పరిమాణాల తుది ధర కిచెన్ ద్వారా వాట్సాప్‌లో నిర్ధారించబడును.',
    listed1kg: 'జాబితా: 1 కేజీ',
    per1kg: '/ 1 కేజీ',

    picklesBadge: 'అసలైన • ఘాటైన • నిల్వ పచ్చళ్ళు',
    picklesTitle: 'సంప్రదాయ నాన్‌వెజ్ పచ్చళ్ళు',
    picklesSubtitle:
      'లేత మాంసం ముక్కలు, రోట్లో దంచిన మసాలాలు, స్వచ్ఛమైన గానుగ నూనెతో చేసిన సంప్రదాయ పచ్చళ్ళు. ఎలాంటి రసాయనాలు లేవు.',
    strictMinOrder: 'ముఖ్య గమనిక: ప్రతి పచ్చడి కనీస ఆర్డర్ 1 కేజీ మాత్రమే',
    rateLabel: 'ధర:',
    minOrderTag: 'కనీసం 1 కేజీ ఆర్డర్',
    selectKgStepper: 'కేజీలలో పరిమాణం ఎంచుకోండి (కనీసం 1 కేజీ)',

    freshnessGuaranteed: 'తాజాదనానికి మా హామీ',
    deliveryTitle: 'డెలివరీ & ఆర్డర్ నియమాలు',
    deliverySubtitle:
      'అత్యుత్తమ నాణ్యత, సాంప్రదాయ రుచి అందించడానికి ఆర్డర్ వచ్చిన తర్వాత మాత్రమే స్వచ్ఛంగా తయారుచేస్తాము.',
    card1Title: 'ముందస్తు ఆర్డర్ సమయం',
    card1Desc: 'ఇంట్లోనే స్వయంగా పరిశుభ్రంగా తయారుచేయడం వలన ముందుగానే ఆర్డర్ ఇవ్వవలసిందిగా కోరుచున్నాము:',
    card1Biryani: 'బిర్యానీ ఆర్డర్లు: 1–2 రోజుల ముందుగా',
    card1Pindi: 'పిండి వంటల ఆర్డర్లు: 2 రోజుల ముందుగా',
    card1Footer: 'నిర్ణయించిన రోజున వేడిగా, తాజాగా అందించబడును.',
    card2Title: 'హోమ్ డెలివరీ కలదు',
    card2Desc:
      'హైదరాబాద్ నగరమంతటా నమ్మకమైన డెలివరీ సేవల ద్వారా ఇంటి వద్దకే పంపబడును. దూరానికి తగినట్లు నామమాత్రపు ఛార్జీలు ఉంటాయి.',
    card2Pickup: 'స్వయంగా వచ్చి తీసుకునే సదుపాయం:',
    card2Address: 'మెరీనా స్కైస్ టవర్ 1, ఫ్లాట్ 212',
    card2Footer: 'మీ ఇంటి వద్దకే భద్రంగా చేరుస్తాము.',
    card3Title: 'పరిశుభ్రత & స్వచ్ఛమైన పదార్థాలు',
    card3Desc: 'ప్రతి వంటకం అత్యంత పరిశుభ్రమైన వాతావరణంలో, గృహ పద్ధతుల్లో చేయబడును:',
    card3Ghee: '100% స్వచ్ఛమైన దేశీ ఆవు నెయ్యి',
    card3Clean: 'కృత్రిమ రంగులు, ప్రిజర్వేటివ్స్ పూర్తిగా నిషేధం',
    card3Footer: 'ఇంటి వంటశాల పరిశుభ్రతతో తయారుచేయబడినవి.',

    aboutBadge: 'మా కిచెన్ కథ',
    aboutTitle: 'వైష్‌హరి కిచెన్స్ గురించి',
    aboutQuote: '“ప్రేమతో తయారీ, సంతోషంతో వడ్డన”',
    aboutP1:
      'వైష్‌హరి కిచెన్స్ పూర్వపు కాలపు అమ్మమ్మల చేతి వంటల మధురానుభూతిని తిరిగి అందించాలనే లక్ష్యంతో ప్రారంభమైన స్వచ్ఛమైన హోమ్‌మేడ్ కిచెన్. ఆంధ్ర, తెలంగాణ సంప్రదాయ పిండి వంటలు, అసలైన హైదరాబాదీ బిర్యానీ మరియు నోరూరించే నాన్‌వెజ్ పచ్చళ్ళ తయారీలో మేము ప్రసిద్ధి.',
    aboutP2:
      'కల్తీలు, ఫ్యాక్టరీ ఆహారాలు ఎక్కువగా ఉన్న నేటి రోజుల్లో, మా కుటుంబానికి వండినట్లే అత్యంత శ్రద్ధతో, స్వచ్ఛమైన నెయ్యి, అసలైన మసాలాలతో కొద్ది పరిమాణంలో ప్రతి వంటకాన్ని సిద్ధం చేస్తాము.',
    aboutTag1: '100% ఇంటి వంట',
    aboutTag2: 'ప్రిజర్వేటివ్స్ లేవు',
    aboutTag3: 'ఆర్డర్ మేరకు మాత్రమే తాజా తయారీ',
    aboutSpotlightTitle: 'స్వచ్ఛమైన ప్రేమతో తయారీ',
    aboutSpotlightDesc: 'తెలుగు సంస్కృతి, సంప్రదాయాలు ఉట్టిపడే స్వచ్ఛమైన ఇంటి రుచులు.',
    val1Title: 'ఇంటి వంట సంరక్షణ',
    val1Desc: 'కుటుంబ సభ్యుల ఆరోగ్యంపై ఉండే శ్రద్ధతోనే ప్రతి వంటకాన్ని తయారుచేస్తాము.',
    val2Title: 'నాణ్యమైన పదార్థాలు',
    val2Desc: 'స్వచ్ఛమైన ఆవు నెయ్యి, నాటు బెల్లం, ఎంపిక చేసిన నాణ్యమైన దినుసులు మాత్రమే వాడతాము.',
    val3Title: 'సంప్రదాయ రుచి',
    val3Desc: 'తరతరాలుగా వస్తున్న ప్రాచీన తెలుగు వంటల పద్ధతులను పాటిస్తాము.',
    val4Title: 'పరిశుభ్రత & భద్రత',
    val4Desc: 'అత్యున్నత గృహ పరిశుభ్రతా ప్రమాణాలను నిరంతరం పాటిస్తాము.',
    val5Title: 'ఎప్పటికప్పుడు తాజా తయారీ',
    val5Desc: 'పాత నిల్వలు ఉండవు. ఆర్డర్ తీసుకున్న తర్వాతే తాజాగా వండుతాము.',
    val6Title: 'అన్ని శుభకార్యాలకు ఉత్తమం',
    val6Desc: 'పండుగలు, వేడుకలు, పుట్టినరోజులు మరియు బంధువులకు పంపడానికి అనువైన ప్యాకింగ్.',

    cartTitle: 'మీ ఆర్డర్ కార్ట్',
    emptyCartTitle: 'కార్ట్‌లో ప్రస్తుతం ఏమీ లేవు',
    emptyCartDesc:
      'మా పిండి వంటలు, హైదరాబాదీ బిర్యానీ మరియు నాటు పచ్చళ్ళ మెనూ చూసి మీ ఆర్డర్‌ను ప్రారంభించండి.',
    exploreMenuBtn: 'మెనూ చూడండి',
    itemsSelected: '{count} రకాల వంటకాలు ఎంపికయ్యాయి',
    confirmedSubtotal: 'ధర ఖరారైన వస్తువుల మొత్తం:',
    unconfirmedNotice:
      '* పిండి వంటలు లేదా ఇతర ప్రత్యేక ఆర్డర్ల బరువు మరియు ఖచ్చితమైన ధర కిచెన్ ద్వారా వాట్సాప్‌లో నిర్ధారించబడును.',
    customerDetailsTitle: 'వాట్సాప్ ఆర్డర్ కోసం మీ వివరాలు',
    nameLabel: 'మీ పూర్తి పేరు *',
    namePlaceholder: 'ఉదా: రాజేష్ శర్మ',
    phoneLabel: 'మొబైల్ ఫోన్ నంబర్ *',
    phonePlaceholder: '10 అంకెల మొబైల్ నంబర్',
    addressLabel: 'డెలివరీ చిరునామా *',
    addressPlaceholder: 'ఫ్లాట్ / హౌస్ నెం., అపార్ట్‌మెంట్ పేరు, ప్రాంతం, హైదరాబాద్',
    dateLabel: 'కావలసిన తేదీ మరియు సమయం',
    datePlaceholder: 'ఉదా: రేపు సాయంత్రం / అక్టోబర్ 29',
    notesLabel: 'ప్రత్యేక సూచనలు (ఐచ్ఛికం)',
    notesPlaceholder: 'ఉదా: కారం తక్కువగా, గిఫ్ట్ ప్యాకింగ్ కావాలి...',
    validationName: 'దయచేసి మీ పేరును నమోదు చేయండి.',
    validationPhone: 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.',
    validationAddress: 'దయచేసి మీ పూర్తి డెలివరీ చిరునామాను నమోదు చేయండి.',
    sendWhatsappOrder: 'వాట్సాప్‌లో ఆర్డర్ పంపండి',
    clearCart: 'కార్ట్ క్లియర్ చేయండి',
    continueShopping: 'ఇంకా మెనూ చూడండి',
    orderNoticeFooter:
      'మీ ఆర్డర్ నేరుగా వైష్‌హరి కిచెన్స్ వాట్సాప్ (9440048979) కు పంపబడుతుంది. మేము పరిశీలించి తాజాగా తయారుచేస్తాము!',

    footerDesc:
      'స్వచ్ఛమైన సంప్రదాయ పిండి వంటలు, హైదరాబాదీ దమ్ బిర్యానీ మరియు నోరూరించే నాటు పచ్చళ్ళు.',
    footerQuickLinks: 'త్వరిత లింకులు',
    footerContactTitle: 'ఆర్డర్ల కోసం సంప్రదించండి',
    footerLocationTitle: 'కిచెన్ చిరునామా',
    footerNoticeTitle: 'ముందస్తు ఆర్డర్ గమనిక',
    footerNoticeDesc:
      'బిర్యానీకి 1-2 రోజుల ముందు, పిండి వంటలకు 2 రోజుల ముందుగా ఆర్డర్ చేయండి.',
    footerCopyright: '© 2026 వైష్‌హరి కిచెన్స్. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.',
    backToTop: 'పైకి వెళ్ళండి',

    chatOnWhatsapp: 'వాట్సాప్‌లో మాట్లాడండి',
  },

  hi: {
    navHome: 'होम',
    navPindiVantalu: 'पिंडी वंटालु (पारंपरिक स्नैक्स)',
    navBiryani: 'दम बिरयानी',
    navPickles: 'पारंपरिक आचार',
    navAboutUs: 'हमारे बारे में',
    navDeliveryContact: 'डिलीवरी और संपर्क',
    navOrderNow: 'ऑर्डर करें',
    topMicroBar: 'घर का स्वाद • पौष्टिक स्वास्थ्य • दिल से बनाया गया | प्यार से बनाया, खुशी से परोसा',
    whatsappOrders: 'व्हाट्सएप ऑर्डर्स:',
    cartButton: 'कार्ट',
    openMenu: 'मेन्यू खोलें',
    closeMenu: 'मेन्यू बंद करें',
    selectLanguage: 'भाषा',

    exactTeluguTagline: 'సంప్రదాయ రుచి.. ఇంటి వంట ప్రేమ..',
    homemadeGoodness: '100% घर का बना शुद्ध स्वाद',
    heroHeadline1: 'परंपरा जो आप महसूस करें.',
    heroHeadline2: 'हर निवाले में प्यार.',
    heroDescription:
      'वैष्णहरी किचन्स में शुद्ध देसी घी और पारंपरिक मसालों से प्यार से बनाए गए आंध्र-तेलंगाना स्नैक्स, हैदराबादी दम बिरयानी और स्वादिष्ट आचार का आनंद लें।',
    trustSmallBatch: 'घर पर सीमित मात्रा में ताज़ा तैयारी',
    trustPureGhee: 'शुद्ध देसी घी और प्रामाणिक मसाले',
    trustMadeWithLove: 'दिल से बनाया गया',
    exploreMenu: 'पूरा मेन्यू देखें',
    whatsappOrderBtn: 'व्हाट्सएप ऑर्डर: 9440048979',
    orderNoticeHero: 'ताज़ा तैयारी के लिए 1-2 दिन पहले ऑर्डर करें',
    kitchenHero: 'किचन: मरीना स्काइज़ टॉवर 1, फ़्लैट 212',
    authenticDumBadge: 'असली दम कुकिंग',
    pureGheeBadge: 'शुद्ध देसी घी के व्यंजन',
    heroImageTitle: 'हैदराबादी दम बिरयानी और पारंपरिक स्नैक्स',
    heroImageSubtitle: 'आपके ऑर्डर पर ताज़े और शुद्ध प्राकृतिक सामग्रियों से तैयार किया जाता है',

    trustTraditionalTasteTitle: 'पारंपरिक स्वाद',
    trustTraditionalTasteDesc: 'पीढ़ियों पुरानी प्रामाणिक विधियां',
    trustHomemadeCareTitle: 'घर जैसा प्यार और स्वच्छता',
    trustHomemadeCareDesc: 'घरेलू किचन में स्वच्छ तैयारी',
    trustQualityIngredientsTitle: 'उच्च गुणवत्ता की सामग्रियां',
    trustQualityIngredientsDesc: 'शुद्ध देसी घी, शून्य प्रिजर्वेटिव',
    trustHomeDeliveryTitle: 'होम डिलीवरी उपलब्ध',
    trustHomeDeliveryDesc: 'निर्धारित समय पर ताज़ा डिलीवरी',

    curatedCollection: 'विशेष मेन्यू संग्रह',
    exploreByCategory: 'श्रेणी के अनुसार देखें',
    categoryIntro:
      'शुद्ध देसी घी, ऑर्गेनिक गुड़ और चुनिंदा भारतीय मसालों से घर पर ताज़ा तैयार किए गए व्यंजन।',
    catSweetsTitle: 'पारंपरिक मिठाइयाँ',
    catSweetsCount: '9 स्वादिष्ट किस्में',
    catSweetsDesc: 'मीठी गव्वलु, देसी घी के लड्डू और अरिसेलु',
    catSavoriesTitle: 'कुरकुरे नमकीन स्नैक्स',
    catSavoriesCount: '9 किस्में',
    catSavoriesDesc: 'मुरुगुलु/चकली, सकिनालु और दक्षिण भारतीय मिक्सचर',
    catMilletsTitle: 'मिलेट स्पेशल (बाजरा/रागी)',
    catMilletsCount: 'पौष्टिक और स्वास्थ्यवर्धक',
    catMilletsDesc: 'मल्टी-मिलेट और गुड़ के सुन्नुंडालु',
    catBiryaniTitle: 'हैदराबादी दम बिरयानी',
    catBiryaniCount: '5 दम किस्में',
    catBiryaniDesc: 'धीमी आंच पर पकी बासमती चावल, सालन और रायते के साथ',
    catPicklesTitle: 'घर का बना आचार',
    catPicklesCount: 'नॉन-वेज स्पेशल',
    catPicklesDesc: 'तीखा चिकन और मटन आचार (1 किलो पैक)',
    viewDelicacies: 'व्यंजन देखें',

    pindiBadge: '100% होममेड • असली पारंपरिक स्वाद',
    pindiTitle: 'पारंपरिक पिंडी वंटालु (स्नैक्स और मिठाइयाँ)',
    pindiSubtitle:
      'शुद्ध देसी गाय के घी, पारंपरिक गुड़ और हस्तनिर्मित तकनीकों से तैयार आंध्र व तेलंगाना के प्रसिद्ध व्यंजन।',
    searchPlaceholder: 'मिठाई या नमकीन खोजें (जैसे: गव्वलु, लड्डू, चकली)...',
    filterAll: 'सभी (18)',
    filterSweets: 'पारंपरिक मिठाइयाँ (9)',
    filterSavories: 'कुरकुरे नमकीन (9)',
    filterMillets: 'मिलेट्स (2)',
    showingItems: '{count} पारंपरिक व्यंजन उपलब्ध हैं',
    noProductsFound: 'कोई व्यंजन नहीं मिला',
    noProductsDesc: "कृपया अन्य नाम से खोजें (जैसे: 'गव्वलु', 'लड्डू', या 'मुरुगुलु')।",
    clearFilter: 'फ़िल्टर हटाएं',
    standardPackNotice: 'मानक पैक (वजन व कीमत व्हाट्सएप पर कन्फर्म होगी)',
    askOnWhatsapp: 'व्हाट्सएप पर पूछें',
    addToOrder: 'ऑर्डर में जोड़ें',
    addedToOrder: 'ऑर्डर में जोड़ा गया!',
    flyerPriceConfirmed: 'पोस्टर की पुष्टि दर',
    traditionalSweet: 'पारंपरिक मिठाई',
    crispySnack: 'कुरकुरा नमकीन',

    biryaniBadge: 'ताज़ा • घर का बना • लज़ीज़',
    biryaniTitle: 'हैदराबादी दम बिरयानी',
    biryaniSubtitle:
      'प्रीमियम लंबे दाने वाले बासमती चावल और खुशबूदार मसालों से दम सीलिंग के साथ तैयार। कीमतें 1 किलो पैक के लिए हैं।',
    eachPackIncludes: 'हर बिरयानी पैक के साथ शामिल है:',
    sideRaita: 'ताज़ा रायता',
    sideSalan: 'स्वादिष्ट मिर्ची का सालन',
    sideOnionLemon: 'कटा हुआ प्याज और नींबू',
    sideEggs: 'उबले हुए अंडे (दम स्पेशल)',
    servingGuideTitle: 'मात्रा और सर्विंग गाइड:',
    serving1kg: '1 किलो — 3 से 4 लोगों के लिए पर्याप्त',
    serving1_5kg: '1.5 किलो — 4 से 6 लोगों के लिए पर्याप्त',
    serving2_5kg: '2.5 किलो — 6 से 10 लोगों के लिए पर्याप्त',
    selectPortion: 'उपलब्ध मात्रा चुनें:',
    rateConfirmedWhatsapp: 'कीमत व्हाट्सएप पर कन्फर्म होगी',
    portionDisclaimer: '* बड़ी मात्रा की अंतिम कीमत किचन द्वारा व्हाट्सएप पर कन्फर्म की जाएगी।',
    listed1kg: 'सूचीबद्ध: 1 किलो',
    per1kg: '/ 1 किलो',

    picklesBadge: 'प्रामाणिक • मसालेदार • होममेड',
    picklesTitle: 'पारंपरिक नॉन-वेज आचार',
    picklesSubtitle:
      'नरम मीट के टुकड़े, कुटे हुए साबुत मसाले और शुद्ध तिल के तेल से धीमी आंच पर पकाया गया प्रामाणिक आचार। बिना किसी प्रिजर्वेटिव के।',
    strictMinOrder: 'सख्त नियम: प्रति आचार किस्म न्यूनतम ऑर्डर 1 किलो अनिवार्य है',
    rateLabel: 'मूल्य:',
    minOrderTag: 'न्यूनतम 1 किलो ऑर्डर',
    selectKgStepper: 'किलोग्राम में मात्रा चुनें (न्यूनतम 1 किलो)',

    freshnessGuaranteed: 'ताज़गी की पक्की गारंटी',
    deliveryTitle: 'डिलीवरी और ऑर्डर संबंधी नियम',
    deliverySubtitle:
      'उच्चतम स्वाद और प्रामाणिक गुणवत्ता सुनिश्चित करने के लिए हर व्यंजन केवल आपके ऑर्डर प्राप्त होने पर ताज़ा बनाया जाता है।',
    card1Title: 'अग्रिम सूचना आवश्यक',
    card1Desc:
      'क्योंकि हम सभी व्यंजन घर पर ताज़ी सामग्रियों से तैयार करते हैं, कृपया पहले से ऑर्डर करें:',
    card1Biryani: 'बिरयानी ऑर्डर्स: 1-2 दिन पहले',
    card1Pindi: 'पिंडी वंटालु ऑर्डर्स: 2 दिन पहले',
    card1Footer: 'तय तारीख पर ताज़ा बनाकर डिलीवर किया जाएगा।',
    card2Title: 'होम डिलीवरी उपलब्ध',
    card2Desc:
      'हैदराबाद में विश्वसनीय कूरियर पार्टनर्स के ज़रिए डोरस्टेप डिलीवरी उपलब्ध है। वास्तविक दूरी के अनुसार शुल्क लागू होगा।',
    card2Pickup: 'स्वयं पिकअप सुविधा:',
    card2Address: 'मरीना स्काइज़ टॉवर 1, फ़्लैट 212',
    card2Footer: 'सुरक्षित रूप से आपके घर तक डिलीवरी।',
    card3Title: 'स्वच्छता और शुद्ध सामग्रियां',
    card3Desc:
      'हर व्यंजन सख्त घरेलू स्वच्छता मानकों और शुद्ध सामग्रियों से तैयार किया जाता है:',
    card3Ghee: '100% शुद्ध गाय का देसी घी और शुद्ध तेल',
    card3Clean: 'शून्य मिलावट और कोई रासायनिक प्रिजर्वेटिव नहीं',
    card3Footer: 'अत्यंत स्वच्छ घरेलू वातावरण में तैयार।',

    aboutBadge: 'हमारे किचन की कहानी',
    aboutTitle: 'वैष्णहरी किचन्स के बारे में',
    aboutQuote: '“प्यार से बनाया, खुशी से परोसा”',
    aboutP1:
      'वैष्णहरी किचन्स एक समर्पित होममेड किचन है जो भारतीय घरों के पारंपरिक, भूले-बिसरे प्रामाणिक स्वादों को वापस लाने के उद्देश्य से शुरू हुआ है। हम हस्तनिर्मित पिंडी वंटालु, प्रामाणिक हैदराबादी बिरयानी और नॉन-वेज आचार में विशेषज्ञ हैं।',
    aboutP2:
      'आज के रेडीमेड और व्यावसायिक दौर में, हम अपने परिवार की तरह ही पूरी निष्ठा और प्यार के साथ शुद्ध देसी घी व प्राकृतिक मसालों से सीमित मात्रा में ताज़ा भोजन तैयार करते हैं।',
    aboutTag1: '100% घर का बना',
    aboutTag2: 'शून्य प्रिजर्वेटिव',
    aboutTag3: 'ऑर्डर पर बिल्कुल ताज़ा',
    aboutSpotlightTitle: 'सच्चे प्यार से तैयार',
    aboutSpotlightDesc: 'आंध्र और तेलंगाना की पाक परंपराओं में रचे-बसे घरेलू व्यंजन।',
    val1Title: 'घर जैसी देखभाल',
    val1Desc: 'पारिवारिक समर्पण और विशेष ध्यान के साथ घरेलू परिवेश में पकाया जाता है।',
    val2Title: 'शुद्ध सामग्री',
    val2Desc: 'केवल शुद्ध देसी घी, प्राकृतिक गुड़ और चुने हुए मसालों का उपयोग।',
    val3Title: 'पारंपरिक स्वाद',
    val3Desc: 'पीढ़ियों से चली आ रही प्रामाणिक भारतीय रेसिपीज़।',
    val4Title: 'स्वच्छ और सुरक्षित',
    val4Desc: 'सख्त घरेलू स्वच्छता मानकों का पालन करते हुए स्वच्छ किचन में तैयार।',
    val5Title: 'ऑर्डर पर ताज़ा निर्माण',
    val5Desc: 'कोई पुराना स्टॉक नहीं। हर आइटम आपके शेड्यूल के अनुसार ताज़ा बनता है।',
    val6Title: 'सभी शुभ अवसरों के लिए उत्तम',
    val6Desc: 'त्योहार, पारिवारिक मिलन, वीकेंड दावत और अपनों को उपहार देने के लिए श्रेष्ठ।',

    cartTitle: 'आपका ऑर्डर कार्ट',
    emptyCartTitle: 'आपकी कार्ट अभी खाली है',
    emptyCartDesc:
      'हमारे स्वादिष्ट पारंपरिक पिंडी वंटालु, हैदराबादी बिरयानी और आचार देखें और अपना ऑर्डर शुरू करें।',
    exploreMenuBtn: 'मेन्यू देखें',
    itemsSelected: '{count} व्यंजन चुने गए',
    confirmedSubtotal: 'पुष्ट वस्तुओं का उप-कुल:',
    unconfirmedNotice:
      '* पिंडी वंटालु व विशेष मात्राओं का अंतिम वजन और कुल राशि व्हाट्सएप पर किचन द्वारा कन्फर्म की जाएगी।',
    customerDetailsTitle: 'व्हाट्सएप ऑर्डर के लिए ग्राहक विवरण',
    nameLabel: 'आपका पूरा नाम *',
    namePlaceholder: 'उदा: राजेश शर्मा',
    phoneLabel: 'संपर्क मोबाइल नंबर *',
    phonePlaceholder: '10 अंकों का मोबाइल नंबर',
    addressLabel: 'डिलीवरी का पूरा पता *',
    addressPlaceholder: 'फ़्लैट / मकान नं., अपार्टमेंट, क्षेत्र, हैदराबाद',
    dateLabel: 'पसंदीदा डिलीवरी तारीख व समय',
    datePlaceholder: 'उदा: कल शाम / 29 अक्टूबर',
    notesLabel: 'विशेष निर्देश (वैकल्पिक)',
    notesPlaceholder: 'उदा: कम तीखा, गिफ्ट पैकिंग, शाम 5 बजे के बाद डिलीवरी...',
    validationName: 'कृपया अपना नाम दर्ज करें।',
    validationPhone: 'कृपया मान्य 10 अंकों का मोबाइल नंबर दर्ज करें।',
    validationAddress: 'कृपया अपना पूरा डिलीवरी पता दर्ज करें।',
    sendWhatsappOrder: 'व्हाट्सएप पर ऑर्डर भेजें',
    clearCart: 'कार्ट खाली करें',
    continueShopping: 'और मेन्यू देखें',
    orderNoticeFooter:
      'आपका ऑर्डर सीधे वैष्णहरी किचन्स के व्हाट्सएप (9440048979) पर भेजा जाएगा। हम पुष्टि करके ताज़ा तैयार करेंगे!',

    footerDesc:
      'प्रामाणिक भारतीय घरेलू व्यंजन। शुद्ध सामग्रियों से बने पारंपरिक पिंडी वंटालु, हैदराबादी दम बिरयानी और स्वादिष्ट आचार।',
    footerQuickLinks: 'त्वरित लिंक',
    footerContactTitle: 'ऑर्डर के लिए संपर्क',
    footerLocationTitle: 'किचन का स्थान',
    footerNoticeTitle: 'अग्रिम सूचना संबंधी नियम',
    footerNoticeDesc:
      'बिरयानी के लिए 1-2 दिन और पिंडी वंटालु के लिए 2 दिन पहले ऑर्डर करें ताकि हम ताज़ा सामग्री जुटाकर तैयार कर सकें।',
    footerCopyright: '© 2026 वैष्णहरी किचन्स. सर्वाधिकार सुरक्षित।',
    backToTop: 'ऊपर जाएं',

    chatOnWhatsapp: 'व्हाट्सएप पर चैट करें',
  },
};
