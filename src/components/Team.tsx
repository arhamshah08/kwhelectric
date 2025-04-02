
import { 
  BarChart2, 
  CloudCog, 
  Code2 
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the exceptional team behind kWh
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="p-6 text-center">
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
                <Avatar className="h-full w-full">
                  <AvatarImage src="/lovable-uploads/3cfc23cf-1978-4a03-adf9-67cd81c7df58.png" alt="Arham Shah" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-bold">Arham Shah</h3>
              <p className="text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-6">
                Former engineer at Tesla, bringing expertise in energy systems integration and business development.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Code2 size={20} className="text-blue-500" />
                </div>
                <div className="p-2 bg-green-50 rounded-full">
                  <CloudCog size={20} className="text-green-500" />
                </div>
                <div className="p-2 bg-purple-50 rounded-full">
                  <BarChart2 size={20} className="text-purple-500" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="p-6 text-center">
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
                <Avatar className="h-full w-full">
                  <AvatarImage src="/lovable-uploads/cd23e853-fb9a-4901-bd78-e99e3b243bd1.png" alt="Mridul Ashokan" />
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-bold">Mridul Ashokan</h3>
              <p className="text-blue-600 mb-4">Head of Strategy</p>
              <p className="text-gray-600 mb-6">
                Strategic leader with background in energy markets and utility operations at GE and Siemens.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Code2 size={20} className="text-blue-500" />
                </div>
                <div className="p-2 bg-green-50 rounded-full">
                  <CloudCog size={20} className="text-green-500" />
                </div>
                <div className="p-2 bg-purple-50 rounded-full">
                  <BarChart2 size={20} className="text-purple-500" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="p-6 text-center">
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
                <Avatar className="h-full w-full">
                  <AvatarImage src="/lovable-uploads/fd461f65-ca07-4501-b2b1-11c9af36134e.png" alt="Ved Eti" />
                  <AvatarFallback>VE</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-bold">Ved Eti</h3>
              <p className="text-blue-600 mb-4">Head of Technology</p>
              <p className="text-gray-600 mb-6">
                Tech innovator with deep experience in IoT systems, API development, and smart grid technologies.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Code2 size={20} className="text-blue-500" />
                </div>
                <div className="p-2 bg-green-50 rounded-full">
                  <CloudCog size={20} className="text-green-500" />
                </div>
                <div className="p-2 bg-purple-50 rounded-full">
                  <BarChart2 size={20} className="text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
