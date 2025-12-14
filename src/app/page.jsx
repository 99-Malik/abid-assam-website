import AboutSection from "@/components/sections/AboutSection";
import MainBanner from "@/components/sections/MainBanner";
import OurServices from "@/components/sections/OurServices";
import ServiceDetails from "@/components/sections/ServiceDetails";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <MainBanner />
      <HowItWorksSection />
      <AboutSection />
      <OurServices />
      <WhyChooseUs />
      <ServiceDetails />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
