
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-white text-gray-800 overflow-hidden">
      {/* Background patterns/grid */}
      <div className="absolute inset-0 w-full h-full bg-[url('/lovable-uploads/17997903-24cd-4165-b5e1-1eac5a821998.png')] bg-cover opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Main heading and text */}
          <div className="md:pr-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-gray-900">
              Unlocking Energy Potential for India's grid<br />
              <span className="text-green-600">in 2 seconds</span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
              Connecting smart devices to energy markets with our proprietary software - reducing blackouts, costs and pollution - all within 2 seconds
            </p>
            
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-lg">
              Learn More
            </Button>
          </div>
          
          {/* Right column - Form card */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden text-gray-800">
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Find out how much you can earn
              </h2>
              <p className="text-gray-600 mb-6">
                Provide your details and we'll identify all the cash generating programs in your area.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter your postal code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 mt-4">
                  Get your earnings estimate
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard preview (moved below the main content) */}
        <div className="mt-16">
          <div className="bg-gray-100 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-200 mx-auto">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-200 border-b border-gray-300">
              <div className="h-3 w-3 bg-red-400 rounded-full"></div>
              <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
              <div className="h-3 w-3 bg-green-400 rounded-full"></div>
              <div className="ml-2 text-sm text-gray-600">Dashboard</div>
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
    </section>
  );
};

export default Hero;
