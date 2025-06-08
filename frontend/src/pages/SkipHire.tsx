import { skipData } from "@/data/skipData";
import Header from "@/components/layout/SkipHireHeader";
import Footer from "@/components/layout/SkipHireFooter";
import SkipCard from "@/components/SkipCard";
import { Badge } from "@/components/ui/badge";


const SkipHire = () => {
  const standardSkips = skipData.filter(skip => skip.category === 'standard');
  const limitedSkips = skipData.filter(skip => skip.category === 'limited');
  const restrictedSkips = skipData.filter(skip => skip.category === 'restricted');

  return (
    <div className="min-h-screen bg-gray-50">
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

        <Footer />
      </div>
    </div>
  );
};

export default SkipHire;