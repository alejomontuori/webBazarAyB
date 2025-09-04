import React, { useState } from 'react';

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#5e604b]/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <a href="#inicio" className="flex-shrink-0">
            <span className="text-3xl font-bold text-[#ffe8cf] tracking-tighter">
              BazarAyB
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#productos"
              className="text-base font-medium text-[#ffe8cf] hover:text-white/80 transition-colors duration-300 relative group"
            >
              Productos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffe8cf] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#sobreNosotros"
              className="text-base font-medium text-[#ffe8cf] hover:text-white/80 transition-colors duration-300 relative group"
            >
              Sobre Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffe8cf] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contacto"
              className="text-base font-medium text-[#ffe8cf] hover:text-white/80 transition-colors duration-300 relative group"
            >
              Contáctanos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffe8cf] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#ffe8cf] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#5e604b]/90 pb-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#productos" className="text-[#ffe8cf] hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>Productos</a>
            <a href="#sobreNosotros" className="text-[#ffe8cf] hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>Sobre Nosotros</a>
            <a href="#contacto" className="text-[#ffe8cf] hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>Contáctanos</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;