import "./App.css";

function App() {
  return (
    <>
      <div>
        <header>
          <nav className="fixed w-full z-50 bg-[#5e604b] backdrop-blur-sm border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-12 md:space-x-20">
                  <span className="text-3xl font-bold text-[#ffe8cf] tracking-tighter">
                    BazarAyB
                  </span>
                  <div className="flex space-x-8">
                    <a
                      href="#"
                      className="text-base font-medium text-[#ffe8cf] hover:text-black/60 transition-colors duration-300 relative group"
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-[#ffe8cf] hover:text-black/60 transition-colors duration-300 relative group"
                    >
                      Productos
                      <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-[#ffe8cf] hover:text-black/60 transition-colors duration-300 relative group"
                    >
                      Contacto
                      <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <section className="flex justify-center py-24 px-6">
            <div className="border-4 border-black flex justify-start max-w-5xl w-full">
              <div>
                <h1>Productos</h1>
                <div>
                  <div>
                    <h2>Combos y Ofertas</h2>
                  </div>
                  <div>
                    <h2>Unidades</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex justify-center py-24 px-6">
            {/* Contenedor principal que centra el contenido y maneja la responsividad */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-5xl w-full">
              {/* Contenedor para el texto */}
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h1 className="text-4xl font-semibold">Sobre Nosotros</h1>
                <p className="text-xl">
                  En BazarAyB, nos dedicamos a ofrecer una amplia variedad de
                  productos de alta calidad a precios competitivos. Nuestra
                  misión es brindar a nuestros clientes una experiencia de
                  compra excepcional, con un enfoque en la satisfacción del
                  cliente y la innovación constante.
                </p>
              </div>

              {/* Contenedor para las imágenes */}
              <div className="flex flex-shrink-0 gap-4">
                {/* - w-48 h-48 equivale aprox. a 12rem x 12rem (cerca de 5cm).
               - object-cover evita que la imagen se deforme.*/}
                <img
                  src="/belenPerfil.webp"
                  alt="Integrante Belén"
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
                <img
                  src="/alejoPerfil.webp"
                  alt="Integrante Alejo"
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
