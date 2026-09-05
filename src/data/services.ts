import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import type { Service, ServiceGroup } from "@/types";

function gallery(folder: string, files: string[]): string[] {
  return files.map((f) => `/images/services/${folder}/${f}`);
}

const tvUnitImages = Array.from(
  { length: 12 },
  (_, i) => `tv-unit-${String(i + 1).padStart(2, "0")}.jpeg`
);

const customSofaImages = Array.from(
  { length: 22 },
  (_, i) => `sofa-${String(i + 1).padStart(2, "0")}.jpeg`
);

const customBedImages = Array.from(
  { length: 9 },
  (_, i) => `bed-${String(i + 1).padStart(2, "0")}.jpeg`
);

const tvDrawerImages = Array.from(
  { length: 14 },
  (_, i) => `tv-drawer-${String(i + 1).padStart(2, "0")}.jpeg`
);

const girlsRoomImages = [
  ...Array.from({ length: 5 }, (_, i) => `girls-${String(i + 1).padStart(2, "0")}.png`),
  ...Array.from({ length: 25 }, (_, i) => `girls-${String(i + 6).padStart(2, "0")}.jpeg`),
];

const cupboardImages = [
  "IMG-20251223-WA0101.jpg",
  "IMG-20251223-WA0102-981x1024.jpg",
  "IMG-20251223-WA0104.jpg",
  "IMG-20251223-WA0105.jpg",
  "IMG-20251223-WA0106-1024x1016.jpg",
  "IMG-20251223-WA0107-1024x683.jpg",
  ...Array.from({ length: 28 }, (_, i) => `cupboard-extra-${String(i + 1).padStart(2, "0")}.jpeg`),
];

const gamingRoomImages = Array.from(
  { length: 16 },
  (_, i) => `gaming-${String(i + 1).padStart(2, "0")}.jpeg`
);

const entrywayImages = Array.from(
  { length: 11 },
  (_, i) => `entryway-${String(i + 1).padStart(2, "0")}.jpeg`
);

const vanityTableImages = Array.from(
  { length: 11 },
  (_, i) => `vanity-${String(i + 1).padStart(2, "0")}.jpeg`
);

const sideTableImages = Array.from(
  { length: 8 },
  (_, i) => `side-table-${String(i + 1).padStart(2, "0")}.jpeg`
);

const shoeRackImages = Array.from(
  { length: 9 },
  (_, i) => `shoe-rack-${String(i + 1).padStart(2, "0")}.jpeg`
);

const curtainImages = [
  "IMG-20251223-WA0120.jpg",
  "IMG-20251223-WA0121-819x1024.jpg",
  "IMG-20251223-WA0122-576x1024.jpg",
  "IMG-20251223-WA0123-768x1024.jpg",
  "IMG-20251223-WA0124-819x1024.jpg",
  "IMG-20251223-WA0125-1024x1024.jpg",
];

const kidsImages = [
  "IMG-20251223-WA0039-840x1024.jpg",
  "IMG-20251223-WA0040-690x1024.jpg",
  "IMG-20251223-WA0041-1024x809.jpg",
  "IMG-20251223-WA0042-1024x670.jpg",
  "IMG-20251223-WA0043-930x1024.jpg",
  "IMG-20251223-WA0044-930x1024.jpg",
];

const wallPanelImages = [
  "IMG-20251223-WA0061.jpg",
  "IMG-20251223-WA0063-808x1024.jpg",
  "IMG-20251223-WA0064-874x1024.jpg",
  "IMG-20251223-WA0065-1-862x1024.jpg",
  "IMG-20251223-WA0066-823x1024.jpg",
  "IMG-20251223-WA0067-835x1024.jpg",
];

const defaultFaq = (serviceName: string): Service["faq"] => [
  {
    question: "Can you customize the dimensions?",
    answer: `Yes. Every ${serviceName.toLowerCase()} project is tailored to your room measurements and layout requirements.`,
  },
  {
    question: "Can I choose the material or colour?",
    answer:
      "Absolutely. We offer a range of materials, finishes, fabrics, and colours to match your interior style.",
  },
  {
    question: "Do you provide measurement?",
    answer:
      "Yes. Our team takes accurate on-site measurements to ensure a precise fit for your space.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Call us, message on WhatsApp, or fill out the quotation form on this page. We will discuss your requirements and provide a quote.",
  },
  {
    question: "Do you provide installation?",
    answer:
      "Yes. We handle professional delivery and installation across the UAE.",
  },
];

export const services: Service[] = [
  {
    slug: "sofa-bed-upholstery",
    name: "Furniture Finish",
    shortName: "Furniture Finish",
    category: "living-bedroom",
    headline: "Furniture Finish & Refinish — Fabric Repair & Upholstery",
    description:
      "Professional furniture finish and refinish service for fabric repair, fabric change, and upholstery refresh on sofas, beds, and padded furniture.",
    intro:
      "Furniture Finish (also searched as furniture refinish) covers the upholstery side of your home — pieces with fabric and padding that need repairing, refreshing, or a full fabric change. From worn sofa seats and bed headboards to cushion upgrades and colour updates, we restore comfort and style without replacing the whole frame. If it has fabric that can be selected, changed, or repaired, it belongs under Furniture Finish.",
    heroImage: "",
    gallery: [],
    benefits: [
      "Fabric repair and full fabric change",
      "Sofa, bed, and padded furniture refresh",
      "Wide fabric and colour options",
      "Cushion and comfort upgrades",
      "Restore furniture without full replacement",
    ],
    customization: [
      {
        title: "What We Finish",
        items: ["Sofas & seating", "Beds & headboards", "Cushions & pads", "Fabric repairs"],
      },
      {
        title: "Fabrics",
        items: ["Linen", "Velvet", "Bouclé", "Performance fabrics", "Textured weaves"],
      },
      {
        title: "Options",
        items: ["Colour change", "Piping & trims", "Button detailing", "Cushion upgrades"],
      },
    ],
    faq: [
      {
        question: "What comes under Furniture Finish?",
        answer:
          "Furniture Finish / furniture refinish is for pieces with fabric and upholstery — sofas, beds, cushions, and similar padded furniture that need fabric repair, fabric change, or reupholstery.",
      },
      {
        question: "Can you reupholster my existing sofa or bed?",
        answer:
          "Yes. We work with your existing furniture frames and replace or upgrade the fabric and padding to your chosen style.",
      },
      ...defaultFaq("furniture finish").slice(1),
    ],
    seoTitle: "Furniture Finish & Refinish UAE | Al-Awan Furniture",
    seoDescription:
      "Furniture finish and furniture refinish in the UAE — fabric repair, fabric change, and professional sofa & bed upholstery. Refresh your furniture without full replacement. Free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Upholstery", "Bedrooms"],
  },
  {
    slug: "custom-sofas",
    name: "Custom Sofas",
    shortName: "Custom Sofas",
    category: "living-bedroom",
    headline: "Custom Sofas Designed for Your Living Space",
    description:
      "Bespoke sofas crafted to your dimensions, style, and comfort preferences across the UAE.",
    intro:
      "Create seating that truly belongs in your home. Our custom sofas are designed around your room size, lifestyle, and aesthetic — from elegant living rooms to inviting lounge corners. Choose configurations, materials, and finishes that reflect how you live, with every detail considered from frame to final stitch.",
    heroImage: gallery("custom-sofas", customSofaImages)[0],
    gallery: gallery("custom-sofas", customSofaImages),
    benefits: [
      "Made to your exact room dimensions",
      "L-shape, sectional, and straight configurations",
      "Premium fabrics and finishes",
      "Comfort tailored to how you sit and relax",
      "Designed for UAE homes and lifestyles",
    ],
    customization: [
      {
        title: "Configurations",
        items: ["L-shape", "Sectional", "Straight sofas", "Accent seating"],
      },
      {
        title: "Fabrics & Materials",
        items: ["Linen", "Velvet", "Bouclé", "Performance fabrics", "Leather options"],
      },
      {
        title: "Details",
        items: ["Piping & trims", "Cushion fills", "Leg styles", "Custom colour matching"],
      },
    ],
    faq: defaultFaq("custom sofa"),
    seoTitle: "Custom Sofas UAE | Al-Awan Furniture",
    seoDescription:
      "Custom-made sofas for UAE homes. Bespoke designs, premium fabrics, and professional installation. Get your free quotation today.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Sofas", "Living Rooms"],
  },
  {
    slug: "custom-beds",
    name: "Custom Beds",
    shortName: "Custom Beds",
    category: "living-bedroom",
    headline: "Custom Beds Designed for Your Bedroom",
    description:
      "Bespoke beds crafted to your dimensions, style, and comfort preferences across the UAE.",
    intro:
      "Create a bed that truly belongs in your bedroom. Our custom beds are designed around your room size, storage needs, and aesthetic — from elegant master bedrooms to calm guest rooms. Choose headboard styles, base options, materials, and finishes that reflect how you rest, with every detail considered from frame to final finish.",
    heroImage: gallery("custom-beds", customBedImages)[0],
    gallery: gallery("custom-beds", customBedImages),
    benefits: [
      "Made to your exact room dimensions",
      "Choice of headboard, frame, and base styles",
      "Premium materials and finishes",
      "Configurations for storage and comfort",
      "Designed for UAE homes and lifestyles",
    ],
    customization: [
      {
        title: "Bed Styles",
        items: ["Platform beds", "Panel headboards", "Upholstered headboards", "Storage bases"],
      },
      {
        title: "Details",
        items: ["Soft-close drawers", "Floating frames", "Matching side tables", "Wall panel surrounds"],
      },
      {
        title: "Materials",
        items: ["Wood veneers", "Lacquer finishes", "Upholstered panels", "Metal accents"],
      },
    ],
    faq: defaultFaq("custom bed"),
    seoTitle: "Custom Beds UAE | Al-Awan Furniture",
    seoDescription:
      "Custom-made beds for UAE homes. Bespoke designs, premium materials, and professional installation. Get your free quotation today.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Bedrooms"],
  },
  {
    slug: "cupboards",
    name: "Custom Cupboards & Wardrobes",
    shortName: "Cupboards",
    category: "storage-media",
    headline: "Custom Cupboards & Wardrobes Built for Your Space",
    description:
      "Maximize storage with bespoke wardrobes and cupboards designed around your room layout and needs.",
    intro:
      "Transform cluttered bedrooms and hallways into organized, elegant spaces. Our custom cupboards and wardrobes are designed to use every centimeter efficiently — with hanging space, drawers, shelving, and internal accessories configured to how you actually store your belongings. From walk-in closets to fitted bedroom wardrobes, we create storage that looks as good as it functions.",
    heroImage: gallery("cupboards", ["IMG-20251223-WA0101.jpg"])[0],
    gallery: gallery("cupboards", cupboardImages),
    benefits: [
      "Floor-to-ceiling fitted designs",
      "Optimized internal layouts",
      "Sliding, hinged, or walk-in options",
      "Premium finishes and hardware",
      "Seamless integration with room interiors",
    ],
    customization: [
      {
        title: "Door Styles",
        items: ["Sliding doors", "Hinged doors", "Mirror panels", "Glass accents"],
      },
      {
        title: "Internal Layout",
        items: ["Hanging sections", "Drawer units", "Shoe racks", "Accessory trays"],
      },
      {
        title: "Finishes",
        items: ["Matte laminates", "Wood textures", "High-gloss", "Two-tone combinations"],
      },
    ],
    faq: defaultFaq("wardrobe"),
    seoTitle: "Custom Wardrobes & Cupboards UAE | Al-Awan Furniture",
    seoDescription:
      "Custom wardrobes and cupboards for UAE homes. Fitted storage designed around your space with premium finishes. Request a free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Wardrobes"],
  },
  {
    slug: "tv-units",
    name: "Custom TV Units",
    shortName: "TV Units",
    category: "storage-media",
    headline: "Custom TV Units Designed for Your Space",
    description:
      "Media walls and TV units that combine elegant design with practical storage for modern UAE living rooms.",
    intro:
      "Your living room deserves a media wall that anchors the space with style. Our custom TV units are designed around your screen size, room proportions, and storage needs — integrating display areas, concealed cabling, shelving, and ambient details. Whether you prefer a minimalist floating unit or a full feature wall, we create solutions that elevate your entertainment area.",
    heroImage: gallery("tv-units", tvUnitImages)[0],
    gallery: gallery("tv-units", tvUnitImages),
    benefits: [
      "Designed around your TV and room size",
      "Integrated cable management",
      "Display and storage combined",
      "Premium panel and veneer finishes",
      "Professional wall installation",
    ],
    customization: [
      {
        title: "Layouts",
        items: ["Floating units", "Full media walls", "Flanking storage", "Display niches"],
      },
      {
        title: "Panel Styles",
        items: ["Wood slats", "Fluted panels", "Stone-look finishes", "Matte lacquer"],
      },
      {
        title: "Lighting",
        items: ["LED strip accents", "Shelf lighting", "Backlit panels"],
      },
    ],
    faq: defaultFaq("TV unit"),
    seoTitle: "Custom TV Units UAE | Al-Awan Furniture",
    seoDescription:
      "Custom TV units and media walls in the UAE. Bespoke designs with integrated storage and premium finishes. Get a free quotation.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["TV Units"],
  },
  {
    slug: "curtains",
    name: "Custom Curtains",
    shortName: "Curtains",
    category: "interior-finishing",
    headline: "Custom Curtains Tailored to Your Windows",
    description:
      "Made-to-measure curtains that enhance privacy, light control, and the overall elegance of your rooms.",
    intro:
      "The right curtains complete a room — softening light, adding texture, and framing your windows with intention. We provide custom curtain solutions measured and made for your specific windows, with fabric choices and heading styles that complement your interior design. From sheer layers to full blackout drapes, every set is crafted to fit and function beautifully.",
    heroImage: gallery("curtains", ["IMG-20251223-WA0120.jpg"])[0],
    gallery: gallery("curtains", curtainImages),
    benefits: [
      "Made-to-measure for your windows",
      "Wide fabric selection",
      "Light filtering and blackout options",
      "Coordinated with room interiors",
      "Professional measurement and fitting",
    ],
    customization: [
      {
        title: "Fabrics",
        items: ["Sheer", "Linen blends", "Blackout", "Textured weaves", "Velvet"],
      },
      {
        title: "Heading Styles",
        items: ["Eyelet", "Pencil pleat", "Wave system", "Rod pocket"],
      },
      {
        title: "Layers",
        items: ["Single panels", "Sheer + drape", "Motorized options enquiry"],
      },
    ],
    faq: defaultFaq("curtains"),
    seoTitle: "Custom Curtains UAE | Al-Awan Furniture",
    seoDescription:
      "Made-to-measure custom curtains in the UAE. Premium fabrics, precise fitting, and elegant window treatments. Request a free quotation.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Bedrooms", "Living Rooms"],
  },
  {
    slug: "kids-rooms",
    name: "Kids Room Furniture & Interiors",
    shortName: "Kids Rooms",
    category: "specialized-rooms",
    headline: "Kids Room Furniture Designed to Grow With Them",
    description:
      "Safe, functional, and playful kids room furniture tailored to your child's space and needs.",
    intro:
      "Create a room where your child can sleep, study, and play comfortably. Our kids room furniture combines practical storage, durable materials, and thoughtful design — from custom beds and study desks to wardrobes and shelving. We work with you to design spaces that are both fun and functional, with finishes and layouts suited to your home in the UAE.",
    heroImage: gallery("kids-rooms", ["IMG-20251223-WA0039-840x1024.jpg"])[0],
    gallery: gallery("kids-rooms", kidsImages),
    benefits: [
      "Age-appropriate furniture designs",
      "Maximized storage for toys and clothes",
      "Durable, easy-care finishes",
      "Study and sleep zones planned together",
      "Custom sizing for any room",
    ],
    customization: [
      {
        title: "Furniture",
        items: ["Bunk beds", "Single beds", "Study desks", "Bookshelves", "Toy storage"],
      },
      {
        title: "Themes",
        items: ["Neutral foundations", "Colour accents", "Themed details", "Two-tone finishes"],
      },
      {
        title: "Storage",
        items: ["Under-bed drawers", "Built-in wardrobes", "Open shelving", "Window seat storage"],
      },
    ],
    faq: defaultFaq("kids room"),
    seoTitle: "Kids Room Furniture UAE | Al-Awan Furniture",
    seoDescription:
      "Custom kids room furniture and interiors in the UAE. Beds, storage, study areas, and playful designs. Get your free quotation.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Kids Rooms"],
  },
  {
    slug: "girls-rooms",
    name: "Girls Room Furniture & Interiors",
    shortName: "Girls Rooms",
    category: "specialized-rooms",
    headline: "Beautiful Girls Room Interiors Made for Her",
    description:
      "Elegant and practical girls room furniture with custom storage, vanity areas, and refined finishes.",
    intro:
      "Design a bedroom she will love coming home to. Our girls room interiors combine graceful aesthetics with smart storage — featuring custom beds, dressing areas, wardrobes, and study spaces finished in colours and materials that reflect her personality. Every element is measured and built for her room, creating a space that is both beautiful and genuinely useful.",
    heroImage: gallery("girls-rooms", girlsRoomImages)[0],
    gallery: gallery("girls-rooms", girlsRoomImages),
    benefits: [
      "Personalized design and colour palettes",
      "Integrated vanity and storage",
      "Quality finishes that last",
      "Study and rest areas combined",
      "Made to fit her room perfectly",
    ],
    customization: [
      {
        title: "Furniture",
        items: ["Panel beds", "Dressing tables", "Wardrobes", "Study desks", "Display shelving"],
      },
      {
        title: "Finishes",
        items: ["Soft pastels", "White & wood", "Accent colours", "Upholstered headboards"],
      },
      {
        title: "Details",
        items: ["Crown molding accents", "Decorative handles", "Mirror integration", "LED accents"],
      },
    ],
    faq: defaultFaq("girls room"),
    seoTitle: "Girls Room Furniture UAE | Al-Awan Furniture",
    seoDescription:
      "Custom girls room furniture and interiors in the UAE. Elegant designs with smart storage and premium finishes. Request a free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Kids Rooms"],
  },
  {
    slug: "wall-paneling",
    name: "Wall Paneling",
    shortName: "Wall Paneling",
    category: "interior-finishing",
    headline: "Wall Paneling That Adds Depth and Character",
    description:
      "Custom wall paneling to create feature walls, headboard surrounds, and architectural interest in your home.",
    intro:
      "Wall paneling transforms ordinary walls into design features. From fluted and slatted panels behind beds to full accent walls in living areas, we create paneling that adds warmth, texture, and architectural depth to your interiors. Our panels are custom-fitted to your walls with premium finishes that complement your furniture and overall design scheme.",
    heroImage: gallery("wall-paneling", ["IMG-20251223-WA0061.jpg"])[0],
    gallery: gallery("wall-paneling", wallPanelImages),
    benefits: [
      "Creates striking feature walls",
      "Complements custom furniture",
      "Adds warmth and texture",
      "Various panel styles available",
      "Professional installation",
    ],
    customization: [
      {
        title: "Panel Styles",
        items: ["Fluted", "Slatted", "Geometric", "Classic shaker", "Vertical battens"],
      },
      {
        title: "Applications",
        items: ["Bedroom headboards", "Living room features", "Dining accents", "Hallway walls"],
      },
      {
        title: "Finishes",
        items: ["Natural wood", "Painted panels", "Two-tone", "Walnut & oak tones"],
      },
    ],
    faq: defaultFaq("wall paneling"),
    seoTitle: "Wall Paneling UAE | Al-Awan Furniture",
    seoDescription:
      "Custom wall paneling in the UAE. Feature walls, headboard surrounds, and architectural finishes. Get a free quotation today.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Wall Panels", "Bedrooms"],
  },
  {
    slug: "gaming-rooms",
    name: "Gaming Room Design & Furniture",
    shortName: "Gaming Rooms",
    category: "specialized-rooms",
    headline: "Gaming Room Design Built for Performance and Style",
    description:
      "Custom gaming room furniture and interiors with smart storage, cable management, and immersive design.",
    intro:
      "Level up your gaming space with furniture designed for how you play. Our gaming room solutions include custom desks, display shelving, storage for equipment, and feature wall designs — all planned around your setup, screen configuration, and room layout. We combine practical cable management and ergonomic considerations with a look that makes your gaming room a destination.",
    heroImage: gallery("gaming-rooms", gamingRoomImages)[0],
    gallery: gallery("gaming-rooms", gamingRoomImages),
    benefits: [
      "Custom desk and storage layouts",
      "Cable management built in",
      "Display and equipment shelving",
      "Ambient lighting integration",
      "Designed around your gaming setup",
    ],
    customization: [
      {
        title: "Furniture",
        items: ["Gaming desks", "Monitor walls", "Equipment storage", "Seating niches"],
      },
      {
        title: "Wall Features",
        items: ["LED accent panels", "Acoustic panels", "Display niches", "RGB-ready designs"],
      },
      {
        title: "Storage",
        items: ["Console bays", "Drawer units", "Open shelving", "Hidden cable channels"],
      },
    ],
    faq: defaultFaq("gaming room"),
    seoTitle: "Gaming Room Design UAE | Al-Awan Furniture",
    seoDescription:
      "Custom gaming room furniture and design in the UAE. Desks, storage, feature walls, and cable management. Request a free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Gaming Rooms", "TV Units"],
  },
  {
    slug: "entryway-furniture",
    name: "Entryway Furniture",
    shortName: "Entryway",
    category: "storage-media",
    headline: "Entryway Furniture That Welcomes You Home",
    description:
      "Custom entryway units with seating, mirrors, storage, and lighting designed for UAE homes.",
    intro:
      "Make the first impression of your home count. Our custom entryway furniture combines practical storage for shoes and daily essentials with elegant seating, mirrors, and ambient lighting. From slim foyer consoles to full feature walls with drawers, niches, and overhead cabinets — every unit is designed around your entrance layout and lifestyle.",
    heroImage: gallery("entryway", entrywayImages)[0],
    gallery: gallery("entryway", entrywayImages),
    benefits: [
      "Seating, storage, and mirror in one design",
      "Built-in lighting and display niches",
      "Shoe and daily-item storage options",
      "Sized to fit narrow or open foyers",
      "Premium finishes that match your home",
    ],
    customization: [
      {
        title: "Layouts",
        items: ["Bench + drawers", "Console + mirror", "Full feature walls", "Corner entry units"],
      },
      {
        title: "Features",
        items: ["Backlit mirrors", "Open niches", "Overhead cabinets", "Under-bench drawers"],
      },
      {
        title: "Finishes",
        items: ["Wood textures", "Matte laminates", "Soft upholstery seats", "Metal accents"],
      },
    ],
    faq: defaultFaq("entryway furniture"),
    seoTitle: "Custom Entryway Furniture UAE | Al-Awan Furniture",
    seoDescription:
      "Custom entryway furniture in the UAE — benches, mirrors, storage, and lighting designed for your foyer. Request a free quotation.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Wardrobes", "Living Rooms"],
  },
  {
    slug: "vanity-tables",
    name: "Vanity Tables",
    shortName: "Vanity Tables",
    category: "living-bedroom",
    headline: "Luxury Vanity Tables Made for Your Routine",
    description:
      "Custom vanity tables with drawers, mirrors, lighting, and storage tailored to your bedroom or dressing area.",
    intro:
      "Create a dedicated beauty and grooming space with a custom vanity table designed around your habits. We craft wall-mounted and freestanding vanities with thoughtful drawer layouts, LED-lit mirrors, side shelving, and finishes that coordinate with your bedroom furniture. From compact corner vanities to statement makeup desks, every detail is measured and built for your room.",
    heroImage: gallery("vanity-tables", vanityTableImages)[0],
    gallery: gallery("vanity-tables", vanityTableImages),
    benefits: [
      "Drawer layouts planned for cosmetics and jewelry",
      "LED mirror and ambient lighting options",
      "Integrated side shelving and display niches",
      "Matched to bedroom furniture finishes",
      "Custom sizing for any room layout",
    ],
    customization: [
      {
        title: "Configurations",
        items: ["Wall-mounted desks", "Freestanding vanities", "Mirror + shelf combos", "Corner units"],
      },
      {
        title: "Lighting",
        items: ["Backlit mirrors", "Under-desk LED", "Shelf lighting", "Makeup-ready brightness"],
      },
      {
        title: "Storage",
        items: ["Multi-drawer banks", "Hidden compartments", "Open product shelves", "Stool options"],
      },
    ],
    faq: defaultFaq("vanity table"),
    seoTitle: "Custom Vanity Tables UAE | Al-Awan Furniture",
    seoDescription:
      "Custom vanity tables in the UAE with drawers, LED mirrors, and premium finishes. Designed for bedrooms and dressing areas. Get a free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Bedrooms"],
  },
  {
    slug: "side-tables",
    name: "Side Tables",
    shortName: "Side Tables",
    category: "living-bedroom",
    headline: "Custom Side Tables for Bedroom and Living Spaces",
    description:
      "Bespoke side tables and nightstands with drawers, finishes, and proportions tailored to your furniture.",
    intro:
      "Complete your bedroom or living room with side tables designed to match your bed, sofa, or media wall. We create custom nightstands and accent tables with drawer storage, premium finishes, and proportions that sit perfectly beside your furniture — from slim modern designs to deeper storage units with soft-close drawers.",
    heroImage: gallery("side-tables", sideTableImages)[0],
    gallery: gallery("side-tables", sideTableImages),
    benefits: [
      "Matched height and style to your bed or sofa",
      "Drawer and open-shelf storage options",
      "Premium wood, lacquer, and fabric finishes",
      "Soft-close and handle-less designs available",
      "Sold as singles or coordinated pairs",
    ],
    customization: [
      {
        title: "Styles",
        items: ["Nightstands", "Living room side tables", "Floating units", "Two-drawer designs"],
      },
      {
        title: "Details",
        items: ["Handle-less fronts", "Metal legs", "Wood frames", "Upholstered drawer faces"],
      },
      {
        title: "Finishes",
        items: ["Walnut & oak tones", "Matte lacquer", "Two-tone combinations", "Custom colour match"],
      },
    ],
    faq: defaultFaq("side table"),
    seoTitle: "Custom Side Tables UAE | Al-Awan Furniture",
    seoDescription:
      "Custom side tables and nightstands in the UAE. Matched finishes, drawer storage, and sizes for bedroom and living spaces. Request a free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Bedrooms", "Living Rooms"],
  },
  {
    slug: "shoe-racks",
    name: "Shoe Racks",
    shortName: "Shoe Racks",
    category: "storage-media",
    headline: "Custom Shoe Racks Built for Real Storage Needs",
    description:
      "Fitted shoe racks and pull-out shoe cabinets designed to keep entrances and closets organized.",
    intro:
      "Stop cluttering your entrance with scattered footwear. Our custom shoe racks include pull-out vertical units, closed cabinets, and open shelving systems sized for your collection and your space. Whether you need a slim foyer shoe cabinet or a full wardrobe-integrated pull-out system, we design storage that keeps shoes accessible, visible, and neatly arranged.",
    heroImage: gallery("shoe-racks", shoeRackImages)[0],
    gallery: gallery("shoe-racks", shoeRackImages),
    benefits: [
      "Pull-out and closed cabinet options",
      "High-capacity vertical storage",
      "Designed for UAE entrance and wardrobe spaces",
      "Matched finishes with nearby furniture",
      "Easy access with durable sliding systems",
    ],
    customization: [
      {
        title: "Types",
        items: ["Pull-out shoe towers", "Closed shoe cabinets", "Open shelving racks", "Bench + shoe storage"],
      },
      {
        title: "Interiors",
        items: ["Slanted shelves", "Flat shelves", "Adjustable tiers", "Mixed open/closed layouts"],
      },
      {
        title: "Finishes",
        items: ["White & wood combos", "Full wood textures", "Matte laminates", "Handle styles"],
      },
    ],
    faq: defaultFaq("shoe rack"),
    seoTitle: "Custom Shoe Racks UAE | Al-Awan Furniture",
    seoDescription:
      "Custom shoe racks and pull-out shoe cabinets in the UAE. High-capacity storage designed for entrances and closets. Get a free quotation.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Wardrobes"],
  },
  {
    slug: "tv-drawers",
    name: "TV Drawers",
    shortName: "TV Drawers",
    category: "storage-media",
    headline: "TV Drawers for Organized Living",
    description:
      "Functional TV drawer units and media storage designed to keep your living space tidy and elegant.",
    intro:
      "Keep your entertainment area organized with custom TV drawers. Designed to sit beneath or alongside your media wall, these units provide concealed storage for remotes, gaming equipment, media devices, and everyday items — all finished to match your TV unit and room interior. Practical storage that does not compromise on design.",
    heroImage: gallery("tv-drawers", tvDrawerImages)[0],
    gallery: gallery("tv-drawers", tvDrawerImages),
    benefits: [
      "Concealed media and accessory storage",
      "Matched to your TV unit design",
      "Soft-close drawer options",
      "Cable routing integrated",
      "Custom dimensions for your space",
    ],
    customization: [
      {
        title: "Configurations",
        items: ["Lowline drawers", "Tall storage columns", "Combined open & closed", "Corner units"],
      },
      {
        title: "Drawer Layouts",
        items: ["Deep media drawers", "Shallow accessory trays", "Divided compartments"],
      },
      {
        title: "Finishes",
        items: ["Matching media wall panels", "Contrast accents", "Handle-less push-to-open"],
      },
    ],
    faq: defaultFaq("TV drawers"),
    seoTitle: "TV Drawers UAE | Al-Awan Furniture",
    seoDescription:
      "Custom TV drawers in the UAE. Organized, elegant storage designed around your entertainment area. Get a free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["TV Units"],
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Living & Bedroom Furniture",
    description: "Custom pieces for the heart of your home",
    services: [
      "sofa-bed-upholstery",
      "custom-sofas",
      "custom-beds",
      "vanity-tables",
      "side-tables",
    ],
  },
  {
    title: "Storage & Media",
    description: "Smart storage and entertainment solutions",
    services: [
      "cupboards",
      "tv-units",
      "tv-drawers",
      "entryway-furniture",
      "shoe-racks",
    ],
  },
  {
    title: "Interior Finishing",
    description: "Details that complete your interior",
    services: ["curtains", "wall-paneling"],
  },
  {
    title: "Specialized Rooms",
    description: "Purpose-built spaces for every family member",
    services: ["kids-rooms", "girls-rooms", "gaming-rooms"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
