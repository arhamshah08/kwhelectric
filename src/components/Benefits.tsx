
import { Zap, Leaf, DollarSign } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-kwh-lightblue/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Benefits & Impact</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming energy distribution with concrete, measurable results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-kwh-lightblue/30 rounded-full -mt-10 -mr-10"></div>
              <div className="relative z-10">
                <h3 className="text-5xl font-bold text-kwh-blue mb-6">18 GW</h3>
                <p className="text-2xl text-gray-700">
                  That's like switching on <span className="font-semibold">36 Power Plants</span> instantaneously
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-kwh-lightblue/50 mb-4">
                  <Zap className="h-6 w-6 text-kwh-blue" />
                </div>
                <h4 className="font-semibold mb-2">Reduce Blackouts</h4>
                <p className="text-gray-600">for 14 million homes</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-kwh-lightgreen/50 mb-4">
                  <Leaf className="h-6 w-6 text-kwh-green" />
                </div>
                <h4 className="font-semibold mb-2">Reduce CO2</h4>
                <p className="text-gray-600">25,668 metric tons every 2 hours</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
                  <DollarSign className="h-6 w-6 text-gray-600" />
                </div>
                <h4 className="font-semibold mb-2">½ the cost</h4>
                <p className="text-gray-600">of current solutions</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-kwh-blue text-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Business Value</h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-white pl-4">
                  <h4 className="text-xl font-semibold mb-2">For Utility Companies</h4>
                  <ul className="space-y-2">
                    <li>• Avoid billions in infrastructure costs</li>
                    <li>• Reduce penalties for outages and unreliability</li>
                    <li>• Meet renewable energy integration goals</li>
                    <li>• Improve customer satisfaction metrics</li>
                    <li>• Simple 30% commission based on actual savings</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-kwh-green pl-4">
                  <h4 className="text-xl font-semibold mb-2">For Device Manufacturers</h4>
                  <ul className="space-y-2">
                    <li>• New revenue stream with 0.5% royalty per device</li>
                    <li>• Enhanced market appeal for their products</li>
                    <li>• No additional hardware development required</li>
                    <li>• Simplified integration through standardized API</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-xl font-semibold">
                  Virtual Power Plants valued at <span className="text-2xl">$10B</span> in India by 2030
                </div>
                <p className="text-white/80">With 22% CAGR growth over the next 5 years</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-kwh-blue mb-4">Proven Traction & Partnerships</h3>
              <p className="text-gray-600 mb-6">
                We've already partnered with leading energy providers and technology companies to deliver real results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/66e1b723-a2af-47f8-8cef-145f3130c0e1.png" 
                    alt="Savvy Greens partnership" 
                    className="h-10 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/9e962b42-1ee2-46bc-b0ae-88c406730451.png" 
                    alt="Torrent Power partnership" 
                    className="h-10 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/104cd9b7-f465-4dd5-85c3-d13d38262ab7.png" 
                    alt="Kintech partnership" 
                    className="h-10 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/caf43c91-9bfd-40e2-87a5-2acd3cdeafbc.png" 
                    alt="IEX partnership" 
                    className="h-10 object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-kwh-lightblue/30 rounded-lg p-4">
                <h4 className="font-semibold">2 Pilot Programs</h4>
                <p className="text-gray-600">Successfully implemented with major utilities</p>
              </div>
              <div className="bg-kwh-lightblue/30 rounded-lg p-4">
                <h4 className="font-semibold">3 Letters of Intent</h4>
                <p className="text-gray-600">From top-tier distribution companies</p>
              </div>
              <div className="bg-kwh-lightblue/30 rounded-lg p-4">
                <h4 className="font-semibold">$550M Serviceable Obtainable Market</h4>
                <p className="text-gray-600">With clear pathway to $3.7B SAM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
