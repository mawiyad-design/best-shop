// ============================================================
//  BEST SHOP — edit your store details here.
//  Everything on the website reads from this file.
// ============================================================

window.SITE = {
  name: { en: "Best Shop", ar: "بست شوب" },
  tagline: { en: "Your favorite store", ar: "متجرك المفضّل" },

  phone: "+962 7 9158 0780",
  phoneLocal: "07 9158 0780",
  whatsapp: "962791580780",
  email: "bestshob516@gmail.com",

  address: {
    en: "Al-Gardens, Al-Baraka District, next to Al-Omariya Schools, Amman, Jordan",
    ar: "الجاردنز - حي البركة - بجانب مدارس العمرية، عمّان، الأردن",
  },
  mapQuery: "Best Shop Supermarket, Al-Gardens, Amman, Jordan",
  mapLatLng: "31.9893676,35.8855916",

  social: {
    facebook: "https://www.facebook.com/supermarketbestshop/",
    instagram: "https://www.instagram.com/supermarketbestshop/",
    talabat: "https://www.talabat.com/jordan/grocery/1104142/best-shop-tla-ali?aid=4894",
  },

  currency: { en: "JD", ar: "د.أ" },

  // Basket orders sent from the website (via WhatsApp) must reach this total.
  minOrder: 5,

  // CliQ instant bank transfer. The CliQ payment option appears in the basket
  // only when both alias and name are filled in.
  // TODO: add the store's CliQ alias and the account name customers will see.
  cliq: { alias: "", name: "" },

  // Opening hours. Day numbers: 0 = Sunday ... 6 = Saturday. 24-hour times.
  // A closing time earlier than the opening time means "after midnight".
  hours: [
    { day: 6, open: "07:00", close: "02:00" },
    { day: 0, open: "07:00", close: "02:00" },
    { day: 1, open: "07:00", close: "02:00" },
    { day: 2, open: "07:00", close: "02:00" },
    { day: 3, open: "07:00", close: "02:00" },
    { day: 4, open: "07:00", close: "02:00" },
    { day: 5, open: "10:00", close: "02:00" },
  ],

  // Weekly offers: poster image + name + price. Replace them whenever you have new posters.
  offers: [
    { img: "img/offers/mandi-rice.jpg",  en: "Mandi Basmati Rice, 4 kg",   ar: "أرز مندي، 4 كيلو",          price: 4.60 },
    { img: "img/offers/leeza-oil.jpg",   en: "Leeza Sunflower Oil, 1.5 L", ar: "زيت ليزا، 1.5 لتر",         price: 2.50 },
    { img: "img/offers/tayba-juice.jpg", en: "Tayba Juice, 1 L",           ar: "عصير طيبة، 1 لتر",          price: 0.59 },
    { img: "img/offers/tiger-rice.jpg",  en: "Tiger Premium Rice, 3 kg",   ar: "أرز تايجر الممتاز، 3 كيلو", price: 2.99 },
  ],
};
