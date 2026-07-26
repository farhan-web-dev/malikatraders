export const categories = [
   "Boiler Fuel Supply",
  "Boiler O&M Services",
  "Electrical",
  "Belts",
  "Bearing",
  "Chemicals",
  "Design & Printing",
  "Health Care Equipments",
  "Housekeeping Items",
  "Laboratory Equipment",
  "Lighting Equipment",
  "Mechanical Items",
  // "Fabrication Work",
  "Safety Items",
  "Oil & Lubricants",
];

export const products = [
  {
    id: 101,
    name: "Wood Chips & Firewood",
    category: "Boiler Fuel Supply",
    image: "/assets/wood-chips-firewood.png",
    description:
      "Clean-burning, optimally dried wood chips with low moisture levels, ideal for eco-friendly biomass steam generation.",
    whyChooseUs: [
      "Guaranteed Bulk Availability: Continuous supply tracking ensuring your plant never runs out.",
      "Quality Assured Fuels: Moisture and calorific value tested for maximum thermal efficiency.",
      "On-Time Logistics: Dedicated fleet delivering fuel directly to factory sites across Pakistan.",
      "Competitive Market Rates: Flexible pricing optimized for large-scale operations."
    ]
  },
  {
    id: 102,
    name: "Rice Husk & Husk Powder",
    category: "Boiler Fuel Supply",
    image: "/assets/rice-husk.png",
    description:
      "A highly cost-effective and sustainable biomass fuel widely trusted for continuous industrial heating.",
    whyChooseUs: [
      "Guaranteed Bulk Availability",
      "Quality Assured Fuels",
      "On-Time Logistics",
      "Competitive Market Rates"
    ]
  },
  {
    id: 103,
    name: "Cow Dung Briquettes / Waste",
    category: "Boiler Fuel Supply",
    image: "/assets/cow-dung-briquettes.png",
    description:
      "High-density, fully processed bio-fuel providing stable combustion and an economical alternative for eco-conscious plants.",
    whyChooseUs: [
      "High-density bio-fuel",
      "Stable combustion",
      "Economical alternative",
      "Eco-conscious choice"
    ]
  },
  {
    id: 104,
    name: "Imported Coal (South African / Indonesian)",
    category: "Boiler Fuel Supply",
    image: "/assets/imported-coal.png",
    description:
      "Premium grade industrial coal with exceptionally high calorific value (GCV) and low ash content.",
    whyChooseUs: [
      "Exceptionally High Calorific Value (GCV)",
      "Low Ash Content",
      "Guaranteed Bulk Availability",
      "On-Time Fleet Delivery"
    ]
  },
  {
    id: 105,
    name: "Local Coal (Balochistan / Sindh)",
    category: "Boiler Fuel Supply",
    image: "/assets/local-coal.png",
    description:
      "Cost-effective, high-grade local coal varieties sourced directly from reliable mines for industrial stokers.",
    whyChooseUs: [
      "Sourced directly from reliable mines",
      "High-grade local coal varieties",
      "Cost-effective pricing",
      "Reliable delivery across Pakistan"
    ]
  },
    {
    id: 106,
    name: "Boiler Operation & Maintenance (O&M) Services",
    category: "Boiler O&M Services",
    image: "/assets/boiler-om-service.png",
    description:
      "Safe, Certified, and Uninterrupted Steam Solutions by Malik Arshman Traders. Turnkey operational management, certified engineers, 100% compliance, and zero downtime.",
    isService: true,
    subtitle: "Safe, Certified, and Uninterrupted Steam Solutions",
    whyOutsource: [
      "Certified Manpower: 24/7 placement of govt-certified 1st & 2nd Class Boiler Engineers.",
      "100% Compliance: We handle all official inspections, paperwork, and safety audits.",
      "Cost Efficiency: Reduces fuel waste, prevents breakdowns, and lowers labor overheads.",
      "Zero Downtime: Continuous monitoring for smooth, round-the-clock steam supply."
    ],
    scopeOfServices: [
      "1. Daily Operations: Safe startup, shutdown, pressure control, and logbook maintenance.",
      "2. Water Treatment: Regular feedwater testing and chemical dosing to prevent scaling.",
      "3. Preventive Maintenance: Routine checks of burners, valves, and safety pumps.",
      "4. Emergency Support: Immediate troubleshooting during unexpected breakdown failures."
    ],
    industriesServed: [
      "Textiles & Garments",
      "Pharmaceuticals & Chemicals",
      "Food & Beverages",
      "Rice & Sugar Mills"
    ],
    contactInfo: {
      karachi: "M-6, M-Floor, Minah Avenue, Opp. Airport.",
      rawalpindi: "Shop No 01, Opp. Meezan Bank, Main Allahabad Road, Westridge III.",
      email: "info@malikarshmantraders.com"
    }
  },
  {
    id: 1,
    name: "SKF Bearing",
    category: "Bearing",
    image: "/assets/bearings/SKF-bearing.webp",
    description:
      "Premium SKF bearings engineered for high precision and durability. Ensures smooth operation under heavy loads and extended service life.",
  },
  {
    id: 2,
    name: "IV Chamber",
    category: "Health Care Equipments",
    image: "/assets/medical/IV-chamber.png",
    description:
      "Sterile IV chamber for accurate fluid delivery in medical settings. Designed for compatibility and leak-resistant performance.",
  },
  {
    id: 3,
    name: "V-Belt",
    category: "Belts",
    image: "/assets/belts/v-belt.png",
    description:
      "Heavy-duty V-belts offering excellent grip and minimal slippage. Ideal for power transmission in industrial machinery.",
  },
  {
    id: 4,
    name: "Bar Code Printing",
    category: "Design & Printing",
    image: "/assets/printing/bar.png",
    description:
      "High-resolution barcode printing services for inventory and tracking. Customizable formats to suit varied business needs.",
  },
  {
    id: 5,
    name: "High Bay Light",
    category: "Lighting Equipment",
    image: "/assets/light/high-bay.png",
    description:
      "Energy-efficient high bay lights for large indoor spaces. Provides uniform illumination with long lifespan.",
  },
  {
    id: 6,
    name: "Safety Helmet",
    category: "Safety Items",
    image: "/assets/Saftey/helmet.png",
    description:
      "Robust safety helmet with impact resistance and comfort padding. Meets international safety standards for industrial use.",
  },
  {
    id: 7,
    name: "NTN Bearing",
    category: "Bearing",
    image: "/assets/bearings/NTN-bearing.png",
    description:
      "Reliable NTN bearings optimized for precision machinery. Low friction design for improved efficiency and longevity.",
  },
  {
    id: 8,
    name: "Roller Bearing",
    category: "Bearing",
    image: "/assets/bearings/Roller-bearing.webp",
    description:
      "Heavy-load roller bearings built to withstand axial and radial forces. Engineered for smooth rotational motion.",
  },
  {
    id: 9,
    name: "NSK Bearing",
    category: "Bearing",
    image: "/assets/bearings/NSK-bearing.jpg",
    description:
      "NSK bearings offering high accuracy and robustness. Suitable for high-speed and precision applications.",
  },
  {
    id: 10,
    name: "Groove Ball Bearing",
    category: "Bearing",
    image: "/assets/bearings/Groove-Ball-bearing.webp",
    description:
      "Deep groove ball bearing with low noise and high reliability. Ideal for electric motors and general machinery.",
  },
  {
    id: 11,
    name: "Timing Belt",
    category: "Belts",
    image: "/assets/belts/Timing-belt.jpeg",
    description:
      "Precision timing belts for synchronized drive systems. Durable material minimizes stretch and maintains alignment.",
  },
  {
    id: 12,
    name: "Flat Belt",
    category: "Belts",
    image: "/assets/belts/flat-belt.png",
    description:
      "Smooth-running flat belts for conveyor and transfer systems. Offers consistent transmission with minimal maintenance.",
  },
  {
    id: 13,
    name: "Poly V Belt",
    category: "Belts",
    image: "/assets/belts/poly-v-belt.png",
    description:
      "Multi-ribbed Poly V belt combining flexibility and power. Reduces slippage while maximizing contact area.",
  },
  {
    id: 14,
    name: "Conveyor Belt",
    category: "Belts",
    image: "/assets/belts/conveyor-belt.png",
    description:
      "Durable conveyor belts engineered for continuous material handling. Resistant to wear and easy to install.",
  },
  {
    id: 15,
    name: "Bleaching Powder",
    category: "Chemicals",
    image: "/assets/chemicals/bleaching-pwder.png",
    description:
      "Effective bleaching agent for sanitation and cleaning. Provides consistent whitening with controlled reaction.",
  },
  {
    id: 16,
    name: "Hardness Powder",
    category: "Chemicals",
    image: "/assets/chemicals/hardness.png",
    description:
      "Chemical formulation to adjust water hardness for industrial use. Stabilizes mineral content without residue buildup.",
  },
  {
    id: 17,
    name: "Caustic Soda",
    category: "Chemicals",
    image: "/assets/chemicals/castic.png",
    description:
      "Strong alkaline compound used for cleaning, pH regulation, and chemical manufacturing in industrial processes.",
  },
  {
    id: 18,
    name: "Hydro Cholric Acid (HCL)",
    category: "Chemicals",
    image: "/assets/chemicals/HCL.png",
    description:
      "Highly corrosive acid used in pH control, metal cleaning, and various chemical synthesis applications.",
  },
  {
    id: 19,
    name: "Sodium Silicate",
    category: "Chemicals",
    image: "/assets/chemicals/caustic.png",
    description:
      "Versatile chemical used as a binder, corrosion inhibitor, and in water treatment and detergent formulations.",
  },
  {
    id: 20,
    name: "Visting Card Printing",
    category: "Design & Printing",
    image: "/assets/printing/visit-card.png",
    description:
      "Custom business card printing with sharp details and premium paper options for professional branding.",
  },
  {
    id: 21,
    name: "Letter Head Printing",
    category: "Design & Printing",
    image: "/assets/printing/letter-print.png",
    description:
      "Professional letterhead design and printing to enhance corporate identity with consistent branding.",
  },
  {
    id: 22,
    name: "Envolpe Printing",
    category: "Design & Printing",
    image: "/assets/printing/envlope.png",
    description:
      "Customized envelope printing for corporate communication, tailored to brand design and color schemes.",
  },
  {
    id: 23,
    name: "Transformer",
    category: "Electrical",
    image: "/assets/electrical/transformer.png",
    description:
      "Efficient voltage-regulating electrical transformer for industrial and commercial power systems.",
  },
  {
    id: 24,
    name: "Electrical Relay",
    category: "Electrical",
    image: "/assets/electrical/relay.png",
    description:
      "Compact relay device for switching electrical circuits, ensuring protection and automation.",
  },
  {
    id: 25,
    name: "Electrical Panels",
    category: "Electrical",
    image: "/assets/electrical/panel.png",
    description:
      "Control panels for power distribution and circuit management with safety and load balance features.",
  },
  {
    id: 26,
    name: "Invertor AC to DC",
    category: "Electrical",
    image: "/assets/electrical/invertor.png",
    description:
      "High-performance inverter converting AC to DC for stable energy supply in sensitive applications.",
  },
  {
    id: 27,
    name: "Electrical Fuses",
    category: "Electrical",
    image: "/assets/electrical/fuse.png",
    description:
      "Protective electrical fuses designed to safeguard circuits against overloads and short circuits.",
  },
  {
    id: 28,
    name: "Electrical Boards",
    category: "Electrical",
    image: "/assets/electrical/board.png",
    description:
      "Circuit boards for electrical distribution and control in commercial and industrial systems.",
  },
  {
    id: 29,
    name: "BP Appratus",
    category: "Health Care Equipments",
    image: "/assets/medical/BP-app.png",
    description:
      "Precise blood pressure monitoring equipment designed for accurate and consistent readings.",
  },
  {
    id: 30,
    name: "Drip Canula",
    category: "Health Care Equipments",
    image: "/assets/medical/canula.png",
    description:
      "Flexible medical cannula for intravenous therapy, ensuring smooth and safe fluid administration.",
  },
  {
    id: 31,
    name: "Drip Set",
    category: "Health Care Equipments",
    image: "/assets/medical/drip-set.png",
    description:
      "Complete IV drip set for efficient fluid and medication delivery in clinical environments.",
  },
  {
    id: 32,
    name: "Nabulizer Mask",
    category: "Health Care Equipments",
    image: "/assets/medical/neb-mask.png",
    description:
      "Soft-seal nebulizer mask designed for effective aerosol delivery in respiratory treatments.",
  },
  {
    id: 33,
    name: "Surgical Gloves",
    category: "Health Care Equipments",
    image: "/assets/medical/sent-mask.png",
    description:
      "Sterile surgical gloves offering superior protection and tactile sensitivity for medical procedures.",
  },
  {
    id: 34,
    name: "Suction Machine",
    category: "Health Care Equipments",
    image: "/assets/medical/suction-machine.png",
    description:
      "Portable suction device used to remove fluids during surgical or emergency care applications.",
  },
  {
    id: 35,
    name: "Syringes",
    category: "Health Care Equipments",
    image: "/assets/medical/syringe.png",
    description:
      "Disposable medical syringes for precise injection and withdrawal of fluids under sterile conditions.",
  },
  {
    id: 36,
    name: "Broom",
    category: "Housekeeping Items",
    image: "/assets/hk/broom.png",
    description:
      "Durable broom ideal for sweeping indoor and outdoor surfaces, ensuring clean workspaces.",
  },
  {
    id: 37,
    name: "Brush Pan",
    category: "Housekeeping Items",
    image: "/assets/hk/brush-pan.png",
    description:
      "Handheld brush and pan set designed for quick and effective debris collection and disposal.",
  },
  {
    id: 38,
    name: "Cleaning Duster",
    category: "Housekeeping Items",
    image: "/assets/hk/duster.png",
    description:
      "Soft and reusable duster for surface cleaning, ideal for dust removal in sensitive areas.",
  },
  {
    id: 39,
    name: "Cleaning Squeege",
    category: "Housekeeping Items",
    image: "/assets/hk/squeege.png",
    description:
      "Glass and floor squeegee for streak-free cleaning of windows, tiles, and other surfaces.",
  },
  {
    id: 40,
    name: "Beaker",
    category: "Laboratory Equipment",
    image: "/assets/lab/beaker.png",
    description:
      "Standard lab beaker for mixing, measuring, and heating chemicals in scientific experiments.",
  },
  {
    id: 41,
    name: "Burette",
    category: "Laboratory Equipment",
    image: "/assets/lab/burette.png",
    description:
      "Graduated burette for precise titration and fluid dispensing in analytical chemistry labs.",
  },
  {
    id: 42,
    name: "Graduated Cylinders",
    category: "Laboratory Equipment",
    image: "/assets/lab/cylinder.png",
    description:
      "Tall and narrow cylinder marked for measuring liquid volumes accurately in laboratory work.",
  },
  {
    id: 43,
    name: "PH Meter",
    category: "Laboratory Equipment",
    image: "/assets/lab/ph.png",
    description:
      "Digital pH meter providing accurate measurement of acidity or alkalinity in solutions.",
  },
  {
    id: 44,
    name: "Thermometer",
    category: "Laboratory Equipment",
    image: "/assets/lab/thermo.png",
    description:
      "Precision laboratory thermometer for monitoring temperatures in chemical or biological processes.",
  },
  {
    id: 45,
    name: "Low Bay Light",
    category: "Lighting Equipment",
    image: "/assets/light/low-bay.png",
    description:
      "Efficient lighting solution for low-ceiling industrial spaces, offering uniform brightness.",
  },
  {
    id: 46,
    name: "Street Light",
    category: "Lighting Equipment",
    image: "/assets/light/street.png",
    description:
      "Weather-resistant street lights with high lumen output for clear night visibility and safety.",
  },
  {
    id: 47,
    name: "Hrdrolic Fitting",
    category: "Mechanical Items",
    image: "/assets/mechnical/hyd-fit.png",
    description:
      "Robust fittings for hydraulic systems, ensuring leak-proof connections under high pressure.",
  },
  {
    id: 48,
    name: "MS Shafts",
    category: "Mechanical Items",
    image: "/assets/mechnical/ms.png",
    description:
      "Precision-engineered mild steel shafts used in industrial machines for torque transmission.",
  },
  {
    id: 49,
    name: "SS Shafts",
    category: "Mechanical Items",
    image: "/assets/mechnical/ss.png",
    description:
      "Corrosion-resistant stainless steel shafts for demanding mechanical and rotating applications.",
  },
  {
    id: 50,
    name: "Seals",
    category: "Mechanical Items",
    image: "/assets/mechnical/seals.png",
    description:
      "Durable sealing components to prevent leaks in pumps, engines, and mechanical assemblies.",
  },
  {
    id: 51,
    name: "Safety Shoes",
    category: "Safety Items",
    image: "/assets/Saftey/shoe.png",
    description:
      "Heavy-duty safety shoes with steel toe caps and slip-resistant soles for industrial protection.",
  },
  {
    id: 52,
    name: "Engine Oil",
    category: "Oil & Lubricants",
    image: "/assets/oil/engine-oil.png",
    description:
      "High-performance engine oil ensuring optimal lubrication, reduced friction, and extended engine life.",
  },
  {
    id: 53,
    name: "Hydrolic Oil",
    category: "Oil & Lubricants",
    image: "/assets/oil/hydrolic.png",
    description:
      "Premium hydraulic oil providing smooth operation and protection for heavy-duty hydraulic systems.",
  },
  {
    id: 54,
    name: "High Temperature Greece",
    category: "Oil & Lubricants",
    image: "/assets/oil/greece.png",
    description:
      "Heavy-duty grease designed to withstand high temperatures and extreme pressure in machinery.",
  },
];
