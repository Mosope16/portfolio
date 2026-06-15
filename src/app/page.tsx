import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsSection from "@/components/SkillsSection";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <FeaturedProjects />
        <SkillsSection />
        <CurrentlyBuilding />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
