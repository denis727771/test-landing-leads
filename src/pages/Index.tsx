import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import ImageDivider from "@/components/ImageDivider";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TrendsSection from "@/components/TrendsSection";
import StorySection from "@/components/StorySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import servicesBg from "@/assets/services-bg.jpg";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ImageDivider src={servicesBg} alt="Luxury estate representing wealth preservation" />
    <AudienceSection />
    <ServicesSection />
    <AdvantagesSection />
    <TrendsSection />
    <StorySection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
