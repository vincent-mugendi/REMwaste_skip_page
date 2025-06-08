import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
const Footer = () => {
    return (
    // Footer container with green background, white text, padding, rounded corners, and centered text
    _jsxs("div", { className: "bg-green-600 text-white p-8 rounded-lg text-center", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Need Help Choosing?" }), _jsx("p", { className: "text-lg mb-6", children: "Our experts are here to help you select the perfect skip for your project." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { size: "lg", className: "bg-white text-green-600 hover:bg-gray-100 hover:text-green-700 transition", children: "Call Us: 0800 123 4567" }), _jsx(Button, { size: "lg", variant: "outline", className: "border-white text-green-600 hover:bg-gray-100 hover:text-green-700 transition", children: "Request Callback" })] }), _jsx("p", { className: "text-sm mt-8", children: "\u00A9 Vincent Mugendi. All rights reserved." })] }));
};
export default Footer;
