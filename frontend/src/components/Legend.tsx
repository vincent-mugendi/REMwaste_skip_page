// src/components/Legend.tsx
import { Badge } from "@/components/ui/badge";

const Legend = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
    <h3 className="text-lg font-semibold mb-4">Skip Categories</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex items-center space-x-3 p-3 border border-green-200 rounded-lg bg-green-50">
        <Badge className="bg-green-600 text-white">Standard</Badge>
        <span className="text-sm">On‑road skips, 14‑day hire, up to 8 yards</span>
      </div>
      <div className="flex items-center space-x-3 p-3 border border-yellow-200 rounded-lg bg-yellow-50">
        <Badge className="bg-yellow-600 text-white">Limited Period</Badge>
        <span className="text-sm">Shorter hire or permit‑needed road skips</span>
      </div>
      <div className="flex items-center space-x-3 p-3 border border-red-200 rounded-lg bg-red-50">
        <Badge className="bg-purple-600 text-white">Private Land Only</Badge>
        <span className="text-sm">Not suitable for road placement (large/RoRo)</span>
      </div>
    </div>
  </div>
);

export default Legend;
