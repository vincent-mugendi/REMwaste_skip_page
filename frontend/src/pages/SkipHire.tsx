// src/components/pages/SkipHire.tsx

import Header from "@/components/layout/SkipHireHeader";
import Footer from "@/components/layout/SkipHireFooter";
import SkipCard from "@/components/SkipCard";
import Legend from "@/components/Legend";
import { useSkipData } from "@/data/useSkipData";

const SkipHire = () => {
  const { data: skipData, loading, error } = useSkipData();

  const standardSkips = skipData?.filter(skip => skip.category === 'standard') || [];
  const limitedSkips = skipData?.filter(skip => skip.category === 'limited') || [];
  const restrictedSkips = skipData?.filter(skip => skip.category === 'restricted') || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <Header />

      {/* LEGEND */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Legend />

        {/* Loading State */}
        {loading && <p className="text-center text-gray-600 py-10">Loading skips...</p>}

        {/* Error State */}
        {error && <p className="text-center text-red-600 py-10">Failed to load skip data.</p>}

        {/* Render only if data is loaded */}
        {!loading && !error && (
          <>
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
          </>
        )}

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default SkipHire;
