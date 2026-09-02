import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import type { Service, ServiceGroup } from "@/types";

function gallery(folder: string, files: string[]): string[] {
  return files.map((f) => `/images/services/${folder}/${f}`);
}

const tvUnitImages = [
  "IMG-20251223-WA0110.jpg",
  "IMG-20251223-WA0111-1024x1010.jpg",
  "IMG-20251223-WA0112-819x1024.jpg",
  "IMG-20251223-WA0113-819x1024.jpg",
  "IMG-20251223-WA0114-910x1024.jpg",
  "IMG-20251223-WA0115-1024x974.jpg",
];

const cupboardImages = [
  "IMG-20251223-WA0101.jpg",
  "IMG-20251223-WA0102-981x1024.jpg",
  "IMG-20251223-WA0104.jpg",
  "IMG-20251223-WA0105.jpg",
  "IMG-20251223-WA0106-1024x1016.jpg",
  "IMG-20251223-WA0107-1024x683.jpg",
];

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

const sofaBedImages = [
  "IMG-20251223-WA0068-826x1024.jpg",
  "IMG-20251223-WA0069-830x1024.jpg",
  "IMG-20251223-WA0070-826x1024.jpg",
  "IMG-20251223-WA0071.jpg",
  "IMG-20251223-WA0072-1.jpg",
  "IMG-20251223-WA0073-756x1024.jpg",
];

const upholsteryGalleryImages = [
  ...sofaBedImages,
  "upholstery-gallery-01.jpeg",
  "upholstery-gallery-02.jpeg",
  "upholstery-gallery-03.jpeg",
  "upholstery-gallery-04.jpeg",
  "upholstery-gallery-05.jpeg",
  "upholstery-gallery-06.jpeg",
  "upholstery-gallery-07.jpeg",
  "upholstery-gallery-08.jpeg",
  "upholstery-gallery-09.jpeg",
  "upholstery-gallery-10.jpeg",
];

const dressingImages = [
  "IMG-20251223-WA0051.jpg",
  "IMG-20251223-WA0052-1.jpg",
  "IMG-20251223-WA0053-1024x1009.jpg",
  "IMG-20251223-WA0054.jpg",
  "IMG-20251223-WA0055-819x1024.jpg",
  "IMG-20251223-WA0056-682x1024.jpg",
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
    name: "Sofa & Bed Upholstery",
    shortName: "Upholstery",
    category: "living-bedroom",
    headline: "Sofa & Bed Upholstery That Refreshes Your Home",
    description:
      "Restore or transform your sofas and beds with premium upholstery tailored to your style and comfort.",
    intro:
      "Give your existing furniture a new life with professional sofa and bed upholstery. Whether you want to refresh worn fabrics, change colours to match a new interior, or upgrade cushioning for better comfort, our upholstery service is designed around your piece and your home. Ideal for homeowners across the UAE who want quality finishing without replacing perfectly good furniture frames.",
    heroImage: gallery("upholstery", ["IMG-20251223-WA0068-826x1024.jpg"])[0],
    gallery: gallery("upholstery", upholsteryGalleryImages),
    benefits: [
      "Refresh existing sofas and beds without full replacement",
      "Wide fabric and colour options",
      "Improved comfort with quality cushioning",
      "Tailored to your furniture dimensions",
      "Professional finishing and attention to detail",
    ],
    customization: [
      {
        title: "Fabrics",
        items: ["Linen", "Velvet", "Bouclé", "Performance fabrics", "Textured weaves"],
      },
      {
        title: "Colours",
        items: ["Neutrals", "Earth tones", "Deep accents", "Custom colour matching"],
      },
      {
        title: "Finishing",
        items: ["Piping & contrast trims", "Button detailing", "Cushion upgrades", "Headboard upholstery"],
      },
    ],
    faq: [
      {
        question: "Can you reupholster my existing sofa or bed?",
        answer:
          "Yes. We work with your existing furniture frames and replace or upgrade the upholstery to your chosen fabric and style.",
      },
      ...defaultFaq("upholstery").slice(1),
    ],
    seoTitle: "Sofa & Bed Upholstery UAE | Al-Awan Furniture",
    seoDescription:
      "Professional sofa and bed upholstery in the UAE. Refresh your furniture with premium fabrics, custom colours, and expert finishing. Request a free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Upholstery", "Bedrooms"],
  },
  {
    slug: "custom-sofas-beds",
    name: "Custom Sofas & Beds",
    shortName: "Sofas & Beds",
    category: "living-bedroom",
    headline: "Custom Sofas & Beds Designed for Your Home",
    description:
      "Bespoke sofas and beds crafted to your dimensions, style, and comfort preferences across the UAE.",
    intro:
      "Create furniture that truly belongs in your home. Our custom sofas and beds are designed around your room size, lifestyle, and aesthetic — from elegant master bedrooms to inviting living spaces. Choose configurations, materials, and finishes that reflect how you live, with every detail considered from frame to final stitch.",
    heroImage: gallery("sofas-beds", ["IMG-20251223-WA0071.jpg"])[0],
    gallery: gallery("sofas-beds", sofaBedImages),
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
        title: "Sofa Configurations",
        items: ["L-shape", "Sectional", "Straight sofas", "Accent seating"],
      },
      {
        title: "Materials",
        items: ["Wood veneers", "Lacquer finishes", "Upholstered panels", "Metal accents"],
      },
    ],
    faq: defaultFaq("custom sofa or bed"),
    seoTitle: "Custom Sofas & Beds UAE | Al-Awan Furniture",
    seoDescription:
      "Custom-made sofas and beds for UAE homes. Bespoke designs, premium materials, and professional installation. Get your free quotation today.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Bedrooms", "Sofas"],
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
    heroImage: gallery("tv-units", ["IMG-20251223-WA0110.jpg"])[0],
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
    slug: "dressing-tables",
    name: "Dressing Tables",
    shortName: "Dressing Tables",
    category: "living-bedroom",
    headline: "Elegant Dressing Tables for Your Bedroom",
    description:
      "Custom dressing tables and vanity units designed with storage, mirrors, and finishes to complement your bedroom.",
    intro:
      "A well-designed dressing table brings both function and refinement to your bedroom. We create custom vanity units with thoughtfully planned drawer storage, mirror placement, and surface space — finished to harmonize with your existing bedroom furniture. From compact designs for smaller rooms to statement pieces with ample storage, every detail is tailored to your routine.",
    heroImage: gallery("dressing-tables", ["IMG-20251223-WA0051.jpg"])[0],
    gallery: gallery("dressing-tables", dressingImages),
    benefits: [
      "Sized to fit your bedroom layout",
      "Integrated mirror and lighting options",
      "Drawer and compartment storage",
      "Coordinated with bedroom furniture",
      "Premium finishes and hardware",
    ],
    customization: [
      {
        title: "Configurations",
        items: ["Wall-mounted", "Freestanding", "Corner units", "Extended drawer banks"],
      },
      {
        title: "Mirror Options",
        items: ["Full-length", "Round accent", "Integrated LED", "Framed designs"],
      },
      {
        title: "Finishes",
        items: ["Wood veneer", "Lacquer", "Upholstered seat", "Metal handles"],
      },
    ],
    faq: defaultFaq("dressing table"),
    seoTitle: "Custom Dressing Tables UAE | Al-Awan Furniture",
    seoDescription:
      "Bespoke dressing tables and vanity units for UAE bedrooms. Custom storage, mirrors, and premium finishes. Request your free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Bedrooms"],
  },
  {
    slug: "dp-closing",
    name: "DP Closing",
    shortName: "DP Closing",
    category: "interior-finishing",
    headline: "Professional DP Closing for Flawless Interiors",
    description:
      "Expert DP closing and finishing work to complete your interior with clean, polished transitions and details.",
    intro:
      "DP closing is the detailed finishing work that gives your interior a seamless, professional appearance. We handle the precise closing of gaps, joints, and transitions between built-in furniture, wall panels, ceilings, and architectural elements — ensuring every corner and edge looks intentional and refined. Essential for new builds, renovations, and custom furniture installations across the UAE.",
    heroImage: gallery("wall-paneling", ["IMG-20251223-WA0074-1.jpg"])[0],
    gallery: gallery("wall-paneling", wallPanelImages.slice(3)),
    benefits: [
      "Clean, seamless interior transitions",
      "Professional finishing around built-ins",
      "Attention to joints and edges",
      "Complements custom furniture installations",
      "Polished final appearance",
    ],
    customization: [
      {
        title: "Applications",
        items: ["Around wardrobes", "Media wall edges", "Ceiling transitions", "Panel junctions"],
      },
      {
        title: "Finishing",
        items: ["Paint-ready surfaces", "Colour-matched closing", "Shadow gap details", "Trim integration"],
      },
    ],
    faq: [
      {
        question: "What is DP closing?",
        answer:
          "DP closing refers to the detailed finishing work that closes gaps and creates clean transitions between furniture, panels, walls, and ceilings for a polished interior result.",
      },
      ...defaultFaq("DP closing").slice(1),
    ],
    seoTitle: "DP Closing Services UAE | Al-Awan Furniture",
    seoDescription:
      "Professional DP closing and interior finishing in the UAE. Seamless transitions and polished details for custom interiors. Get a free quote.",
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    relatedProjectCategories: ["Wall Panels"],
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
    heroImage: gallery("girls-rooms", ["IMG-20251223-WA0045.jpg"])[0],
    gallery: gallery("girls-rooms", kidsImages),
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
    heroImage: gallery("gaming-rooms", ["IMG-20251223-WA0074-1.jpg"])[0],
    gallery: gallery("gaming-rooms", [
      "IMG-20251223-WA0074-1.jpg",
      "IMG-20251223-WA0075-1019x1024.jpg",
      "IMG-20251223-WA0076-853x1024.jpg",
      "IMG-20251223-WA0077-1024x1021.jpg",
      "IMG-20251223-WA0078-842x1024.jpg",
      "IMG-20251223-WA0079-682x1024.jpg",
    ]),
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
    slug: "tv-drawers",
    name: "TV Drawers & Storage Units",
    shortName: "TV Drawers",
    category: "storage-media",
    headline: "TV Drawers & Storage Units for Organized Living",
    description:
      "Functional TV drawer units and media storage designed to keep your living space tidy and elegant.",
    intro:
      "Keep your entertainment area organized with custom TV drawer and storage units. Designed to sit beneath or alongside your media wall, these units provide concealed storage for remotes, gaming equipment, media devices, and everyday items — all finished to match your TV unit and room interior. Practical storage that does not compromise on design.",
    heroImage: gallery("tv-drawers", ["IMG-20251223-WA0116-852x1024.jpg"])[0],
    gallery: gallery("tv-drawers", tvUnitImages),
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
    faq: defaultFaq("TV storage unit"),
    seoTitle: "TV Drawers & Storage Units UAE | Al-Awan Furniture",
    seoDescription:
      "Custom TV drawers and media storage units in the UAE. Organized, elegant storage designed around your entertainment area. Get a free quote.",
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
      "custom-sofas-beds",
      "dressing-tables",
    ],
  },
  {
    title: "Storage & Media",
    description: "Smart storage and entertainment solutions",
    services: ["cupboards", "tv-units", "tv-drawers"],
  },
  {
    title: "Interior Finishing",
    description: "Details that complete your interior",
    services: ["dp-closing", "curtains", "wall-paneling"],
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
