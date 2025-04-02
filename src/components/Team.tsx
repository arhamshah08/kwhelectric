
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
              <p className="text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-6">
                Former engineer at Tesla, bringing expertise in energy systems integration and business development.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/4d9efdde-1173-408e-a29a-c8ee584b5ab8.png" alt="Tesla" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/f20b4388-b805-4a0e-8abd-f5b11d71891b.png" alt="Rivian" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/5c1399e4-07b8-4887-b621-2bbbe5ad0df8.png" alt="IIT" className="h-full object-contain" />
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
              <p className="text-blue-600 mb-4">Head of Strategy</p>
              <p className="text-gray-600 mb-6">
                Strategic leader with background in energy markets and utility operations at GE and Siemens.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/56355ae7-2b61-4d7d-9f6b-85a09810cca8.png" alt="GE" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/b5a7eec0-8805-4310-b4f3-54a157aa194f.png" alt="Siemens" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/ce3ae649-32e0-4994-91de-41c74c54a4d9.png" alt="DEWA" className="h-full object-contain" />
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
              <p className="text-blue-600 mb-4">Head of Technology</p>
              <p className="text-gray-600 mb-6">
                Tech innovator with deep experience in IoT systems, API development, and smart grid technologies.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/8e5088d3-bfcc-4c83-a5f4-67b1e03ef19d.png" alt="Figma" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/7d3e9c5e-0bd4-4e6a-a56d-822757c0e0de.png" alt="Crowe" className="h-full object-contain" />
                </div>
                <div className="h-12 w-auto">
                  <img src="/lovable-uploads/33659dd8-9070-4e02-9b83-52eed220cb8b.png" alt="Analog Devices" className="h-full object-contain" />
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
