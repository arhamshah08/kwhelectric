
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const form = useForm({
    defaultValues: {
      location: "",
      email: ""
    }
  });
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    toast({
      title: "Information received",
      description: `Location: ${data.location}, Email: ${data.email}`,
    });
  };

  return (
    <section className="relative py-12 md:py-20 bg-white text-gray-800 overflow-hidden">
      {/* Background patterns/grid */}
      <div className="absolute inset-0 w-full h-full bg-[url('/lovable-uploads/17997903-24cd-4165-b5e1-1eac5a821998.png')] bg-cover opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - Main heading and text */}
          <div className="md:pr-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Unleashing India's Energy Potential
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
              Our smart software connects devices to energy markets — cutting costs, reducing blackouts, and lowering pollution in under 2 seconds.
            </p>
          </div>
          
          {/* Right column - Form card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden text-gray-800 p-6">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Earn by Saving Energy — It's That Simple
            </h2>
            <p className="text-gray-600 mb-5">
              Share your details and get a customized earnings plan.
            </p>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="location" className="block text-base font-medium text-gray-700">Your Location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your location"
                  className="w-full px-4 py-3 text-base bg-blue-50 border border-blue-100 rounded-lg focus:ring-2 focus:ring-kwh-blue focus:border-kwh-blue"
                  {...form.register("location", { required: true })}
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-base font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 text-base bg-blue-50 border border-blue-100 rounded-lg focus:ring-2 focus:ring-kwh-blue focus:border-kwh-blue"
                  {...form.register("email", { required: true })}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-kwh-blue hover:bg-blue-700 text-white py-3 text-base font-medium rounded-lg mt-4">
                Get your earnings estimate
              </Button>
            </form>
          </div>
        </div>
        
        {/* Dashboard preview (moved below the main content) */}
        <div className="mt-12">
          <div className="bg-gray-100 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-200 mx-auto">
            <div className="flex items-center space-x-2 px-3 py-2 bg-gray-200 border-b border-gray-300">
              <div className="h-2.5 w-2.5 bg-red-400 rounded-full"></div>
              <div className="h-2.5 w-2.5 bg-yellow-400 rounded-full"></div>
              <div className="h-2.5 w-2.5 bg-blue-400 rounded-full"></div>
              <div className="ml-2 text-xs text-gray-600">Dashboard</div>
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
