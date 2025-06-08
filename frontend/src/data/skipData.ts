export interface SkipData {
    id: number;
    title: string;
    price: number;
    hirePeriod: string;
    roadSuitable: boolean;
    permitRequired: boolean;
    capacity: string;
    useCase: string;
    whatFits: string[];
    specialNotes?: string;
    category: 'standard' | 'limited' | 'restricted';
    isPopular?: boolean;
    image?: string;
  }
  
  export const skipData: SkipData[] = [
    {
      id: 4,
      title: "4 Yard Skip",
      price: 211,
      hirePeriod: "14 days",
      roadSuitable: true,
      permitRequired: true,
      capacity: "30–40 bin bags",
      useCase: "Small home clear-outs, garden waste, or bathroom refits",
      whatFits: ["Small furniture", "Garden waste", "Bathroom tiles", "General household items"],
      category: 'standard',
      image: "/images/4-yard.svg"
    },
    {
      id: 5,
      title: "5 Yard Skip",
      price: 241,
      hirePeriod: "14 days",
      roadSuitable: true,
      permitRequired: true,
      capacity: "40–50 bin bags",
      useCase: "Small renovation jobs or garden clearances",
      whatFits: ["Kitchen units", "Small appliances", "Fence panels", "Shed clearance"],
      category: 'standard',
      image: "/images/5-yard.svg"
    },
    {
        id: 6,
        title: "6 Yard Skip",
        price: 264,
        hirePeriod: "14 days",
        roadSuitable: true,
        permitRequired: true,
        capacity: "50–60 bin bags",
        useCase: "Popular for builders; ideal for bulky waste like furniture",
        whatFits: ["Old sofa", "Wardrobes", "Plasterboard", "Mixed household waste"],
        category: 'standard',
        isPopular: true,
        image: "/images/6-yard.svg"
      },
      {
        id: 8,
        title: "8 Yard Skip",
        price: 295,
        hirePeriod: "14 days",
        roadSuitable: true,
        permitRequired: true,
        capacity: "60–80 bin bags",
        useCase: "Renovation waste and builder's rubble",
        whatFits: ["Kitchen renovation", "Bathroom suite", "Concrete & rubble", "Timber waste"],
        category: 'standard',
        isPopular: true,
        image: "/images/8-yard.svg"
      },
      {
        id: 10,
        title: "10 Yard Skip",
        price: 356,
        hirePeriod: "14 days",
        roadSuitable: true,
        permitRequired: true,
        capacity: "80–100 bin bags",
        useCase: "Large household projects or light construction debris",
        whatFits: ["House clearance", "Large furniture sets", "Construction debris", "Landscaping waste"],
        category: 'standard',
        image: "/images/10-yard.svg"
      },
      {
        id: 12,
        title: "12 Yard Skip",
        price: 390,
        hirePeriod: "14 days",
        roadSuitable: true,
        permitRequired: true,
        capacity: "100–120 bin bags",
        useCase: "Large home clearances, bulky waste (non-heavy)",
        whatFits: ["Whole room clearance", "Large garden project", "Shop fitting", "Office clearance"],
        category: 'standard',
        image: "/images/12-yard.svg"
      },
      {
        id: 14,
        title: "14 Yard Skip",
        price: 434,
        hirePeriod: "14 days",
        roadSuitable: true,
        permitRequired: true,
        capacity: "120–140 bin bags",
        useCase: "House renovations or commercial cleanups",
        whatFits: ["Full house renovation", "Commercial waste", "Large construction project", "Bulky commercial items"],
        category: 'standard',
        image: "/images/14-yard.svg"
      },
      {
        id: 16,
        title: "16 Yard Skip",
        price: 510,
        hirePeriod: "7 days",
        roadSuitable: true,
        permitRequired: true,
        capacity: "140–160 bin bags",
        useCase: "Bulky light waste, shop refits, packaging",
        whatFits: ["Shop refit", "Large packaging", "Light bulky waste", "Commercial clearance"],
        specialNotes: "Shorter hire period – only 7 days",
        category: 'limited',
        image: "/images/16-yard.svg"
      },
      {
        id: 20,
        title: "20 Yard Skip (RoRo)",
        price: 802,
        hirePeriod: "14 days",
        roadSuitable: false,
        permitRequired: false,
        capacity: "200+ bin bags",
        useCase: "Construction sites, commercial projects",
        whatFits: ["Heavy construction waste", "Large commercial projects", "Industrial waste", "Demolition debris"],
        specialNotes: "Private land only - Not suitable for road placement",
        category: 'restricted',
        image: "/images/20-yard.svg"
      },
      {
        id: 40,
        title: "40 Yard Skip (RoRo)",
        price: 877,
        hirePeriod: "14 days",
        roadSuitable: false,
        permitRequired: false,
        capacity: "400+ bin bags",
        useCase: "Industrial/high-volume waste",
        whatFits: ["Large industrial projects", "Major construction sites", "High-volume commercial waste", "Demolition projects"],
        specialNotes: "Private land only - Not suitable for road placement",
        category: 'restricted',
        image: "/images/40-yard.svg"
      }
  ];
  