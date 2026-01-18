export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'About Golden Crust Bakery',
  description:
    "Since 2015, Golden Crust Bakery has been serving Johannesburg South with artisan breads, French pastries, and custom cakes baked fresh daily. Our passion for traditional baking methods and commitment to quality ingredients has made us a beloved neighborhood destination for those who appreciate the art of exceptional baking.",
  image: 'https://images.unsplash.com/photo-1556910110-a5a63dfd393c',
  imageAlt: 'Baker kneading dough at Golden Crust Bakery',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'Our Story',
  paragraphs: [
    'Founded in 2015 in the heart of Mondeor, Golden Crust Bakery began with a simple mission: to bring authentic artisan baking to Johannesburg South. Our head baker, trained in traditional French baking techniques, combines old-world craftsmanship with a passion for innovation.',
    'Every morning at 3am, our team arrives to begin the day\'s work. From hand-shaping sourdough loaves to laminating croissant dough, we take pride in every step of the baking process. We source the finest ingredients – premium European butter, organic flours, and seasonal local produce – because we believe great baking starts with great ingredients.',
    'What sets us apart is our commitment to doing things the right way, not the easy way. Our sourdough starter has been nurtured for over 8 years, our croissants require a 3-day process, and our custom cakes are crafted with the same attention to detail whether they\'re for a small birthday or a grand wedding. We\'re not just a bakery – we\'re your neighborhood baking partner, here to make every day and every celebration a little more delicious.',
  ],
  image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f',
  imageAlt: 'Inside Golden Crust Bakery with fresh baked goods',
}
