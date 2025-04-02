
import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solution = () => {
  return (
    <section id="solution" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Solution</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            The first line of defense against costly and unreliable energy distribution
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-3 space-y-6">
            <div className="bg-kwh-lightblue/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-kwh-blue mb-4">kWh API: The Energy Bridge</h3>
              <p className="text-gray-700 mb-6">
                kWh is an API that enables Energy Distributor companies to seamlessly access IoT Devices, creating a virtual power plant network.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 bg-kwh-blue rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Offsetting excess energy demand</h4>
                    <p className="text-gray-600">Automatically balances demand during peak hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 bg-kwh-blue rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Increasing maximum threshold by up to 20%</h4>
                    <p className="text-gray-600">Virtually expands grid capacity without physical infrastructure</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 bg-kwh-blue rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Seamless integration with existing systems</h4>
                    <p className="text-gray-600">No overhauling required - works with your current infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="public/lovable-uploads/940b50a0-24c1-45d4-a1f6-8d3dd10649b8.png" 
                  alt="kWh solution diagram" 
                  className="w-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg h-full p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-kwh-blue mb-6">How It Works</h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-kwh-blue pb-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 bg-kwh-blue rounded-full"></div>
                  <h4 className="font-semibold text-lg">Connect IoT Devices</h4>
                  <p className="text-gray-600">Our API connects to IoT thermostats, batteries, and smart devices across the grid.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-kwh-blue pb-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 bg-kwh-blue rounded-full"></div>
                  <h4 className="font-semibold text-lg">Predict & Alert</h4>
                  <p className="text-gray-600">AI algorithms predict peak demand events before they happen.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-kwh-blue pb-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 bg-kwh-blue rounded-full"></div>
                  <h4 className="font-semibold text-lg">Orchestrate Response</h4>
                  <p className="text-gray-600">Automatically adjust thousands of devices to reduce grid load.</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 bg-kwh-green rounded-full"></div>
                  <h4 className="font-semibold text-lg">Monitor & Optimize</h4>
                  <p className="text-gray-600">Real-time analytics dashboard shows savings and performance.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-100">
                <a 
                  href="#" 
                  className="inline-flex items-center text-kwh-blue font-medium hover:underline"
                >
                  View technical documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
