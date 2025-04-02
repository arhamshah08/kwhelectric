
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, BatteryFull } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetInTouch = () => {
    window.location.href = "mailto:arham2@illinois.edu";
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold text-black">kWh</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:arham2@illinois.edu" 
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Get in touch
              </a>
              <Button variant="outline" className="border-gray-300 text-gray-800">
                Login
              </Button>
              <Button className="bg-black hover:bg-black/90 text-white">
                Get started
              </Button>
              <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              className="bg-black hover:bg-black/90 text-white text-sm py-1 px-3 h-auto"
              onClick={handleGetInTouch}
            >
              Get in touch
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="mailto:arham2@illinois.edu"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in touch
            </a>
            <div className="pt-2">
              <Button variant="outline" className="w-full border-gray-300 text-gray-800">
                Login
              </Button>
            </div>
            <div className="pt-2">
              <Button className="w-full bg-black hover:bg-black/90 text-white">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
