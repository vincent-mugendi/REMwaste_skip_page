import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// src/components/SkipCard.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, AlertTriangle, Truck, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import SkipContentsModal from "@/components/SkipContentsModal";
const SkipCard = ({ skip }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [showContentsModal, setShowContentsModal] = useState(false);
    // Returns tailwind classes for skip category styling
    const getCategoryColor = (category) => {
        switch (category) {
            case 'standard': return 'border-green-500 bg-green-50';
            case 'limited': return 'border-yellow-500 bg-yellow-50';
            case 'restricted': return 'border-purple-500 bg-purple-50';
            default: return 'border-gray-300';
        }
    };
    // Returns badge component based on category
    const getCategoryBadge = (category) => {
        switch (category) {
            case 'standard': return _jsx(Badge, { className: "bg-green-600 text-white", children: "Standard" });
            case 'limited': return _jsx(Badge, { className: "bg-yellow-600 text-white", children: "Limited Period" });
            case 'restricted': return _jsx(Badge, { className: "bg-purple-600 text-white", children: "Private Land Only" });
            default: return null;
        }
    };
    // Toggle selection and show toast notification
    const handleSelect = () => {
        setIsSelected(!isSelected);
        toast({
            title: isSelected ? "Skip Removed" : "Skip Selected",
            description: isSelected
                ? `${skip.title} removed from selection`
                : `${skip.title} added to selection - £${skip.price}`,
        });
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Card, { className: `relative transition-all duration-300 hover:shadow-lg ${getCategoryColor(skip.category)} ${isSelected ? 'ring-2 ring-green-600' : ''}`, children: [skip.isPopular && (_jsx("div", { className: "absolute -top-3 left-4 z-10", children: _jsx(Badge, { className: "bg-green-600 text-white px-3 py-1", children: "Most Popular" }) })), _jsx(CardHeader, { className: "pb-3", children: _jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl font-bold text-gray-900", children: skip.title }), _jsx("div", { className: "flex items-center gap-2 mt-2", children: getCategoryBadge(skip.category) })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-3xl font-bold text-green-600", children: ["\u00A3", skip.price] }), _jsx("div", { className: "text-sm text-gray-600", children: skip.hirePeriod })] })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [skip.roadSuitable ? (_jsx(Check, { className: "h-4 w-4 text-green-600" })) : (_jsx(X, { className: "h-4 w-4 text-red-600" })), _jsx("span", { className: "text-sm", children: "Road Suitable" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [skip.roadSuitable && skip.permitRequired ? (_jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600" })) : skip.permitRequired ? (_jsx(Check, { className: "h-4 w-4 text-green-600" })) : (_jsx(X, { className: "h-4 w-4 text-red-600" })), _jsx("span", { className: "text-sm", children: skip.roadSuitable && skip.permitRequired ? "Permit if on road" : skip.permitRequired ? "Permit Required" : "No Permit" })] })] }), _jsxs("div", { className: "bg-white p-3 rounded-lg border space-y-2", children: [skip.image && (_jsx("img", { src: skip.image, alt: `${skip.title} image`, className: "w-full h-40 object-cover rounded-md border" })), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Truck, { className: "h-4 w-4 text-gray-600" }), _jsxs("span", { className: "font-medium text-sm", children: ["Capacity: ", skip.capacity] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h4", { className: "font-medium text-sm text-gray-900", children: "What fits in this skip?" }), _jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setShowContentsModal(true), className: "text-green-600 hover:text-green-700 hover:bg-green-50 p-1 h-auto", children: [_jsx(Info, { className: "h-4 w-4 mr-1" }), _jsx("span", { className: "text-xs", children: "More info" })] })] }), _jsxs("div", { className: "flex flex-wrap gap-1", children: [skip.whatFits.slice(0, 3).map((item, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: item }, index))), skip.whatFits.length > 3 && (_jsx(Button, { variant: "ghost", size: "sm", onClick: () => setShowContentsModal(true), className: "text-gray-500 hover:text-gray-700 p-1 h-auto", children: _jsxs("span", { className: "text-xs", children: ["+", skip.whatFits.length - 3, " more"] }) }))] })] }), skip.specialNotes && (_jsx("div", { className: "bg-yellow-50 border border-yellow-200 p-3 rounded-lg", children: _jsxs("div", { className: "flex items-start gap-2", children: [_jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600 mt-0.5" }), _jsx("p", { className: "text-sm text-yellow-800", children: skip.specialNotes })] }) }))] }), _jsx(CardFooter, { children: _jsx(Button, { onClick: handleSelect, className: `w-full ${isSelected ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'}`, children: isSelected ? 'Selected ✓' : 'Select This Skip' }) })] }), _jsx(SkipContentsModal, { isOpen: showContentsModal, onClose: () => setShowContentsModal(false), skip: skip })] }));
};
export default SkipCard;
