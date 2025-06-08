import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// src/components/pages/SkipHire.tsx
/**
 * SkipHire Page Component
 * ------------------------
 * This page displays categorized skip hire options fetched from an external data source.
 * Categories include:
 * - Standard Skips
 * - Limited Period Skips
 * - Roll-on Roll-off Skips (Restricted)
 *
 * The page also handles loading and error states and includes a legend for understanding skip types.
 */
// ────────────────────────────────────────────────────────────────────────────────
// Imports
// ────────────────────────────────────────────────────────────────────────────────
import Header from "@/components/layout/SkipHireHeader"; // Page header
import Footer from "@/components/layout/SkipHireFooter"; // Page footer
import SkipCard from "@/components/SkipCard"; // Card component to display each skip
import Legend from "@/components/Legend"; // Legend explaining skip categories
import { useSkipData } from "@/data/useSkipData"; // Custom hook to fetch skip data
// ────────────────────────────────────────────────────────────────────────────────
// Component: SkipHire
// ────────────────────────────────────────────────────────────────────────────────
const SkipHire = () => {
    // Destructure skip data and loading/error state from custom hook
    const { data: skipData, loading, error } = useSkipData();
    // Categorize skips into three groups
    const standardSkips = (skipData === null || skipData === void 0 ? void 0 : skipData.filter(skip => skip.category === 'standard')) || [];
    const limitedSkips = (skipData === null || skipData === void 0 ? void 0 : skipData.filter(skip => skip.category === 'limited')) || [];
    const restrictedSkips = (skipData === null || skipData === void 0 ? void 0 : skipData.filter(skip => skip.category === 'restricted')) || [];
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(Header, {}), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [_jsx(Legend, {}), loading && (_jsx("p", { className: "text-center text-gray-600 py-10", children: "Loading skips..." })), error && (_jsx("p", { className: "text-center text-red-600 py-10", children: "Failed to load skip data." })), !loading && !error && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Standard Skips" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: standardSkips.map((skip) => (_jsx(SkipCard, { skip: skip }, skip.id))) })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Limited Period Skips" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: limitedSkips.map((skip) => (_jsx(SkipCard, { skip: skip }, skip.id))) })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Roll-on Roll-off Skips (Private Land Only)" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: restrictedSkips.map((skip) => (_jsx(SkipCard, { skip: skip }, skip.id))) })] })] })), _jsx(Footer, {})] })] }));
};
export default SkipHire;
