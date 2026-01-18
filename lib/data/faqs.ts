export interface FaqItem {
  id: string
  question: string
  answer: string
}

/**
 * Frequently Asked Questions
 * Update this array to modify FAQs shown on the site
 */
export const faqs: FaqItem[] = [
  {
    id: 'opening-hours',
    question: 'What are your opening hours?',
    answer:
      "We're open Monday to Friday from 6:00am to 6:00pm, Saturday from 6:00am to 4:00pm, and Sunday from 7:00am to 2:00pm. Our first batch of fresh breads is ready at opening time, and we bake croissants twice daily – at opening and again at midday.",
  },
  {
    id: 'custom-cakes',
    question: 'How far in advance should I order a custom cake?',
    answer:
      'For best results, we recommend ordering custom cakes at least 3-7 days in advance, depending on complexity. Wedding cakes and elaborate designs require 2-3 weeks notice. For simpler birthday cakes, 3-4 days is usually sufficient. Contact us to discuss your needs and we can advise on timing.',
  },
  {
    id: 'dietary-requirements',
    question: 'Do you offer gluten-free or vegan options?',
    answer:
      'Yes! We offer gluten-free bread and selected pastries daily. For custom cakes, we can create gluten-free, vegan, and dairy-free options with advance notice. Please let us know your dietary requirements when ordering so we can ensure your treats are both delicious and safe for you to enjoy.',
  },
  {
    id: 'ingredients',
    question: 'What makes your products different?',
    answer:
      "We use premium ingredients including European butter, organic stone-ground flours, and natural sourdough starters. Everything is made from scratch daily using traditional methods – no mixes, no artificial preservatives. Our sourdough starter is over 8 years old, and our croissants undergo a 3-day lamination process for those signature flaky layers.",
  },
  {
    id: 'wholesale',
    question: 'Do you supply restaurants or cafes?',
    answer:
      'Yes, we work with select restaurants, cafes, and corporate clients for wholesale orders. We can provide daily bread deliveries, event catering, and custom corporate gifts. Contact us to discuss your requirements and we can create a customized supply arrangement.',
  },
  {
    id: 'ordering',
    question: 'How do I place an order?',
    answer:
      'For custom cakes or large orders, you can WhatsApp us at +27 82 456 7890, call +27 11 123 4567, or email hello@goldencrust.co.za. For regular items, simply visit us during opening hours – we always have fresh breads, pastries, and treats available. No pre-order needed for our daily selection.',
  },
  {
    id: 'allergens',
    question: 'Do you have allergen information?',
    answer:
      'Yes, we can provide detailed allergen information for all our products. Common allergens in our bakery include wheat, dairy, eggs, and nuts. Please ask our staff about specific items, especially if you have severe allergies. We take food safety seriously and can guide you to suitable options.',
  },
  {
    id: 'fresh-guarantee',
    question: 'How long do your products stay fresh?',
    answer:
      'Our breads are best enjoyed within 2-3 days and can be frozen for up to 3 months. Pastries are best eaten the same day for optimal freshness. Custom cakes can be refrigerated for 3-4 days. We recommend storing bread in a paper bag at room temperature and pastries in an airtight container.',
  },
]

/**
 * Get all FAQs
 */
export function getAllFaqs(): FaqItem[] {
  return faqs
}

/**
 * Get a single FAQ by ID
 */
export function getFaqById(id: string): FaqItem | undefined {
  return faqs.find((faq) => faq.id === id)
}
