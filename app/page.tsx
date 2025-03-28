import { Hero } from "@/components/hero"
import { Ceremony } from "@/components/ceremony"
import { Dresscode } from "@/components/dresscode"
import { Gifts } from "@/components/gifts"
import { RsvpForm } from "@/components/rsvp-form"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { DownloadCard } from "@/components/download-card"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Hero />
      <div className="divider"></div>
      <Ceremony />
      <div className="divider"></div>
      <Dresscode />
      <div className="divider"></div>
      <Gifts />
      <div className="divider"></div>
      <DownloadCard />
      <div className="divider"></div>
      <RsvpForm />
      <Footer />
    </main>
  )
}

