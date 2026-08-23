import { grading, excavation, landClearing, poolExcavation, materialHauling, americanWorksLlc1, yellowBuldozer } from "./serviceImages";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  gallery: GalleryPhoto[];
  intro: string;
  included: string[];
  whyUs: string;
  costText: string;
  faqs: ServiceFaq[];
}

export const services: ServiceData[] = [
  {
    slug: "grading-contractor",
    name: "Grading Services",
    h1: "Grading Contractor in Wittmann, AZ",
    title: "Grading Contractor in Wittmann, AZ | American Works, LLC",
    description: "Precision land grading and site leveling in Wittmann, AZ and the northwest Valley. GPS-guided, clean finish, backed by a 1-year warranty. Free estimates — call (623) 343-1123.",
    heroImage: grading,
    heroAlt: "Skid steer with auger performing site grading beside a metal building",
    gallery: [
      { src: grading, alt: "Skid steer with auger performing site grading beside a metal building" },
      { src: americanWorksLlc1, alt: "Freshly graded dirt lot with tire tracks and orchard treeline" },
    ],
    intro: "American Works, LLC provides GPS-guided grading and land leveling for homeowners and contractors in Wittmann, AZ and the surrounding northwest Valley. We handle landscape grading, site preparation, lot leveling, and drainage correction, and every job is backed by a 1-year warranty on the finished dirt work.",
    included: [
      "Landscape and yard grading",
      "New construction site preparation",
      "Lot leveling for driveways and pads",
      "Drainage grading to direct water away from structures",
      "Soil relocation and compaction",
      "Walkway and pathway base preparation",
    ],
    whyUs: "Grading is a precision trade — a quarter-inch of slope in the wrong direction can send water straight at a foundation instead of away from it. We lay out every grade with GPS equipment rather than eyeballing it, so the finished surface matches the plan, not an estimate. Customers consistently mention the same two things: the accuracy of the finished grade, and that we leave the site as clean as we found it.",
    costText: "Grading costs depend mainly on the size of the area, how much material needs to move, and how easy the site is to access with equipment. A small yard regrade is a different job than leveling a half-acre pad for new construction. We walk every site before quoting, so the number you get reflects your ground — not a generic rate.",
    faqs: [
      { q: "Why is grading important for construction and landscaping?", a: "Proper grading levels your land and directs water away from structures, preventing pooling, erosion, and long-term foundation damage. It's the step that turns a rough lot into a stable surface for driveways, pads, and landscaping." },
      { q: "How does landscape grading improve drainage?", a: "Grading reshapes the land so water flows away from your home or outbuildings instead of collecting against them. We plan the slope before we move any dirt, so drainage is correct from the first pass, not fixed after the fact." },
      { q: "Can grading fix an uneven or unstable yard?", a: "Yes. Uneven ground is one of the most common calls we get, especially after monsoon season washes out a yard or driveway. We regrade and compact the surface so it's level, stable, and shedding water correctly again." },
      { q: "Do you handle grading for RV pads and horse properties?", a: "Yes — RV pad and gate grading, and horse property leveling, are two of our most requested jobs in the Wittmann area. Ask about either when you call for your estimate." },
    ],
  },
  {
    slug: "excavation-company",
    name: "Excavation Services",
    h1: "Excavation Company in Wittmann, AZ",
    title: "Excavation Company in Wittmann, AZ | American Works, LLC",
    description: "Licensed excavation contractor in Wittmann, AZ. Septic and sewer digs, footing excavation, and site prep. GPS-guided, 1-year warranty. Call (623) 343-1123 for a free estimate.",
    heroImage: excavation,
    heroAlt: "Kubota excavator and two crew members working in a trench",
    gallery: [
      { src: excavation, alt: "Kubota excavator and two crew members working in a trench" },
      { src: yellowBuldozer, alt: "Yellow mini excavator on a fenced dirt lot mid-grade" },
    ],
    intro: "American Works, LLC is a licensed excavation company (ROC # 343361) serving Wittmann, AZ and the northwest Valley. We handle septic and sewer excavation, footing digs, and full site preparation for residential and light commercial construction, with every job backed by a 1-year warranty.",
    included: [
      "Septic tank and leach field excavation",
      "Sewer line trenching and installation prep",
      "Footing and foundation excavation",
      "New construction site preparation",
      "Utility trenching",
      "Rock and debris removal",
    ],
    whyUs: "A construction project only moves as fast as the ground underneath it is ready. We show up with the right equipment for the job — not a one-size-fits-all machine — and dig to the exact depth and layout your plans call for, whether that's a septic system, a footing line, or a full building pad. Customers hire us because we're on time, communicate along the way, and leave the site clean when we're done.",
    costText: "Excavation pricing depends on the depth and size of the dig, soil conditions, and how much material has to be hauled off versus reused on site. A septic excavation and a full building pad are priced very differently. We give you a written number after walking the site and reviewing your plans, not a phone quote.",
    faqs: [
      { q: "What is the purpose of excavation services?", a: "Excavation prepares land for construction, landscaping, and utility installation by removing soil, rock, or debris to create a solid foundation. Whether it's a full site dig or a single trench, professional excavation ensures safety and precision from the start." },
      { q: "What factors affect the cost of excavation?", a: "Project size, soil type, and site accessibility are the biggest factors. Rocky or caliche-heavy ground in parts of the northwest Valley can take longer to dig than plain soil, which affects the price." },
      { q: "Do you handle septic tank excavation?", a: "Yes. Septic and sewer excavation is one of our core services — we dig to the exact depth and layout your septic design requires, with GPS-guided precision so the tank and lines sit correctly the first time." },
      { q: "How deep can you excavate?", a: "Depth depends on the equipment and the job — tell us what your project needs (a footing, a septic system, a full basement dig) when you call, and we'll confirm we're equipped for it before we quote." },
    ],
  },
  {
    slug: "land-clearing-services",
    name: "Land / Brush Clearing",
    h1: "Land Clearing Services in Wittmann, AZ",
    title: "Land Clearing Services in Wittmann, AZ | American Works, LLC",
    description: "Land and brush clearing in Wittmann, AZ. Stump removal, brush clearance, and vegetation management for construction, agriculture, or fire prevention. Call (623) 343-1123.",
    heroImage: landClearing,
    heroAlt: "Finished graded pad cleared of brush in front of a metal shop building",
    gallery: [
      { src: landClearing, alt: "Finished graded pad cleared of brush in front of a metal shop building" },
    ],
    intro: "American Works, LLC clears land for construction, agricultural use, and fire prevention throughout Wittmann, AZ and the northwest Valley. We handle stump removal, brush clearance, and vegetation management, and leave the site clean and ready for what's next.",
    included: [
      "Stump grinding and removal",
      "Brush and shrub clearance",
      "Tree removal",
      "Vegetation management for fire-defensible space",
      "Site clean-up and debris hauling",
      "Land prep for new construction or agriculture",
    ],
    whyUs: "Overgrown land is one of the most common obstacles to starting a project in this part of Arizona — dense brush, mesquite, and old stumps can turn a simple build into a slow one. We clear efficiently and haul debris off site rather than leaving a mess for you to deal with, so your land is genuinely ready to build on, plant, or graze the day we finish.",
    costText: "Land clearing costs scale with the size of the area and how dense the vegetation is — clearing a few stumps is a different job than clearing a heavily brushed acre. We walk the property and give you a written estimate before any work starts.",
    faqs: [
      { q: "What does land clearing involve?", a: "Land clearing involves removing trees, shrubs, stumps, and debris to prepare a site for construction or agricultural use. Our stump removal and brush clearing services help create a clean, workable surface while minimizing environmental impact." },
      { q: "What are the benefits of brush clearing for fire prevention?", a: "Brush clearing reduces fire hazards by removing flammable vegetation. Our brush removal services create defensible space around properties, especially valuable in fire-prone parts of the northwest Valley." },
      { q: "What's included in your land clearing services?", a: "Tree and shrub removal, stump grinding, and debris hauling — a comprehensive approach that prepares your land for any project efficiently and leaves the site clean." },
      { q: "Can you clear land for horse properties or pastures?", a: "Yes — clearing and leveling horse properties is a job we do regularly in the Wittmann area, including after monsoon damage. Ask about it when you call." },
    ],
  },
  {
    slug: "pool-excavation-services",
    name: "Pool Excavation Services",
    h1: "Pool Excavation Services in Wittmann, AZ",
    title: "Pool Excavation Services in Wittmann, AZ | American Works, LLC",
    description: "Precision pool excavation in Wittmann, AZ, tailored to Arizona's clay-rich soils. Residential and commercial. GPS-guided layout, free estimates. Call (623) 343-1123.",
    heroImage: poolExcavation,
    heroAlt: "Excavated pool shell with rebar in place, ready for construction",
    gallery: [
      { src: poolExcavation, alt: "Excavated pool shell with rebar in place, ready for construction" },
    ],
    intro: "American Works, LLC provides pool excavation for residential and commercial projects in Wittmann, AZ and the northwest Valley. We dig to your pool design with GPS-guided precision, accounting for Arizona's clay-rich soils so the shell is properly shaped and supported before construction begins.",
    included: [
      "Site assessment and soil evaluation",
      "Precision pool layout to your design",
      "Pool shell digging and grading",
      "Residential pool excavation",
      "Commercial pool excavation",
      "Spoil removal and site clean-up",
    ],
    whyUs: "Pool excavation is more specialized than it looks — it requires understanding soil conditions, drainage, and how the surrounding ground will support the pool structure over time. Clay-rich soil, common around the northwest Valley, can shift if it isn't handled correctly during the dig. We inspect for underground utilities before we ever break ground, and manage water runoff and drainage throughout the excavation so the site stays stable for the crews who follow us.",
    costText: "Pool excavation pricing depends on the pool's size and design, soil conditions, and site access for equipment. We assess the site and your pool plans before quoting, since every design shapes the dig differently.",
    faqs: [
      { q: "What is pool excavation?", a: "Pool excavation is the first major step in pool construction — digging the space where the pool will be installed and preparing the area for further construction. It requires precision to ensure the pool is correctly shaped, placed, and supported." },
      { q: "How does pool excavation differ from standard excavation?", a: "Pool excavation requires precise measurements and techniques to shape the land according to the pool's design, with attention to soil conditions and drainage that standard excavation doesn't need to account for as closely." },
      { q: "How do you manage water runoff and drainage during excavation?", a: "We assess drainage before digging begins and shape the excavation to prevent water pooling, which could otherwise damage the pool shell or surrounding areas during construction." },
      { q: "How do you handle underground utilities near a pool dig?", a: "We always perform a thorough inspection for gas lines, electrical, and water pipes before excavating, to avoid hazards and keep the project on schedule." },
    ],
  },
  {
    slug: "material-hauling-services",
    name: "Material Hauling Services",
    h1: "Material Hauling Services in Wittmann, AZ",
    title: "Material Hauling Services in Wittmann, AZ | American Works, LLC",
    description: "Reliable dirt, rock, and debris hauling in Wittmann, AZ and the northwest Valley. Sized for projects large and small. Call (623) 343-1123 for a free estimate.",
    heroImage: materialHauling,
    heroAlt: "Truck bed loaded with excavated rock and dirt for material hauling",
    gallery: [
      { src: materialHauling, alt: "Truck bed loaded with excavated rock and dirt for material hauling" },
    ],
    intro: "American Works, LLC moves dirt, rock, gravel, and construction debris for projects throughout Wittmann, AZ and the northwest Valley. We size our equipment to the job, from a single yard cleanup to large-scale commercial hauls, and handle disposal in line with Arizona's material regulations.",
    included: [
      "Dirt and soil removal or delivery",
      "Rock and gravel hauling",
      "Construction debris removal",
      "Aggregate material delivery for new builds",
      "Large-scale commercial hauling",
      "Environmentally responsible disposal and recycling",
    ],
    whyUs: "Material hauling sounds simple until a load isn't secured properly or a truck can't handle the volume a job actually needs — both cause real delays. We run a fleet sized for the job in front of us, secure every load correctly, and follow Arizona's disposal and recycling requirements for construction debris rather than cutting corners on where it ends up.",
    costText: "Hauling costs depend on the volume of material, the type (dirt, rock, debris, aggregate), and the distance to the disposal or delivery site. We quote based on your specific load and schedule, not a flat per-truck rate.",
    faqs: [
      { q: "Why is material hauling essential for construction projects?", a: "Material hauling moves soil, gravel, or debris efficiently so your project stays on schedule and the site doesn't get cluttered with material waiting to be removed." },
      { q: "What steps do you take to ensure materials are secured during transport?", a: "We secure every load according to the material type and weight before it leaves the site, to prevent spills and keep both the roadway and your site safe." },
      { q: "Do you follow recycling or disposal guidelines for debris?", a: "Yes — Arizona has specific regulations around construction material disposal, and we follow them, recycling material where possible rather than defaulting to landfill." },
      { q: "Can you handle large-scale commercial hauling?", a: "Yes. We work with commercial contractors who need consistent, high-frequency hauling, not just single-load residential jobs — ask about capacity when you call." },
    ],
  },
];
