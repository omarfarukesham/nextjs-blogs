import Hero from "@/components/Hero";
import ProudPartnerSection from "@/components/Partner";
import BlogsPage from "./blogs/page";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Hero />
      <ProudPartnerSection />
      <BlogsPage />
     
    </div>
  );
}
