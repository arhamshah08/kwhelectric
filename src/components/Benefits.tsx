
import { Zap, CircleUser, CircleDollarSign } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="mb-8 flex items-center justify-center">
              <Zap className="w-32 h-32 text-blue-600 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              A single integration
            </h3>
            <p className="text-gray-700">
              One interface seamlessly connects your resources to multiple programs across multiple markets.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="mb-8 flex items-center justify-center">
              <CircleUser className="w-32 h-32 text-green-600 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Powerful and easy-to-use
            </h3>
            <p className="text-gray-700">
              Our partner portal and comprehensive API suite take the complexity out of VPP operations.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="mb-8 flex items-center justify-center">
              <CircleDollarSign className="w-32 h-32 text-purple-600 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Your customers, your brand
            </h3>
            <p className="text-gray-700">
              Our white-label model means you can always offer kWh-powered VPP solutions under your own brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
