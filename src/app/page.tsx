import { HashRedirect } from '@/components/HashRedirect'
import { CursorGlow } from '@/components/CursorGlow'
import { UtmCapture } from '@/components/UtmCapture'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { LiveActivityBar } from '@/components/LiveActivityBar'
import { ClientLogos } from '@/components/ClientLogos'
import { HowItWorks } from '@/components/HowItWorks'
import { AppsCatalog } from '@/components/AppsCatalog'
import { RestaurantPersonas } from '@/components/RestaurantPersonas'
import { ADayWithEatCorp } from '@/components/ADayWithEatCorp'
import { ROICalculator } from '@/components/ROICalculator'
import { ConnectedStack } from '@/components/ConnectedStack'
import { Comparison } from '@/components/Comparison'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Stats } from '@/components/Stats'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'

export default function Home() {
  return (
    <main className="flex flex-col relative">
      <JsonLd />
      <HashRedirect />
      <CursorGlow />
      <UtmCapture />
      <Navigation />
      <Hero />
      <ClientLogos />
      <LiveActivityBar />
      <HowItWorks />
      <AppsCatalog />
      <Comparison />
      <RestaurantPersonas />
      <ADayWithEatCorp />
      <ConnectedStack />
      <ROICalculator />
      <Testimonials />
      <FAQ />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
