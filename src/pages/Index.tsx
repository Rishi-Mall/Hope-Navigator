import HeroSection from "@/components/home/HeroSection";
import CancerTypesSection from "@/components/home/CancerTypesSection";
import GlobalStatsSection from "@/components/home/GlobalStatsSection";
import IndiaStatsSection from "@/components/home/IndiaStatsSection";
import IndiaMapSection from "@/components/home/IndiaMapSection";
import SurvivorStoriesSection from "@/components/home/SurvivorStoriesSection";
import NewsSection from "@/components/home/NewsSection";
import DoctorsSection from "@/components/home/DoctorsSection";

const Index = () => (
  <main>
    <HeroSection />
    <CancerTypesSection />
    <GlobalStatsSection />
    <IndiaStatsSection />
    <IndiaMapSection />
    <SurvivorStoriesSection />
    <NewsSection />
    <DoctorsSection />
  </main>
);

export default Index;
