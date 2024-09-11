import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-20 mr-2" src={logo} alt="Logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li className="hover:text-orange-500" key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md hover:text-orange-500 hover:border-orange-500">
              Iniciar Sesion
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-400 py-2 px-3 rounded-md hover:text-zinc-50"
            >
              Crea una cuenta
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="flex flex-col items-center">
              {navItems.map((item, index) => (
                <li key={index} className="hover:text-orange-500 py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md hover:bg-orange-500 hover:text-zinc-50">
                Iniciar Sesion
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-400"
              >
                Crea una cuenta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
