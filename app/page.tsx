import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import ThreeDBackground from "@/components/three-d-background"

export default function Home() {
  return (
    <main>
      <ThreeDBackground />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
    </main>
  )
}
