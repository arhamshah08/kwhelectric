
const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the exceptional team behind kWh
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 text-center">
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="public/lovable-uploads/e67bb513-bcee-4d84-9895-7e12ac7650d0.png" 
                  alt="Arham Shah" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">Arham Shah</h3>
              <p className="text-kwh-blue mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-6">
                Former engineer at Tesla, bringing expertise in energy systems integration and business development.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/ffdf655b-2e47-4d78-acce-ca8b455067f7.png" 
                    alt="Tesla" 
                    className="h-8 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/3577d457-ec10-429f-afc0-530352a2529a.png" 
                    alt="Rivian" 
                    className="h-8 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/da873a3a-59a4-4821-83f5-ee2e7ab73e13.png" 
                    alt="IIT" 
                    className="h-8 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 text-center">
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="public/lovable-uploads/d019bead-bb09-468c-a4dd-b920e9eb34c0.png" 
                  alt="Mridul Ashokan" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">Mridul Ashokan</h3>
              <p className="text-kwh-blue mb-4">Head of Strategy</p>
              <p className="text-gray-600 mb-6">
                Strategic leader with background in energy markets and utility operations at GE and Siemens.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/87193ea7-25e2-4be0-b822-98a5f02369b7.png" 
                    alt="GE" 
                    className="h-8 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/d019bead-bb09-468c-a4dd-b920e9eb34c0.png" 
                    alt="Siemens" 
                    className="h-8 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/3577d457-ec10-429f-afc0-530352a2529a.png" 
                    alt="Dubai Electricity" 
                    className="h-8 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 text-center">
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="public/lovable-uploads/ffdf655b-2e47-4d78-acce-ca8b455067f7.png" 
                  alt="Ved Eti" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">Ved Eti</h3>
              <p className="text-kwh-blue mb-4">Head of Technology</p>
              <p className="text-gray-600 mb-6">
                Tech innovator with deep experience in IoT systems, API development, and smart grid technologies.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/d019bead-bb09-468c-a4dd-b920e9eb34c0.png" 
                    alt="Yahoo" 
                    className="h-8 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/87193ea7-25e2-4be0-b822-98a5f02369b7.png" 
                    alt="Crowe" 
                    className="h-8 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/da873a3a-59a4-4821-83f5-ee2e7ab73e13.png" 
                    alt="Analog Devices" 
                    className="h-8 object-contain"
                  />
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
