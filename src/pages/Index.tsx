import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BackgroundSection from "@/components/BackgroundSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen onComplete={handleComplete} />}</AnimatePresence>
      <motion.div
        className="bg-background min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <BackgroundSection />
        <ProjectsSection />
        <QuoteSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
