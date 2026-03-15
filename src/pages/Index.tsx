import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PlansSection from "@/components/PlansSection";
import NutritionSection from "@/components/NutritionSection";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <HowItWorksSection />
      <PlansSection />
      <NutritionSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
