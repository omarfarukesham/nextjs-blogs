import Hero from "@/components/Hero";
import ProudPartnerSection from "@/components/Partner";
import BlogsPage from "./blogs/page";
import TestimonialPage from "@/components/Testimonial";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Hero />
      <ProudPartnerSection />
      <BlogsPage />
      <TestimonialPage />
      <ContactSection />
      <Footer />
     
    </div>
  );
}
