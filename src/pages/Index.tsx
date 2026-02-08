import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BackgroundSection from "@/components/BackgroundSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen">
    <HeroSection />
    <AboutSection />
    <BackgroundSection />
    <ProjectsSection />
    <QuoteSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
