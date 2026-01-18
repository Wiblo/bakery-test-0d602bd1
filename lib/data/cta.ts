export interface CTAContent {
  title: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
  backgroundImageAlt: string
}

/**
 * CTA (Call-to-Action) section content
 * Update this to modify the CTA section shown on the homepage
 */
export const ctaContent: CTAContent = {
  title: 'Craving Fresh Baked Goodness?',
  description:
    'Visit us in Mondeor for artisan breads, French pastries, and custom cakes baked fresh daily. Order your custom cake today or stop by to taste the difference that quality ingredients and traditional methods make.',
  ctaText: 'Order Now',
  ctaUrl: 'https://wa.me/27824567890?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order',
  backgroundImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
  backgroundImageAlt: 'Fresh artisan bread and pastries at Golden Crust Bakery',
}
