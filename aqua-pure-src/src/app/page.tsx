import ScrollProgress from "./components/ui/ScrollProgress";
import HeroRouter from "./components/sections/HeroRouter";
import TrustIndicators from "./components/sections/TrustIndicators";
import ROProcessStepper from "./components/sections/ROProcessStepper";
import ProductCategoriesHub from "./components/sections/ProductCategoriesHub";
// import CaseStudies from "./components/sections/CaseStudies";
import AMCPanel from "./components/sections/AMCPanel";
import IndustriesServed from "./components/sections/IndustriesServed";
import FinalCTA from "./components/sections/FinalCTA";
import DynamicSegmentedFAQ from "./components/sections/DynamicSegmentedFAQ";

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <HeroRouter />
      <TrustIndicators />
      <ProductCategoriesHub />
      <ROProcessStepper />
      <IndustriesServed />
      <AMCPanel />
      <DynamicSegmentedFAQ />
      <FinalCTA />
    </main>
  );
}
