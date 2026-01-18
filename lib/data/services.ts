import { Croissant, Cake, Wheat, Cookie, ChefHat, CakeSlice } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  name: string
  description: string
  duration: string
  price: string
  image: string
  imageAlt: string
  icon: LucideIcon
  benefits?: string[]
  featured?: boolean
  // Full treatment details for dedicated pages
  shortDescription?: string
  fullDescription?: string
  idealFor?: string[]
}

/**
 * All services offered by the bakery
 * Update this array to add/modify products shown throughout the site
 */
export const services: Service[] = [
  {
    id: 'artisan-breads',
    slug: 'artisan-breads',
    name: 'Artisan Breads',
    description:
      'Traditional handcrafted breads made with premium flour, natural sourdough starters, and time-honored techniques. Baked fresh daily for the perfect crust and texture.',
    duration: 'Fresh daily',
    price: 'From R45',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    imageAlt: 'Fresh artisan sourdough bread loaves',
    icon: Wheat,
    benefits: [
      'Made with natural sourdough',
      'No artificial preservatives',
      'Fresh daily at 6am',
      'Variety of whole grain options',
    ],
    featured: true,
    shortDescription:
      'Handcrafted breads using traditional methods and premium ingredients',
    fullDescription:
      'Our artisan bread collection features traditional sourdough, whole wheat, seeded loaves, and specialty breads crafted with care each morning. Using natural fermentation and premium flours, we create breads with exceptional flavor, texture, and nutritional value.\n\nEach loaf is hand-shaped and baked to perfection in our stone deck ovens, ensuring a crispy golden crust and soft, aromatic interior. Available fresh every morning starting at 6am.',
    idealFor: [
      'Daily fresh bread',
      'Health-conscious eaters',
      'Sandwich lovers',
      'Toast enthusiasts',
      'Special dietary needs',
      'Gift baskets',
    ],
  },
  {
    id: 'french-pastries',
    slug: 'french-pastries',
    name: 'French Pastries',
    description:
      'Authentic French viennoiserie including buttery croissants, pain au chocolat, and delicate danishes made with imported European butter and traditional lamination techniques.',
    duration: 'Baked twice daily',
    price: 'From R25',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    imageAlt: 'Golden flaky croissants and French pastries',
    icon: Croissant,
    benefits: [
      'Made with European butter',
      'Traditional French techniques',
      'Light and flaky layers',
      'Fresh batches twice daily',
    ],
    featured: true,
    shortDescription:
      'Buttery, flaky pastries crafted using authentic French methods',
    fullDescription:
      'Our French pastry selection is a labor of love, featuring classic croissants, pain au chocolat, almond croissants, and seasonal fruit danishes. Each pastry undergoes a 3-day preparation process, with careful lamination creating the signature flaky layers.\n\nWe use only premium European butter and the finest ingredients to ensure authentic flavor and texture. Fresh batches are baked twice daily – at opening and again at midday – so you always enjoy them at their absolute best.',
    idealFor: [
      'Breakfast treats',
      'Coffee pairing',
      'Special occasions',
      'Client gifts',
      'Weekend indulgence',
      'French cuisine lovers',
    ],
  },
  {
    id: 'custom-cakes',
    slug: 'custom-cakes',
    name: 'Custom Cakes',
    description:
      'Bespoke celebration cakes designed and decorated to your specifications. From birthdays to weddings, we create stunning centerpieces that taste as amazing as they look.',
    duration: '3-7 days notice',
    price: 'From R450',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d',
    imageAlt: 'Beautiful custom decorated celebration cake',
    icon: Cake,
    benefits: [
      'Fully customizable designs',
      'Wide variety of flavors',
      'Professional decoration',
      'Consultation included',
    ],
    featured: true,
    shortDescription:
      'Personalized celebration cakes for every special occasion',
    fullDescription:
      'Transform your celebration with a custom cake designed just for you. Our talented decorators work with you to bring your vision to life, whether it\'s a classic tiered wedding cake, a whimsical children\'s birthday creation, or an elegant anniversary centerpiece.\n\nChoose from our signature flavors including chocolate, vanilla, red velvet, carrot, and seasonal specials. All cakes are made from scratch using premium ingredients, with options for dietary requirements including gluten-free and vegan. Book a consultation to discuss your design and tasting options.',
    idealFor: [
      'Birthdays',
      'Weddings',
      'Anniversaries',
      'Corporate events',
      'Baby showers',
      'Special celebrations',
    ],
  },
  {
    id: 'cookies-treats',
    slug: 'cookies-treats',
    name: 'Cookies & Treats',
    description:
      'Irresistible cookies, biscuits, and sweet treats baked fresh throughout the day. Perfect for snacking, gifting, or pairing with your afternoon coffee.',
    duration: 'Fresh daily',
    price: 'From R15',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    imageAlt: 'Variety of freshly baked cookies',
    icon: Cookie,
    benefits: [
      'Multiple varieties daily',
      'Made with real butter',
      'Perfect for sharing',
      'Gift box options',
    ],
    featured: true,
    shortDescription:
      'Freshly baked cookies and sweet treats for every craving',
    fullDescription:
      'Our cookie selection changes daily, featuring classics like chocolate chip, oatmeal raisin, and peanut butter, alongside seasonal specialties and creative new flavors. Each batch is made with real butter, premium chocolate, and quality ingredients for that perfect homemade taste.\n\nWe also offer brownies, blondies, rusks, and traditional South African treats. Available individually or in beautiful gift boxes, perfect for sharing or treating yourself.',
    idealFor: [
      'Afternoon tea',
      'Gift giving',
      'Office treats',
      'Lunchbox additions',
      'Coffee companions',
      'Sweet cravings',
    ],
  },
  {
    id: 'seasonal-specials',
    slug: 'seasonal-specials',
    name: 'Seasonal Specials',
    description:
      'Limited-time offerings featuring seasonal ingredients and festive favorites. From hot cross buns at Easter to traditional Christmas treats, celebrating the flavors of each season.',
    duration: 'Seasonal availability',
    price: 'Varies',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e',
    imageAlt: 'Seasonal baked goods and holiday treats',
    icon: ChefHat,
    benefits: [
      'Seasonal ingredients',
      'Traditional recipes',
      'Limited availability',
      'Festive celebrations',
    ],
    featured: false,
    shortDescription:
      'Special creations celebrating seasonal flavors and traditions',
    fullDescription:
      'Throughout the year, we craft special items that celebrate the seasons and South African traditions. Spring brings hot cross buns and simnel cake, summer features light fruit tarts, autumn showcases pumpkin treats, and winter warms hearts with traditional Christmas cakes and koeksisters.\n\nThese limited-time offerings use peak-season ingredients and time-honored recipes, often passed down through generations. Keep an eye on our social media for announcements about upcoming seasonal releases.',
    idealFor: [
      'Holiday celebrations',
      'Traditional treats',
      'Seasonal gifting',
      'Special occasions',
      'Cultural celebrations',
      'Limited editions',
    ],
  },
  {
    id: 'breakfast-goods',
    slug: 'breakfast-goods',
    name: 'Breakfast Goods',
    description:
      'Morning essentials including muffins, scones, breakfast breads, and savory items to start your day right. Fresh from the oven each morning.',
    duration: 'Fresh from 6am',
    price: 'From R30',
    image: 'https://images.unsplash.com/photo-1608198399988-841b00f931e7',
    imageAlt: 'Breakfast pastries and morning baked goods',
    icon: CakeSlice,
    benefits: [
      'Ready at opening',
      'Sweet and savory options',
      'Grab-and-go packaging',
      'Pair with our coffee',
    ],
    featured: false,
    shortDescription:
      'Morning favorites to kickstart your day with delicious energy',
    fullDescription:
      'Start your morning right with our breakfast selection, ready when we open at 6am. Choose from freshly baked muffins in varieties like blueberry, chocolate chip, and bran, alongside traditional scones, banana bread, and savory sausage rolls.\n\nAll breakfast items are made fresh each morning and available for takeaway, perfect for busy mornings or a leisurely breakfast at home. Pair with our freshly brewed coffee for the complete breakfast experience.',
    idealFor: [
      'Morning commuters',
      'Breakfast meetings',
      'Weekend brunch',
      'School lunchboxes',
      'Coffee pairing',
      'Quick breakfast',
    ],
  },
]

/**
 * Get all services
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get featured services only
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get a single service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get a single service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
