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
