
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-kwh-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Energy Distribution Network
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join the leading utilities already saving millions with our API solution.
            Schedule a demo to see how kWh can help you reduce costs, prevent outages, and create a more reliable grid.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-kwh-blue hover:bg-white/90 px-8 py-6 text-lg">
              Request Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
