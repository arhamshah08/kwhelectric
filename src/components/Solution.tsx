
import { ArrowRight, BatteryCharging, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solution = () => {
  return (
    <section id="solution" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start mb-16">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-md">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mt-4">Connecting assets</h2>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
              Turn energy resources into revenue
            </h3>
            <Button variant="outline" className="border-gray-300 text-gray-800 rounded-full px-8 py-6 h-auto text-lg">
              Explore partner solutions
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="mb-8 flex items-center justify-center">
              <BatteryCharging className="w-32 h-32 text-blue-600 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Battery Storage</h3>
            <p className="text-gray-700">
              Realize the full value stack of commercial and residential battery storage systems.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="mb-8 flex items-center justify-center">
              <Cloud className="w-32 h-32 text-green-600 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Smart Buildings</h3>
            <p className="text-gray-700">
              Create new value streams from smart thermostats, heat pumps, HVAC and other grid-interactive technologies.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="mb-8 flex items-center justify-center">
              <Zap className="w-32 h-32 text-purple-600 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">EV Charging</h3>
            <p className="text-gray-700">
              Connect electric vehicles (EVs) to the grid and monetize smart charging and vehicle-to-everything capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
