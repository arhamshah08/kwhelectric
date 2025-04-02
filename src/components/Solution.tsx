
import { ArrowRight, BatteryFull, Building2, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solution = () => {
  return (
    <section id="solution" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-md">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mt-4">Connecting assets</h2>
          </div>
          
          <div className="w-full">
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
              Turn energy resources<br />into revenue
            </h3>
            <Button className="border-gray-300 text-gray-800 bg-slate-50 hover:bg-slate-100 rounded-full px-8 py-6 h-auto text-lg">
              Get started
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="mb-8 flex items-center justify-center">
              <BatteryFull className="w-20 h-20 text-blue-600 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Battery Storage</h3>
            <p className="text-gray-700">
              Realize the full value stack of commercial and residential battery storage systems.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="mb-8 flex items-center justify-center">
              <Building2 className="w-20 h-20 text-green-600 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Smart Buildings</h3>
            <p className="text-gray-700">
              Create new value streams from smart thermostats, heat pumps, HVAC and other grid-interactive technologies.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 transition-all hover:shadow-lg">
            <div className="mb-8 flex items-center justify-center">
              <Car className="w-20 h-20 text-purple-600 stroke-[1.5]" />
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
