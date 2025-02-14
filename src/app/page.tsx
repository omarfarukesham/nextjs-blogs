import Hero from "@/components/Hero";
import ProudPartnerSection from "@/components/Partner";
import BlogsPage from "./blogs/page";
import TestimonialPage from "@/components/Testimonial";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Hero />
      <ProudPartnerSection />
      <BlogsPage />
      <SkillsSection />
      <TestimonialPage />
      <ContactSection />
      <Footer />
     
    </div>
  );
}
