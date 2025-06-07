import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, AlertTriangle, Truck, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";

import type { SkipData } from "./types";

interface SkipCardProps {
  skip: SkipData;
}

export const SkipCard = ({ skip }: SkipCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [showContentsModal, setShowContentsModal] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'standard': return 'border-green-500 bg-green-50';
      case 'limited': return 'border-yellow-500 bg-yellow-50';
      case 'restricted': return 'border-red-500 bg-red-50';
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
              {skip.roadSuitable ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-red-600" />}
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
                {skip.roadSuitable && skip.permitRequired
                  ? "Permit if on road"
                  : skip.permitRequired
                    ? "Permit Required"
                    : "No Permit"}
              </span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
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

      {/* Optional: SkipContentsModal here */}
    </>
  );
};

export default SkipCard;