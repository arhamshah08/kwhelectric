
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold text-kwh-blue">kWh</span>
              <span className="ml-2 text-xl font-medium text-gray-500">#141</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-600 hover:text-kwh-blue transition-colors">
              Problem
            </a>
            <a href="#solution" className="text-gray-600 hover:text-kwh-blue transition-colors">
              Solution
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-kwh-blue transition-colors">
              Benefits
            </a>
            <a href="#team" className="text-gray-600 hover:text-kwh-blue transition-colors">
              Team
            </a>
            <Button className="bg-kwh-blue hover:bg-kwh-blue/90">Request Demo</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-kwh-blue hover:bg-gray-100 focus:outline-none"
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
              href="#problem"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kwh-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Problem
            </a>
            <a
              href="#solution"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kwh-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Solution
            </a>
            <a
              href="#benefits"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kwh-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#team"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kwh-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <div className="pt-2">
              <Button className="w-full bg-kwh-blue hover:bg-kwh-blue/90">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
