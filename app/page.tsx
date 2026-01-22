import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ClassesSection } from "@/components/classes-section";
import { GallerySection } from "@/components/gallery-section";
import { WorkshopsSection } from "@/components/workshops-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <GallerySection />
      <WorkshopsSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
