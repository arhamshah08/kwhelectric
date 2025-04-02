
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
            Unlock access to 
            <br />
            energy markets
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect your distributed energy resources to wholesale 
            energy markets with our platform and start earning revenue 
            while creating a cleaner, more resilient grid.
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
                <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="col-span-3 bg-white p-4 rounded shadow-sm">
                    <div className="h-8 w-24 bg-gray-200 rounded mb-4"></div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                  </div>
                  <div className="col-span-9">
                    <div className="bg-white p-4 rounded shadow-sm mb-4">
                      <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-24 bg-gray-100 rounded"></div>
                        <div className="h-24 bg-gray-100 rounded"></div>
                        <div className="h-24 bg-gray-100 rounded"></div>
                        <div className="h-24 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                      <div className="h-8 w-24 bg-gray-200 rounded mb-4"></div>
                      <div className="h-32 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
