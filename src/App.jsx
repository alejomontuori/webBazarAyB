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
          <section className="pt-50 pb-24">
            <div className="flex flex-col space-y-4 w-full px-6 lg:max-w-4xl">
              <div>
                <h1 className="text-4xl font-semibold">Sobre Nosotros</h1>
              </div>
              <div>
                <p className="text-2xl">
                  En BazarAyB, nos dedicamos a ofrecer una amplia variedad de
                  productos de alta calidad a precios competitivos. Nuestra
                  misión es brindar a nuestros clientes una experiencia de
                  compra excepcional, con un enfoque en la satisfacción del
                  cliente y la innovación constante.
                </p>
              </div>
            </div>
          </section>

          <section>

          </section>
        </main>
      </div>
    </>
  );
}

export default App;
