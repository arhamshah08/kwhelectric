
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  return (
    <section id="problem" className="py-16 md:py-24 bg-gradient-to-b from-white to-kwh-lightblue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">The Problem</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Energy distributors face expensive challenges managing peak energy demand
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Excess Energy Demand Crisis</h3>
                <p className="text-gray-600 mb-6">
                  Distributors spend over <span className="text-kwh-red font-bold">$10 billion</span> to fulfill energy demand 
                  that exceeds their maximum threshold during peak hours.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-1 bg-kwh-red rounded-full"></div>
                  <div>
                    <p className="text-lg font-medium">Critical Impact Points</p>
                    <p className="text-gray-500">6pm - 8pm daily usage peaks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Unreliable Grid Performance</h3>
                <p className="text-gray-600 mb-4">
                  Current infrastructure struggles to handle peak loads, resulting in:
                </p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Blackouts affecting millions of homes</li>
                  <li>Expensive emergency power purchases</li>
                  <li>Environmental impact from inefficient power generation</li>
                  <li>Poor customer satisfaction and regulatory penalties</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-64 h-64 bg-kwh-red/10 rounded-full blur-3xl"></div>
            <img 
              src="public/lovable-uploads/bdb42be5-8699-4720-b227-69c21f026e1c.png" 
              alt="Energy demand problem visualization" 
              className="rounded-xl shadow-lg w-full object-cover"
            />
            <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-kwh-blue mb-2">Maximum Threshold Problem</h3>
              <p className="text-gray-600">
                When energy demand exceeds the maximum threshold at 6pm, distributors are forced to spend billions
                on expensive, often polluting emergency generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
