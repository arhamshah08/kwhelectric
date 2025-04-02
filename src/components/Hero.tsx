
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
            Boosting your Energy capacity instantaneously
            <br />
            with a software-only solution
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connecting smart devices to wholesale energy markets with our proprietary software to reduce blackouts, costs and pollution - all within 2 seconds
          </p>
          
          <div className="mt-16">
            {/* Dashboard preview image */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 mx-auto max-w-5xl">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 border-b border-gray-100">
                <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                <div className="ml-2 text-sm text-gray-500">Dashboard</div>
              </div>
              <div className="p-2">
                <img 
                  src="/lovable-uploads/fa065b4b-050d-426d-b49f-ab2c9fc2ff6e.png" 
                  alt="Energy Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
