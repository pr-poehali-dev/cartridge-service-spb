import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RefillSection from "@/components/RefillSection";
import RepairSection from "@/components/RepairSection";
import PriceSection from "@/components/PriceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RefillSection />
        <RepairSection />
        <PriceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
