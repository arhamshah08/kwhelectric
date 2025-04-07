
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Arham Shah */}
            <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-36 w-36 rounded-full ring-4 ring-white mb-6">
                    <AvatarImage src="/lovable-uploads/3cfc23cf-1978-4a03-adf9-67cd81c7df58.png" alt="Arham Shah" className="object-cover" />
                    <AvatarFallback className="bg-kwh-blue text-white text-2xl">AS</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold">Arham Shah</h3>
                  <p className="text-kwh-blue font-medium mb-2">Founder & CEO</p>
                  <p className="text-gray-600 text-center mb-6">
                    Former engineer at Tesla Energy, bringing expertise in energy systems integration and business development.
                  </p>
                  <div className="flex items-center justify-center space-x-3 mt-auto">
                    <img src="/lovable-uploads/de05d324-e380-47ab-9c87-d2859fd98d1e.png" alt="Tesla" className="h-8 w-auto object-contain" />
                    <img src="/lovable-uploads/81e41dff-ba93-47c5-9f9d-c87553908e60.png" alt="Rivian" className="h-8 w-auto object-contain" />
                    <img src="/lovable-uploads/9816239c-7a38-4f90-8937-5fda04f41d36.png" alt="IIT Gandhinagar" className="h-8 w-auto object-contain" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Mridul Ashokan */}
            <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-36 w-36 rounded-full ring-4 ring-white mb-6">
                    <AvatarImage src="/lovable-uploads/cd23e853-fb9a-4901-bd78-e99e3b243bd1.png" alt="Mridul Ashokan" className="object-cover" />
                    <AvatarFallback className="bg-kwh-blue text-white text-2xl">MA</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold">Mridul Ashokan</h3>
                  <p className="text-kwh-blue font-medium mb-2">Head of Strategy</p>
                  <p className="text-gray-600 text-center mb-6">
                    Strategic leader with background in energy generation and management at GE, Siemens and Dubai's Electricity Authority.
                  </p>
                  <div className="flex items-center justify-center space-x-3 mt-auto">
                    <img src="/lovable-uploads/a45344db-d5b1-42b9-8f04-ccae6ced5aeb.png" alt="GE" className="h-8 w-auto object-contain" />
                    <img src="/lovable-uploads/4c7d492f-dc9c-4a56-8c4c-e39a97b282ea.png" alt="Siemens" className="h-8 w-auto object-contain" />
                    <img src="/lovable-uploads/57b28dac-e1b7-4beb-9430-6b30bc63499b.png" alt="DEWA" className="h-8 w-auto object-contain" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Ved Eti */}
            <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-36 w-36 rounded-full ring-4 ring-white mb-6">
                    <AvatarImage src="/lovable-uploads/fd461f65-ca07-4501-b2b1-11c9af36134e.png" alt="Ved Eti" className="object-cover" />
                    <AvatarFallback className="bg-kwh-blue text-white text-2xl">VE</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold">Ved Eti</h3>
                  <p className="text-kwh-blue font-medium mb-2">Head of Technology</p>
                  <p className="text-gray-600 text-center mb-6">
                    Tech innovator with deep experience in IoT systems, API development, and smart grid technologies.
                  </p>
                  <div className="flex items-center justify-center space-x-3 mt-auto">
                    <img src="/lovable-uploads/7015453a-9323-4200-944a-cc88ff192bab.png" alt="Figma" className="h-8 w-auto object-contain" />
                    <img src="/lovable-uploads/3f1ea2b7-eace-4bc2-baad-285f89f1bd16.png" alt="Crowe" className="h-8 w-auto object-contain" />
                    <img src="/lovable-uploads/014ea8e0-f775-4acc-bf4a-821493b743a2.png" alt="Analog Devices" className="h-8 w-auto object-contain" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Mobile carousel view */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {/* Arham Shah */}
              <CarouselItem>
                <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-white to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-28 w-28 rounded-full ring-4 ring-white mb-4">
                        <AvatarImage src="/lovable-uploads/3cfc23cf-1978-4a03-adf9-67cd81c7df58.png" alt="Arham Shah" className="object-cover" />
                        <AvatarFallback className="bg-kwh-blue text-white text-xl">AS</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold">Arham Shah</h3>
                      <p className="text-kwh-blue font-medium mb-2">Founder & CEO</p>
                      <p className="text-gray-600 text-center text-sm mb-4">
                        Former engineer at Tesla Energy, bringing expertise in energy systems integration.
                      </p>
                      <div className="flex items-center justify-center space-x-2">
                        <img src="/lovable-uploads/de05d324-e380-47ab-9c87-d2859fd98d1e.png" alt="Tesla" className="h-6 w-auto object-contain" />
                        <img src="/lovable-uploads/81e41dff-ba93-47c5-9f9d-c87553908e60.png" alt="Rivian" className="h-6 w-auto object-contain" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              {/* Mridul Ashokan */}
              <CarouselItem>
                <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-white to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-28 w-28 rounded-full ring-4 ring-white mb-4">
                        <AvatarImage src="/lovable-uploads/cd23e853-fb9a-4901-bd78-e99e3b243bd1.png" alt="Mridul Ashokan" className="object-cover" />
                        <AvatarFallback className="bg-kwh-blue text-white text-xl">MA</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold">Mridul Ashokan</h3>
                      <p className="text-kwh-blue font-medium mb-2">Head of Strategy</p>
                      <p className="text-gray-600 text-center text-sm mb-4">
                        Strategic leader with background in energy generation and management.
                      </p>
                      <div className="flex items-center justify-center space-x-2">
                        <img src="/lovable-uploads/a45344db-d5b1-42b9-8f04-ccae6ced5aeb.png" alt="GE" className="h-6 w-auto object-contain" />
                        <img src="/lovable-uploads/4c7d492f-dc9c-4a56-8c4c-e39a97b282ea.png" alt="Siemens" className="h-6 w-auto object-contain" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              {/* Ved Eti */}
              <CarouselItem>
                <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-white to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-28 w-28 rounded-full ring-4 ring-white mb-4">
                        <AvatarImage src="/lovable-uploads/fd461f65-ca07-4501-b2b1-11c9af36134e.png" alt="Ved Eti" className="object-cover" />
                        <AvatarFallback className="bg-kwh-blue text-white text-xl">VE</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold">Ved Eti</h3>
                      <p className="text-kwh-blue font-medium mb-2">Head of Technology</p>
                      <p className="text-gray-600 text-center text-sm mb-4">
                        Tech innovator with deep experience in IoT systems and API development.
                      </p>
                      <div className="flex items-center justify-center space-x-2">
                        <img src="/lovable-uploads/7015453a-9323-4200-944a-cc88ff192bab.png" alt="Figma" className="h-6 w-auto object-contain" />
                        <img src="/lovable-uploads/3f1ea2b7-eace-4bc2-baad-285f89f1bd16.png" alt="Crowe" className="h-6 w-auto object-contain" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static transform-none mx-2 bg-white" />
              <CarouselNext className="static transform-none mx-2 bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Team;
