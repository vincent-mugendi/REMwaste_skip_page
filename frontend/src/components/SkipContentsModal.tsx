import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Ruler, Package, AlertTriangle } from "lucide-react";

interface SkipContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  skip: {
    id: number;
    title: string;
    capacity: string;
    whatFits: string[];
    useCase: string;
    specialNotes?: string;
  };
}

const SkipContentsModal = ({ isOpen, onClose, skip }: SkipContentsModalProps) => {
  const getSkipDimensions = (skipId: number) => {
    const dimensions: { [key: number]: string } = {
      4: "L: 1.2m × W: 1.8m × H: 1.2m",
      5: "L: 1.5m × W: 1.8m × H: 1.2m", 
      6: "L: 1.8m × W: 1.8m × H: 1.2m",
      8: "L: 2.4m × W: 1.8m × H: 1.2m",
      10: "L: 3.0m × W: 1.8m × H: 1.2m",
      12: "L: 3.7m × W: 1.8m × H: 1.2m",
      14: "L: 4.3m × W: 1.8m × H: 1.2m",
      16: "L: 4.9m × W: 1.8m × H: 1.2m",
      20: "L: 6.1m × W: 2.4m × H: 1.5m",
      40: "L: 12.2m × W: 2.4m × H: 1.5m"
    };
    return dimensions[skipId] || "Dimensions available on request";
  };

  const getDetailedExamples = (skipId: number) => {
    const examples: { [key: number]: { household: string[], garden: string[], construction: string[] } } = {
      4: {
        household: ["Single bed mattress", "Small wardrobe", "Chair", "Small table", "Bags of clothes"],
        garden: ["Small hedge trimmings", "Grass cuttings (2-3 bags)", "Small plant pots", "Garden tools"],
        construction: ["Bathroom tiles", "Small sink", "Toilet", "Radiator"]
      },
      6: {
        household: ["2-seater sofa", "Double mattress", "Washing machine", "Dining table", "Multiple bin bags"],
        garden: ["Fence panels (2-3)", "Medium shrub", "Garden furniture set", "Shed contents"],
        construction: ["Kitchen units (3-4)", "Bathroom suite", "Plasterboard sheets", "Bricks (small amount)"]
      },
      8: {
        household: ["3-seater sofa", "Wardrobe", "Chest of drawers", "TV unit", "Carpeting"],
        garden: ["Large tree branches", "Decking boards", "Garden shed", "Patio slabs"],
        construction: ["Kitchen renovation waste", "Concrete (small amount)", "Timber waste", "Rubble"]
      },
      12: {
        household: ["Full bedroom set", "Living room furniture", "Appliances", "Carpets from 2 rooms"],
        garden: ["Large garden clearance", "Greenhouse", "Large amount of soil", "Multiple fence panels"],
        construction: ["Bathroom renovation", "Small extension waste", "Roofing materials", "Mixed building waste"]
      },
      20: {
        household: ["House clearance", "Multiple rooms of furniture", "Large appliances", "Commercial waste"],
        garden: ["Large landscaping project", "Tree removal", "Major garden renovation", "Commercial grounds"],
        construction: ["House renovation", "Demolition waste", "Heavy construction materials", "Commercial fit-out"]
      }
    };
    
    return examples[skipId] || examples[6]; // Default to 6 yard examples
  };

  const examples = getDetailedExamples(skip.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            What fits in a {skip.title}?
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Capacity and Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">Capacity</span>
              </div>
              <p className="text-green-700">{skip.capacity}</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Ruler className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-800">Dimensions</span>
              </div>
              <p className="text-blue-700 text-sm">{getSkipDimensions(skip.id)}</p>
            </div>
          </div>

          {/* Use Case */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Ideal for:</h3>
            <p className="text-gray-700">{skip.useCase}</p>
          </div>

          {/* Examples by Category */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Example Items</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800 flex items-center gap-2">
                  🏠 Household Items
                </h4>
                <div className="space-y-1">
                  {examples.household.map((item, index) => (
                    <Badge key={index} variant="outline" className="text-xs block w-fit">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800 flex items-center gap-2">
                  🌿 Garden Waste
                </h4>
                <div className="space-y-1">
                  {examples.garden.map((item, index) => (
                    <Badge key={index} variant="outline" className="text-xs block w-fit">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800 flex items-center gap-2">
                  🔨 Construction
                </h4>
                <div className="space-y-1">
                  {examples.construction.map((item, index) => (
                    <Badge key={index} variant="outline" className="text-xs block w-fit">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current What Fits */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Quick Reference</h4>
            <div className="flex flex-wrap gap-1">
              {skip.whatFits.map((item, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          {/* Special Notes */}
          {skip.specialNotes && (
            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 mb-1">Important Note</h4>
                  <p className="text-sm text-yellow-700">{skip.specialNotes}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">💡 Loading Tips</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Load heavy items first (bottom of skip)</li>
              <li>• Break down large items where possible</li>
              <li>• Don't overfill - waste must not exceed skip height</li>
              <li>• Distribute weight evenly across the skip</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkipContentsModal;