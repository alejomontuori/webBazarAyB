import "./App.css";
import productos from "./productos";
import CardProduct from "./components/cardProduct";
import Navbar from "./components/navBar";

function App() {
  return (
    <>
      <div>
        <header>
          <Navbar></Navbar>
        </header>

        <main>
          <section className="flex justify-center py-24 px-6" id="productos">
            <div className="min-h-screen p-8">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-semibold mb-10">
                  Nuestros Productos
                </h1>
                {/* Grilla responsiva */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {productos.map((producto) => (
                    <CardProduct key={producto.id} producto={producto} />
                  ))}
                </div>
              </div>
            </div>

            {/*<div className="flex flex-col space-y-20">
                  <div>
                    <h2 className="text-xl font-medium">Combos y Ofertas</h2>
                  </div>
                  <div>
                    <h2 className="text-xl font-medium">Unidades</h2>
                  </div>
                </div>*/}
          </section>

          <section className="flex justify-center py-24 px-6" id="sobreNosotros">
            {/* Contenedor principal que centra el contenido y maneja la responsividad */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-5xl w-full">
              {/* Contenedor para el texto */}
              <div className="flex flex-col gap-4 md:text-left">
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
                  src="/images/belenPerfil.webp"
                  alt="Integrante Belén"
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
                <img
                  src="/images/alejoPerfil.webp"
                  alt="Integrante Alejo"
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          <section className="flex justify-center py-24 px-6" id="contacto">
            <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
              <h1 className="text-4xl font-semibold sm:text-4xl">
                Contacto
              </h1>

              <p className="mt-4 text-lg text-center leading-8 text-gray-600">
                Estamos para ayudarte. Escribinos por WhatsApp o seguinos en
                Instagram.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                
                <a
                  href="https://wa.me/5492617038693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full sm:w-auto items-center justify-center gap-3 bg-green-500 text-white px-8 py-3 rounded-lg text-base font-semibold shadow-sm hover:bg-green-600 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  WhatsApp Costa de Araujo
                </a>

                <a
                  href="https://wa.me/5492613601823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full sm:w-auto items-center justify-center gap-3 bg-green-500 text-white px-8 py-3 rounded-lg text-base font-semibold shadow-sm hover:bg-green-600 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  WhatsApp Villa Tulumaya
                </a>


                {/* Botón Instagram con ícono */}
                <a
                  href="https://www.instagram.com/ab_hogar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full sm:w-auto items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-8 py-3 rounded-lg text-base font-semibold shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372.853.038 1.125.049 3.297.049s2.444-.01 3.297-.049c.852-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.718-.891.923-1.417.198-.509.333-1.09.372-1.942.038-.853.049-1.125.049-3.297s-.01-2.444-.049-3.297c-.04-.852-.174-1.433-.372-1.942a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.444.01 10.173 0 8 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.232s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.598.92 2.5 2.5 0 0 1-.92.598c-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.28-.24-.705-.276-1.485C1.449 10.39 1.442 10.137 1.442 8s.007-2.39.047-3.232c.036-.78.166-1.204.276-1.486a2.5 2.5 0 0 1 .598-.92c.27-.27.546-.453.92-.598.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047zM8 3.882a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 6.774A2.667 2.667 0 1 1 8 5.328a2.667 2.667 0 0 1 0 5.328zm4.965-6.797a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z" />
                  </svg>
                  Instagram
                </a>
              </div>

              <p className="mt-10 text-sm text-center text-gray-500">
                Horarios de atención: Lunes a Lunes de 9 a 20 hs
              </p>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
