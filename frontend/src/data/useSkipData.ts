// src/data/useSkipData.ts

import { useEffect, useState } from "react";

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
  category: "standard" | "limited" | "restricted";
  isPopular?: boolean;
  image?: string;
}

const SKIP_DATA_URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

// Static mapping by skip size yard (must match the size field from API)
const STATIC_DETAILS_BY_SIZE: Record<
  number,
  { capacity: string; useCase: string; whatFits: string[]; image: string }
> = {
  4: {
    capacity: "30–40 bin bags",
    useCase: "Small home clear-outs, garden waste, or bathroom refits",
    whatFits: ["Small furniture", "Garden waste", "Bathroom tiles", "General household items"],
    image: "/images/4-yard.svg",
  },
  5: {
    capacity: "40–50 bin bags",
    useCase: "Small renovation jobs or garden clearances",
    whatFits: ["Kitchen units", "Small appliances", "Fence panels"],
    image: "/images/5-yard.svg",
  },
  6: {
    capacity: "50–60 bin bags",
    useCase: "Medium renovation jobs and garden clearances",
    whatFits: ["Kitchen units", "Small appliances", "Fence panels"],
    image: "/images/6-yard.svg",
  },
  8: {
    capacity: "70–80 bin bags",
    useCase: "Larger house refurbishments and big garden projects",
    whatFits: ["Furniture", "Green waste", "Construction debris"],
    image: "/images/8-yard.svg",
  },
  10: {
    capacity: "80–100 bin bags",
    useCase: "Large household projects or light construction debris",
    whatFits: ["House clearance", "Large furniture sets", "Construction debris", "Landscaping waste"],
    image: "/images/10-yard.svg",
  },
  12: {
    capacity: "100–120 bin bags",
    useCase: "Large home clearances, bulky waste (non-heavy)",
    whatFits: ["Whole room clearance", "Large garden project", "Shop fitting", "Office clearance"],
    image: "/images/12-yard.svg",
  },
  14: {
    capacity: "120–140 bin bags",
    useCase: "House renovations or commercial cleanups",
    whatFits: ["Full house renovation", "Commercial waste", "Large construction project", "Bulky commercial items"],
    image: "/images/14-yard.svg",
  },
  16: {
    capacity: "140–160 bin bags",
    useCase: "Bulky light waste, shop refits, packaging",
    whatFits: ["Shop refit", "Large packaging", "Light bulky waste", "Commercial clearance"],
    image: "/images/16-yard.svg",
  },
  20: {
    capacity: "200+ bin bags",
    useCase: "Construction sites, commercial projects",
    whatFits: ["Heavy construction waste", "Large commercial projects", "Industrial waste", "Demolition debris"],
    specialNotes: "Private land only - Not suitable for road placement",
    image: "/images/20-yard.svg",
  },
  40: {
    capacity: "400+ bin bags",
    useCase: "Industrial/high-volume waste",
    whatFits: ["Large industrial projects", "Major construction sites", "High-volume commercial waste", "Demolition projects"],
    specialNotes: "Private land only - Not suitable for road placement",
    image: "/images/40-yard.svg",
  },
  // Add more sizes if needed
};

function mapSkipData(apiData: any[]): SkipData[] {
    return apiData.map(item => {
      const { size, hire_period_days, price_before_vat, allowed_on_road, forbidden } = item;
  
      let category: SkipData["category"];
      if (allowed_on_road && hire_period_days >= 14 && size <= 8) {
        category = "standard";
      } else if (allowed_on_road && hire_period_days < 14) {
        category = "limited";
      } else {
        category = "restricted";
      }
  
      const staticDetails = STATIC_DETAILS_BY_SIZE[size] ?? {
        capacity: "N/A", useCase: "General waste", whatFits: [], image: "/images/default.svg"
      };
  
      return {
        id: item.id,
        title: `${size}-Yard Skip`,
        price: price_before_vat,
        hirePeriod: `${hire_period_days} days hire`,
        roadSuitable: allowed_on_road,
        permitRequired: allowed_on_road,
        capacity: staticDetails.capacity,
        useCase: staticDetails.useCase,
        whatFits: staticDetails.whatFits,
        specialNotes: forbidden ? "Placement restrictions apply" : staticDetails.specialNotes,
        category,
        isPopular: size === 8,
        image: staticDetails.image,
      };
    });
  }
  
  export function useSkipData() {
    const [data, setData] = useState<SkipData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      setLoading(true);
      setError(null);
      fetch(SKIP_DATA_URL)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then(raw => setData(mapSkipData(raw)))
        .catch(err => { setError(err.message); setData(null); })
        .finally(() => setLoading(false));
    }, []);
  
    return { data, loading, error };
  }