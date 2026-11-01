import ScrollProgress from "./components/ui/ScrollProgress";
import dynamic from "next/dynamic";
import HeroRouter from "./components/sections/HeroRouter";
import TrustIndicators from "./components/sections/TrustIndicators";
import ROProcessStepper from "./components/sections/ROProcessStepper";
import ProductCategoriesHub from "./components/sections/ProductCategoriesHub";
// import CaseStudies from "./components/sections/CaseStudies";
import AMCPanel from "./components/sections/AMCPanel";
import IndustriesServed from "./components/sections/IndustriesServed";
import FinalCTA from "./components/sections/FinalCTA";
import DynamicSegmentedFAQ from "./components/sections/DynamicSegmentedFAQ";

// Code-split the interactive blocks so they don't weigh on first paint.
const PurityCompare = dynamic(() => import("./components/sections/PurityCompare"));
const PlantAssembly = dynamic(() => import("./components/sections/PlantAssembly"));
const SavingsEstimator = dynamic(() => import("./components/sections/SavingsEstimator"));

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <HeroRouter />
      <TrustIndicators />
      <PurityCompare />
      <ProductCategoriesHub />
      <ROProcessStepper />
      <PlantAssembly />
      <SavingsEstimator />
      <IndustriesServed />
      <AMCPanel />
      <DynamicSegmentedFAQ />
      <FinalCTA />
    </main>
  );
}
