import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}