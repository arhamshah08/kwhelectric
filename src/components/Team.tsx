
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">The Team</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Arham Shah */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="p-6 text-center">
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
                <Avatar className="h-full w-full">
                  <AvatarImage src="/lovable-uploads/3cfc23cf-1978-4a03-adf9-67cd81c7df58.png" alt="Arham Shah" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-bold">Arham Shah</h3>
              <p className="text-black mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-6">
                Former engineer at Tesla Energy, bringing expertise in energy systems integration and business development.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/de05d324-e380-47ab-9c87-d2859fd98d1e.png" alt="Tesla" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/81e41dff-ba93-47c5-9f9d-c87553908e60.png" alt="Rivian" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/9816239c-7a38-4f90-8937-5fda04f41d36.png" alt="IIT Gandhinagar" className="h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mridul Ashokan */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="p-6 text-center">
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
                <Avatar className="h-full w-full">
                  <AvatarImage src="/lovable-uploads/cd23e853-fb9a-4901-bd78-e99e3b243bd1.png" alt="Mridul Ashokan" />
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-bold">Mridul Ashokan</h3>
              <p className="text-black mb-4">Head of Strategy</p>
              <p className="text-gray-600 mb-6">
                Strategic leader with background in energy generation, managment at GE and Siemens and Dubai's Electricity Authority.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/a45344db-d5b1-42b9-8f04-ccae6ced5aeb.png" alt="GE" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/4c7d492f-dc9c-4a56-8c4c-e39a97b282ea.png" alt="Siemens" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/57b28dac-e1b7-4beb-9430-6b30bc63499b.png" alt="DEWA" className="h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Ved Eti */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="p-6 text-center">
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
                <Avatar className="h-full w-full">
                  <AvatarImage src="/lovable-uploads/fd461f65-ca07-4501-b2b1-11c9af36134e.png" alt="Ved Eti" />
                  <AvatarFallback>VE</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-bold">Ved Eti</h3>
              <p className="text-black mb-4">Head of Technology</p>
              <p className="text-gray-600 mb-6">
                Tech innovator with deep experience in IoT systems, API development, and smart grid technologies.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/7015453a-9323-4200-944a-cc88ff192bab.png" alt="Figma" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/3f1ea2b7-eace-4bc2-baad-285f89f1bd16.png" alt="Crowe" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/014ea8e0-f775-4acc-bf4a-821493b743a2.png" alt="Analog Devices" className="h-full object-contain" />
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
