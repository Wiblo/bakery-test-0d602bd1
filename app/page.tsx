import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FaqSection } from "@/components/sections/faq/FaqSection"
import { businessInfo } from "@/lib/data/business-info"

export default function Home() {
  return (
    <>
      <HeroWithImage
        subtitle={businessInfo.tagline}
        title="Artisan Bakery in Johannesburg South"
        backgroundImage="https://images.unsplash.com/photo-1517433670267-08bbd4be890f"
        backgroundImageAlt="Fresh artisan breads and pastries from Golden Crust Bakery"
        ctaText="Order Now"
        ctaUrl={businessInfo.bookingUrl}
      />
      <FeaturedServices />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
      <FaqSection />
    </>
  )
}
