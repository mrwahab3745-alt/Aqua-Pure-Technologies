import HeroRouter from "./components/sections/HeroRouter";
import TrustIndicators from "./components/sections/TrustIndicators";
import ProductCategoriesHub from "./components/sections/ProductCategoriesHub";
// import CaseStudies from "./components/sections/CaseStudies";
import AMCPanel from "./components/sections/AMCPanel";
import IndustriesServed from "./components/sections/IndustriesServed";
import SegmentedFAQ from "./components/sections/SegmentedFAQ";
import FinalCTA from "./components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <HeroRouter />
      <TrustIndicators />
      <ProductCategoriesHub />
      <IndustriesServed />
      <AMCPanel />
      <SegmentedFAQ />
      <FinalCTA />
    </main>
  );
}
