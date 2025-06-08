import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Legend.tsx
import { Badge } from "@/components/ui/badge";
const Legend = () => (
// Container for the skip categories legend
_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm mb-8", children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Skip Categories" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "flex items-center space-x-3 p-3 border border-green-200 rounded-lg bg-green-50", children: [_jsx(Badge, { className: "bg-green-600 text-white", children: "Standard" }), _jsx("span", { className: "text-sm", children: "On-road skips, 14-day hire, up to 8 yards" })] }), _jsxs("div", { className: "flex items-center space-x-3 p-3 border border-yellow-200 rounded-lg bg-yellow-50", children: [_jsx(Badge, { className: "bg-yellow-600 text-white", children: "Limited Period" }), _jsx("span", { className: "text-sm", children: "Shorter hire or permit-needed road skips" })] }), _jsxs("div", { className: "flex items-center space-x-3 p-3 border border-red-200 rounded-lg bg-red-50", children: [_jsx(Badge, { className: "bg-purple-600 text-white", children: "Private Land Only" }), _jsx("span", { className: "text-sm", children: "Not suitable for road placement (large/RoRo)" })] })] })] }));
export default Legend;
