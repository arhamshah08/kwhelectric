
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to unlock the value of your energy assets?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Join the leading utilities already saving millions with our API solution.
            Schedule a demo to see how kWh can help you generate revenue and support a more reliable grid.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
