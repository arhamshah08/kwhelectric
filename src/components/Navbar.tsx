
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold text-black">kWh</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <span className="text-gray-700 hover:text-kwh-blue cursor-pointer py-2 pr-4 flex items-center">
                Product
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            <a href="#" className="text-gray-700 hover:text-kwh-blue py-2">
              Partner with us
            </a>
            <div className="relative group">
              <span className="text-gray-700 hover:text-kwh-blue cursor-pointer py-2 pr-4 flex items-center">
                About us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            <div className="relative group">
              <span className="text-gray-700 hover:text-kwh-blue cursor-pointer py-2 pr-4 flex items-center">
                News & Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            <a href="#" className="text-gray-700 hover:text-kwh-blue py-2">
              Developers
            </a>
            <Button variant="outline" className="border-gray-300 text-gray-800">
              Login
            </Button>
            <Button className="bg-black hover:bg-black/90 text-white">
              Get in touch
            </Button>
            <Search className="h-5 w-5 text-gray-600" />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Button className="bg-black hover:bg-black/90 text-white text-sm py-1 px-3 h-auto">
              Get in touch
            </Button>
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
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kwh-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kwh-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner with us
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kwh-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kwh-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              News & Resources
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kwh-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Developers
            </a>
            <div className="pt-2">
              <Button variant="outline" className="w-full border-gray-300 text-gray-800">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
