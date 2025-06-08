import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, AlertTriangle, Truck, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import SkipContentsModal from "@/components/SkipContentsModal";
import Header from "@/components/layout/SkipHireHeader";
import Footer from "@/components/layout/SkipHireFooter";
import { skipData, SkipData } from "@/data/skipData";



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
      case 'restricted': return <Badge className="bg-purple-600 text-white">Private Land Only</Badge>;
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
            <div className="flex flex-wrap gap-1">
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
            </div>
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

      <SkipContentsModal
        isOpen={showContentsModal}
        onClose={() => setShowContentsModal(false)}
        skip={skip}
      />
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
      <Header />
      





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
              <Badge className="bg-purple-600 text-white">Private Land Only</Badge>
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

        {/* Footer */}
        <Footer />
        
      </div>


    </div>
  );
};

export default SkipHire;