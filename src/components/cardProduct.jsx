import React from "react";

const CardProduct = ({ producto }) => {
  const { nombre, imagen, precio, tipo } = producto;

  return (
    <div className="flex flex-col bg-[#D7B391] border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
      {/* Contenedor Imagen y etiqueta de OFERTA */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src={imagen}
          alt={`Imagen de ${nombre}`}
        />
        {/* Renderizado condicional para la descripción del combo, si la condición es true, React renderiza lo que está después de &&. Si es false, no muestra nada.*/}
        {/*{tipo === "oferta" && ( 
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {producto.descuento}
          </span>
        )}*/}
      </div>

      {/* Contenedor de contenido */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Etiqueta para tipo de producto */}
        {tipo === "combo" ? (
          <span className="text-xs font-semibold text-blue-600 uppercase mb-1">
            Combo
          </span>
        ) : tipo === "oferta" ? (
          <span className="text-xs font-semibold text-red-600 uppercase mb-1">
            Oferta
          </span>
        ) : (
          <span className="text-xs font-semibold text-green-600 uppercase mb-1">
            Unidad
          </span>
        )}

        <h3
          className="text-lg font-semibold text-gray-800 mb-2 truncate"
          title={nombre}
        >
          {nombre}
        </h3>

        <p className="text-sm font-semibold text-gray-800 mb-3">
          {producto.descripcion}
        </p>

        {/* Renderizado de la lista de produxtos del combo */}
        {tipo === "combo" && (
          <ul className="text-sm font-semibold text-gray-800 mb-4 list-disc list-inside">
            {producto.incluye.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          {tipo === "oferta" ? (
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-red-600">{precio}</p>
              <p className="text-md text-gray-500 line-through">
                {producto.precioAnterior}
              </p>
            </div>
          ) : (
            <p className="text-2xl font-bold text-gray-900">{precio}</p>
          )}
        </div>

        {/* Botón de acción 
        <button className="mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Agregar al carrito
        </button>*/}
      </div>
    </div>
  );
};

export default CardProduct;
