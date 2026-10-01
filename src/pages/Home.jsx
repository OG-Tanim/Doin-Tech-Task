import "../styles.css";
import HeroSection from "../components/sections/HeroSection.jsx";
import FeaturedCategoriesSection from "../components/sections/FeaturedCategoriesSection.jsx";
import CourseCatalogSection from "../components/sections/CourseCatalogSection.jsx";
import LearningPathsSection from "../components/sections/LearningPathsSection.jsx";
import GrowthSection from "../components/sections/GrowthSection.jsx";
import CreatorCallToAction from "../components/sections/CreatorCallToAction.jsx";
import TestimonialsSection from "../components/sections/TestimonialsSection.jsx";
import SiteFooter from "../components/layout/SiteFooter.jsx";

export default function Home() {
  return (
    <div className="home-page relative mx-auto min-h-[6299px] w-full overflow-x-clip bg-[#ffffff]">
      <HeroSection />
      <FeaturedCategoriesSection />
      <CourseCatalogSection />
      <LearningPathsSection />
      <GrowthSection />
      <CreatorCallToAction />
      <TestimonialsSection />
      <SiteFooter />
    </div>
  );
}
