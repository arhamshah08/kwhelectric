
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              A Seamless API for <span className="text-kwh-blue">Utility Companies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              kWh's API helps utility companies access decentralized energy resources, 
              increase peak load capacity by up to <span className="font-semibold text-kwh-green">25%</span>, 
              and deliver smarter, greener energy distribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-kwh-blue hover:bg-kwh-blue/90 text-white px-6 py-6 rounded-md">
                Request Demo
              </Button>
              <Button variant="outline" className="group border-kwh-blue text-kwh-blue hover:bg-kwh-blue/5 px-6 py-6 rounded-md">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-kwh-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-kwh-green/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 glass-card rounded-2xl p-8">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-kwh-blue mb-4">kWh #141</div>
                <p className="text-lg">
                  is developing a <span className="font-semibold">seamless API</span><br />
                  to help <span className="font-semibold">utility companies</span><br />
                  access <span className="font-semibold">decentralized energy resources</span><br />
                  to increase <span className="font-semibold">peak load capacity</span> by up to <span className="font-semibold text-kwh-green">25%</span><br />
                  because it <span className="font-semibold">reduces outages, lowers costs, and enhances grid reliability</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
