/**
 * Content taken from the shop's existing official website
 * (https://aquapuretechnology.com) and its company profile PDF.
 * Figures and testimonials are the shop's own statements: the owner should
 * confirm them before launch.
 */

export const STATS = [
  { value: 10000, suffix: "+", label: "Happy customers", decimals: 0 },
  { value: 50000, suffix: "+", label: "Litres purified daily", decimals: 0 },
  { value: 2500, suffix: "+", label: "RO plants installed", decimals: 0 },
  { value: 180, suffix: "+", label: "Corporate & commercial projects", decimals: 0 },
  { value: 4.9, suffix: "/5", label: "Customer rating", decimals: 1 },
] as const;

export const TICKER = [
  "Domestic RO Plant Installation for Homes & Apartments",
  "Industrial RO Systems for Factories & Manufacturing Units",
  "RO Water Plants for Schools, Colleges & Hospitals",
] as const;

// Wording lightly tidied for grammar; meaning unchanged.
export const TESTIMONIALS = [
  {
    name: "Kashif Sahil",
    text: "Best RO plant and service for anyone buying one for a water-selling shop, a home or an industry.",
  },
  {
    name: "Syed Naveed",
    text: "I started a drinking water plant near Azizabad, Arbab Ismail City. The team is always cooperative and provides excellent service.",
  },
  {
    name: "Waseeq Kazmi",
    text: "We installed their RO plant in Phulary Garden, Jhelum. It has worked perfectly for almost a year and their service after installation is very good.",
  },
  {
    name: "Imran Ali",
    text: "Aqua Pure Technology provided a commercial RO system for our factory. Installation was smooth and the team was highly professional.",
  },
  {
    name: "Ahmed Raza",
    text: "Very satisfied with the domestic RO plant. Clean water quality and fast after-sales service. Recommended for homes.",
  },
  {
    name: "Bilal Hussain",
    text: "Excellent filtration system and competitive pricing. Their support team responds quickly and gives complete technical guidance.",
  },
] as const;

export const PRODUCTS = [
  { id: "domestic-ro", name: "Domestic RO Plant", text: "Clean drinking water for houses, apartments and small offices.", href: "/products/domestic" },
  { id: "softener", name: "Water Softener Plant", text: "Reduces water hardness and scale build-up.", href: null },
  { id: "commercial-ro", name: "Commercial RO Plant", text: "For hotels, hospitals, schools, offices and malls.", href: "/products/commercial" },
  { id: "dm", name: "Demineralized Plant", text: "De-ionized water for process and industrial use.", href: null },
  { id: "domestic-softener", name: "Domestic Water Softener", text: "Softer water for taps, kettles and utensils at home.", href: null },
  { id: "treatment", name: "Water Treatment Plants", text: "Complete treatment plants built around your water.", href: null },
  { id: "uf", name: "Ultrafiltration Plant", text: "Removes bacteria and viruses with ultra-filtration membranes.", href: null },
  { id: "bottling", name: "Water Bottle Plant", text: "Purification, sterilization and filling for bottled water businesses.", href: null },
] as const;

// From the company profile PDF ("Field of Services: Equipment").
export const EQUIPMENT = [
  "Reverse osmosis systems",
  "Water softeners",
  "De-ionization plants",
  "De-alkalization plants",
  "Sand filters",
  "Activated carbon filters",
  "Iron removal filters",
  "Chlorination & de-chlorination plants",
  "UV sterilizers",
  "Ultra-filtration membranes",
  "Ozonators",
  "Chemical dosing stations & pumps",
  "Flow meters & pressure gauges",
  "Online pH and TDS meters",
  "Waste water recycling plants",
  "Mineral water & bottling plants",
  "Swimming pool filtration",
  "Filter media & ion-exchange resins",
  "Cartridges & accessories",
  "Water testing kits",
  "Stainless steel, mild steel & fibre glass fabrication",
] as const;

export const VALUES = [
  {
    title: "Our Values",
    text: "At AquaPure Technology we believe in quality, transparency and long-term customer trust. We focus on delivering dependable RO water treatment solutions with honest guidance, timely support and consistent after-sales service.",
  },
  {
    title: "Our Mission",
    text: "Our mission is to provide safe, clean and affordable Reverse Osmosis (RO) water solutions across Pakistan. We aim to improve water quality for homes, institutions and industries through advanced filtration technology and professional service.",
  },
  {
    title: "Our Vision",
    text: "Our vision is to become a leading and most trusted RO water treatment company in Pakistan, known for innovation, service excellence and sustainable water purification solutions.",
  },
] as const;

export const COMMITMENTS = [
  { title: "Free appointment", text: "Talk to an RO expert and get a free water test and system consultation." },
  { title: "Long-term efficiency", text: "Systems set up for proper flow rate, pressure balance and filtration efficiency." },
  { title: "Professional installation", text: "Pipeline setup, pressure calibration and testing by our team." },
] as const;

export const GENERAL_FAQS = [
  {
    id: "gq1",
    question: "What services does Aqua Pure Technology provide?",
    answer:
      "Complete water purification solutions including RO plants, drinking water systems and water filtration units, with installation, maintenance and after-sales support for residential, commercial and industrial use.",
  },
  {
    id: "gq2",
    question: "What is an RO plant?",
    answer:
      "A reverse osmosis (RO) plant pushes water through a membrane that removes dissolved salts, chemicals and bacteria, leaving clean water without the unpleasant taste and odor.",
  },
  {
    id: "gq3",
    question: "Do you offer RO solutions for homes and businesses?",
    answer:
      "Yes. We supply and install RO plants for homes and apartments, offices, schools, colleges, hospitals, factories and industrial units.",
  },
] as const;
