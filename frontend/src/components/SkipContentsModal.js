import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Ruler, Package, AlertTriangle } from "lucide-react";
const SkipContentsModal = ({ isOpen, onClose, skip }) => {
    // Returns skip dimensions based on ID
    const getSkipDimensions = (skipId) => {
        const dimensions = {
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
    // Returns categorized example contents per skip ID
    const getDetailedExamples = (skipId) => {
        const examples = {
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
        return examples[skipId] || examples[6]; // Default fallback
    };
    const examples = getDetailedExamples(skip.id);
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-2xl max-h-[80vh] overflow-y-auto", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "text-xl font-bold text-gray-900", children: ["What fits in a ", skip.title, "?"] }) }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Package, { className: "h-5 w-5 text-green-600" }), _jsx("span", { className: "font-medium text-green-800", children: "Capacity" })] }), _jsx("p", { className: "text-green-700", children: skip.capacity })] }), _jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Ruler, { className: "h-5 w-5 text-blue-600" }), _jsx("span", { className: "font-medium text-blue-800", children: "Dimensions" })] }), _jsx("p", { className: "text-blue-700 text-sm", children: getSkipDimensions(skip.id) })] })] }), _jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [_jsx("h3", { className: "font-medium text-gray-900 mb-2", children: "Ideal for:" }), _jsx("p", { className: "text-gray-700", children: skip.useCase })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Example Items" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium text-gray-800 flex items-center gap-2", children: "\uD83C\uDFE0 Household Items" }), _jsx("div", { className: "space-y-1", children: examples.household.map((item, index) => (_jsx(Badge, { variant: "outline", className: "text-xs block w-fit", children: item }, index))) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium text-gray-800 flex items-center gap-2", children: "\uD83C\uDF3F Garden Waste" }), _jsx("div", { className: "space-y-1", children: examples.garden.map((item, index) => (_jsx(Badge, { variant: "outline", className: "text-xs block w-fit", children: item }, index))) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium text-gray-800 flex items-center gap-2", children: "\uD83D\uDD28 Construction" }), _jsx("div", { className: "space-y-1", children: examples.construction.map((item, index) => (_jsx(Badge, { variant: "outline", className: "text-xs block w-fit", children: item }, index))) })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium text-gray-900", children: "Quick Reference" }), _jsx("div", { className: "flex flex-wrap gap-1", children: skip.whatFits.map((item, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: item }, index))) })] }), skip.specialNotes && (_jsx("div", { className: "bg-yellow-50 border border-yellow-200 p-3 rounded-lg", children: _jsxs("div", { className: "flex items-start gap-2", children: [_jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600 mt-0.5" }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-yellow-800 mb-1", children: "Important Note" }), _jsx("p", { className: "text-sm text-yellow-700", children: skip.specialNotes })] })] }) })), _jsxs("div", { className: "bg-gray-100 p-4 rounded-lg", children: [_jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "\uD83D\uDCA1 Loading Tips" }), _jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [_jsx("li", { children: "\u2022 Load heavy items first (bottom of skip)" }), _jsx("li", { children: "\u2022 Break down large items where possible" }), _jsx("li", { children: "\u2022 Don't overfill - waste must not exceed skip height" }), _jsx("li", { children: "\u2022 Distribute weight evenly across the skip" })] })] })] })] }) }));
};
export default SkipContentsModal;
