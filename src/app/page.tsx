import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 transform">
          <div className="h-[50rem] w-[50rem] rounded-full bg-primary/5 opacity-50 blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 transform">
          <div className="h-[50rem] w-[50rem] rounded-full bg-primary/5 opacity-50 blur-3xl" />
        </div>
      </div>

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
