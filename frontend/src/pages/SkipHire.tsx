import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, AlertTriangle, Truck, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";
// import SkipContentsModal from "@/components/SkipContentsModal";

interface SkipData {
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

const skipData: SkipData[] = [
  {
    id: 4,
    title: "4 Yard Skip",
    price: 211,
    hirePeriod: "14 days",
    roadSuitable: true,
    permitRequired: true,
    capacity: "30–40 bin bags",
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
    whatFits: ["Large industrial projects", "Major construction sites", "High-volume commercial waste", "Demolition projects"],
    specialNotes: "Private land only - Not suitable for road placement",
    category: 'restricted',
    image: "/images/40-yard.svg"
  }
];

const SkipCard = ({ skip }: { skip: SkipData }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [showContentsModal, setShowContentsModal] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'standard': return 'border-green-500 bg-green-50';
      case 'limited': return 'border-yellow-500 bg-yellow-50';
      case 'restricted': return 'border-purple-500 bg-purple-50';
      default: return 'border-gray-300';
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'standard': return <Badge className="bg-green-600 text-white">Standard</Badge>;
      case 'limited': return <Badge className="bg-yellow-600 text-white">Limited Period</Badge>;
      case 'restricted': return <Badge className="bg-red-600 text-white">Private Land Only</Badge>;
      default: return null;
    }
  };

  const handleSelect = () => {
    setIsSelected(!isSelected);
    toast({
      title: isSelected ? "Skip Removed" : "Skip Selected",
      description: isSelected 
        ? `${skip.title} removed from selection` 
        : `${skip.title} added to selection - £${skip.price}`,
    });
  };

  return (
    <>
      <Card className={`relative transition-all duration-300 hover:shadow-lg ${getCategoryColor(skip.category)} ${isSelected ? 'ring-2 ring-green-600' : ''}`}>
        {skip.isPopular && (
          <div className="absolute -top-3 left-4 z-10">
            <Badge className="bg-green-600 text-white px-3 py-1">Most Popular</Badge>
          </div>
        )}
        
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold text-gray-900">{skip.title}</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                {getCategoryBadge(skip.category)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">£{skip.price}</div>
              <div className="text-sm text-gray-600">{skip.hirePeriod}</div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              {skip.roadSuitable ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <X className="h-4 w-4 text-red-600" />
              )}
              <span className="text-sm">Road Suitable</span>
            </div>
            
            <div className="flex items-center gap-2">
              {skip.roadSuitable && skip.permitRequired ? (
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
              ) : skip.permitRequired ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <X className="h-4 w-4 text-red-600" />
              )}
              <span className="text-sm">
                {skip.roadSuitable && skip.permitRequired ? "Permit if on road" : skip.permitRequired ? "Permit Required" : "No Permit"}
              </span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border space-y-2">
            {skip.image && (
                <img 
                src={skip.image} 
                alt={`${skip.title} image`} className="w-full h-40 object-cover rounded-md border" 
                />
                )}
                
                <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-gray-600" />
                    <span className="font-medium text-sm">Capacity: {skip.capacity}</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{skip.useCase}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm text-gray-900">What fits in this skip?</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowContentsModal(true)}
                className="text-green-600 hover:text-green-700 hover:bg-green-50 p-1 h-auto"
              >
                <Info className="h-4 w-4 mr-1" />
                <span className="text-xs">More info</span>
              </Button>
            </div>

            {/* EXTRA FEAT TO CONSIDER:::TO DO LATER */}
            {/* <div className="flex flex-wrap gap-1">
              {skip.whatFits.slice(0, 3).map((item, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {item}
                </Badge>
              ))}
              {skip.whatFits.length > 3 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowContentsModal(true)}
                  className="text-gray-500 hover:text-gray-700 p-1 h-auto"
                >
                  <span className="text-xs">+{skip.whatFits.length - 3} more</span>
                </Button>
              )}
            </div> */}
          </div>

          {skip.specialNotes && (
            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <p className="text-sm text-yellow-800">{skip.specialNotes}</p>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter>
          <Button 
            onClick={handleSelect}
            className={`w-full ${isSelected ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'}`}
          >
            {isSelected ? 'Selected ✓' : 'Select This Skip'}
          </Button>
        </CardFooter>
      </Card>

      {/* <SkipContentsModal
        isOpen={showContentsModal}
        onClose={() => setShowContentsModal(false)}
        skip={skip}
      /> */}
    </>
  );
};

const SkipHire = () => {
  const standardSkips = skipData.filter(skip => skip.category === 'standard');
  const limitedSkips = skipData.filter(skip => skip.category === 'limited');
  const restrictedSkips = skipData.filter(skip => skip.category === 'restricted');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Choose Your Skip Size
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Select the skip size that best suits your needs
            </p>
            
            {/* Progress Indicator */}
            <div className="flex justify-center items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4" />
                </div>
                <span>Postcode</span>
              </div>
              <div className="w-8 h-px bg-green-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4" />
                </div>
                <span>Waste Type</span>
              </div>
              <div className="w-8 h-px bg-green-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-black font-bold">
                  3
                </div>
                <span className="font-bold">Select Skip</span>
              </div>
              <div className="w-8 h-px bg-gray-600"></div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  4
                </div>
                <span>Permit Check</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Legend */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-lg font-semibold mb-4">Skip Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 border border-green-200 rounded-lg bg-green-50">
              <Badge className="bg-green-600 text-white">Standard</Badge>
              <span className="text-sm">14-day hire, road suitable with permit</span>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-yellow-200 rounded-lg bg-yellow-50">
              <Badge className="bg-yellow-600 text-white">Limited Period</Badge>
              <span className="text-sm">Shorter hire period available</span>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-red-200 rounded-lg bg-red-50">
              <Badge className="bg-red-600 text-white">Private Land Only</Badge>
              <span className="text-sm">Not suitable for road placement</span>
            </div>
          </div>
        </div>

        {/* Standard Skips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Standard Skips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {standardSkips.map((skip) => (
              <SkipCard key={skip.id} skip={skip} />
            ))}
          </div>
        </div>

        {/* Limited Period Skips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Limited Period Skips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {limitedSkips.map((skip) => (
              <SkipCard key={skip.id} skip={skip} />
            ))}
          </div>
        </div>

        {/* Restricted Skips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Roll-on Roll-off Skips (Private Land Only)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restrictedSkips.map((skip) => (
              <SkipCard key={skip.id} skip={skip} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
          <p className="text-lg mb-6">Our experts are here to help you select the perfect skip for your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Call Us: 0800 123 4567
            </Button>
            <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-white hover:bg-gray-100">
              Request Callback
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipHire;