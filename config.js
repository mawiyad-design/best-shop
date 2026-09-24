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
  email: "supermarketbestshop@gmail.com",

  address: {
    en: "Al-Gardens, Al-Baraka District, next to Al-Omariya Schools, Amman, Jordan",
    ar: "الجاردنز - حي البركة - بجانب مدارس العمرية، عمّان، الأردن",
  },
  mapQuery: "Best Shop Supermarket, Al-Gardens, Amman, Jordan",

  social: {
    facebook: "https://www.facebook.com/supermarketbestshop/",
    instagram: "https://www.instagram.com/supermarketbestshop/",
    talabat: "https://www.talabat.com/jordan/best-shop-supermarket",
  },

  currency: { en: "JD", ar: "د.أ" },

  // Opening hours. Day numbers: 0 = Sunday ... 6 = Saturday. 24-hour times.
  // A closing time earlier than the opening time means "after midnight".
  // TODO: confirm Friday and Saturday hours.
  hours: [
    { day: 6, open: "07:00", close: "02:00" },
    { day: 0, open: "07:00", close: "02:00" },
    { day: 1, open: "07:00", close: "02:00" },
    { day: 2, open: "07:00", close: "02:00" },
    { day: 3, open: "07:00", close: "02:00" },
    { day: 4, open: "07:00", close: "02:00" },
    { day: 5, open: "07:00", close: "02:00" },
  ],

  // Weekly offers. TODO: replace these SAMPLE offers with your real ones each week.
  offers: [
    { icon: "beef",      en: "Fresh Chicken (1 kg)",   ar: "دجاج طازج (1 كغ)",     was: 2.95, now: 2.49 },
    { icon: "milk",      en: "Fresh Milk (2 L)",       ar: "حليب طازج (2 لتر)",    was: 1.95, now: 1.65 },
    { icon: "salad",     en: "Fresh Salads (500 g)",   ar: "سلطات طازجة (500 غ)",  was: 1.50, now: 1.20 },
    { icon: "utensils",      en: "White Cheese (1 kg)",    ar: "جبنة بيضاء (1 كغ)",    was: 4.50, now: 3.75 },
    { icon: "coffee",    en: "Arabic Coffee (500 g)",  ar: "قهوة عربية (500 غ)",   was: 6.00, now: 4.95 },
    { icon: "apple",     en: "Red Apples (1 kg)",      ar: "تفاح أحمر (1 كغ)",     was: 1.25, now: 0.99 },
  ],
};
