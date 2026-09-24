// ============================================================
//  BEST SHOP — edit your store details here.
//  Everything on the website reads from this file.
//  Items marked TODO are placeholders: replace them before launch.
// ============================================================

window.SITE = {
  name: { en: "Best Shop", ar: "بست شوب" },

  // TODO: your real phone number, in international format (digits only for WhatsApp)
  phone: "+000 00 000 0000",
  whatsapp: "000000000000",

  // TODO: your real address
  address: {
    en: "Main Street, City Center",
    ar: "الشارع الرئيسي، وسط المدينة",
  },

  // TODO: what to search on Google Maps to find your shop (e.g. "Best Shop Supermarket, Amman")
  mapQuery: "",

  // TODO: currency shown next to prices
  currency: { en: "$", ar: "$" },

  // Opening hours. Day numbers: 0 = Sunday ... 6 = Saturday. Times are 24-hour.
  // TODO: set your real hours
  hours: [
    { day: 6, open: "08:00", close: "23:00" },
    { day: 0, open: "08:00", close: "23:00" },
    { day: 1, open: "08:00", close: "23:00" },
    { day: 2, open: "08:00", close: "23:00" },
    { day: 3, open: "08:00", close: "23:00" },
    { day: 4, open: "08:00", close: "23:00" },
    { day: 5, open: "14:00", close: "23:00" },
  ],

  // Weekly offers. TODO: replace with your real offers each week.
  offers: [
    { icon: "apple",  en: "Red Apples (1 kg)",       ar: "تفاح أحمر (١ كغ)",       was: 2.5, now: 1.75 },
    { icon: "milk",   en: "Fresh Milk (2 L)",        ar: "حليب طازج (٢ لتر)",      was: 3.2, now: 2.6 },
    { icon: "croissant", en: "Butter Croissants (6)", ar: "كرواسون بالزبدة (٦)",   was: 4.0, now: 2.99 },
    { icon: "beef",   en: "Chicken Breast (1 kg)",   ar: "صدر دجاج (١ كغ)",        was: 7.5, now: 5.9 },
    { icon: "coffee", en: "Ground Coffee (500 g)",   ar: "قهوة مطحونة (٥٠٠ غ)",    was: 9.0, now: 6.75 },
    { icon: "cup-soda", en: "Orange Juice (1 L)",    ar: "عصير برتقال (١ لتر)",    was: 2.8, now: 1.99 },
  ],
};
