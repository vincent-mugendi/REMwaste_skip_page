import { Check } from "lucide-react";

const Header = () => {
  return (
    // Header container with dark background and vertical padding
    <div className="bg-gray-900 text-white py-4 sm:py-8">
      {/* Centered content container with responsive horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <h1 className="text-lg sm:text-3xl font-bold mb-2 sm:mb-4">
            What Size Skip Do You Need?
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-gray-300 mb-4 sm:mb-6">
            Select the most suitable skip based on your project’s requirements.
          </p>

          {/* Progress indicator showing steps */}
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            {/* Step 1 - Completed */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <span>Location</span>
            </div>

            {/* Connector line between steps */}
            <div className="h-0.5 sm:h-px sm:w-8 bg-green-600 w-full sm:block hidden"></div>

            {/* Step 2 - Completed */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <span>Waste Type</span>
            </div>

            {/* Connector line */}
            <div className="h-0.5 sm:h-px sm:w-8 bg-green-600 w-full sm:block hidden"></div>

            {/* Step 3 - Current step */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 text-black font-bold rounded-full flex items-center justify-center text-xs sm:text-sm">
                3
              </div>
              <span className="font-bold">Select Skip</span>
            </div>

            {/* Connector line - inactive */}
            <div className="h-0.5 sm:h-px sm:w-8 bg-gray-600 w-full sm:block hidden"></div>

            {/* Step 4 - Upcoming */}
            <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center text-xs sm:text-sm">
                4
              </div>
              <span>Permit Check</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;