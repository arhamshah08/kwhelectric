
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Energy API Platform
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              Connect your energy assets to grid services programs with a simple API integration.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4">
                    Partner with us
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    About us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <a href="#team" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                          <div className="text-sm font-medium leading-none">Our Team</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            Meet the people behind kWh
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                          <div className="text-sm font-medium leading-none">Careers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            Join our growing team
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    News & Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50">
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            Latest news and updates
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4">
                    Developers
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button variant="outline" className="border-gray-300 text-gray-800">
              Login
            </Button>
            <Button className="bg-black hover:bg-black/90 text-white">
              Get in touch
            </Button>
            <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Button className="bg-black hover:bg-black/90 text-white text-sm py-1 px-3 h-auto">
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
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner with us
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              News & Resources
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
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
