export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the bakery
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Baked Fresh Daily',
    description:
      'Our doors open at 6am with fresh breads straight from the oven. We bake throughout the day to ensure you always get the freshest pastries, with croissants coming out warm at opening and again at midday. Nothing beats the aroma and taste of bread baked just hours ago.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    imageAlt: 'Fresh artisan bread being scored before baking',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Traditional Methods, Modern Quality',
    description:
      'We honor time-tested baking traditions while maintaining the highest standards of quality and food safety. Our sourdough cultures have been carefully maintained for years, our croissant lamination follows classical French techniques, and every recipe is refined to perfection using the best ingredients available.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    imageAlt: 'Baker folding croissant dough using traditional technique',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Custom Creations for Your Special Moments',
    description:
      'From birthday cakes to wedding centerpieces, we work closely with you to design custom cakes that reflect your vision and exceed your expectations. Our decorators combine artistry with craftsmanship to create show-stopping cakes that taste as incredible as they look. Book a consultation to discuss your dream cake.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d',
    imageAlt: 'Beautiful custom decorated celebration cake',
    imagePosition: 'right',
  },
]
