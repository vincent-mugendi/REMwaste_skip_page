import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="bg-green-600 text-white p-8 rounded-lg text-center">
      {/* Call to Action */}
      <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
      <p className="text-lg mb-6">
        Our experts are here to help you select the perfect skip for your project.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-white text-green-600 hover:bg-gray-100 hover:text-green-700 transition"
        >
          Call Us: 0800 123 4567
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-green-600 hover:bg-gray-100 hover:text-green-700 transition"
        >
          Request Callback
        </Button>
      </div>

      <p className="text-sm mt-8">&copy; Vincent Mugendi. All rights reserved.</p>
    </div>
  );
};

export default Footer;
