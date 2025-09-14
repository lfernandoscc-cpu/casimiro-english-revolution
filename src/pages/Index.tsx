import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import FernandoSection from "@/components/FernandoSection";
import FeaturedCourse from "@/components/FeaturedCourse";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <ContactForm />
        <FernandoSection />
        <FeaturedCourse />
      </main>
      <Footer />
    </div>
  );
};

export default Index;