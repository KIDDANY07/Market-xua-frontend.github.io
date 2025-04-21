import React from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../assets/hero.jpg';
import hero2 from '../assets/hero.jpg';
import hero3 from '../assets/hero.jpg';
import hero4 from '../assets/hero.jpg';
import hero5 from '../assets/hero.jpg';
import hero6 from '../assets/hero.jpg';
import hero7 from '../assets/hero.jpg';

const Carousel = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

  const descriptions = [
    ["Tienda especializada en", "telas premium", "para confección de alta costura."],
    ["Explora nuestra colección de", "textiles ecológicos", "y sostenibles."],
    ["La mejor selección de", "telas estampadas", "para proyectos creativos."],
    ["Ropa casual y urbana", "hecha 100% con algodón orgánico", "."],
    ["Proveedor textil para", "diseñadores emergentes", "y marcas locales."],
    ["Accesorios y textiles", "artesanales", "con identidad cultural."],
    ["Moda deportiva", "hecha con telas inteligentes", "y transpirables."]
  ];

  return (
    <div className="p-6 bg-white ml-7 mr-7 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center pb-4">¡Descubre nuestras Tiendas Textiles!</h2>

      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        {images.map((img, i) => (
          <div
            key={i}
            className="min-w-[280px] sm:min-w-[320px] bg-gray-50 rounded-lg shadow hover:shadow-md transition duration-300 flex-shrink-0"
          >
            <div className="relative">
              <img
                src={img}
                className="rounded-t-lg w-full h-60 object-cover"
                alt={`Tienda textil ${i + 1}`}
              />
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
                <Link
                  to="/store"
                  className="z-10 text-white font-semibold text-lg bg-black bg-opacity-70 px-4 py-2 rounded hover:bg-opacity-90"
                >
                  ¡Haz click aquí!
                </Link>
              </div>
            </div>
            <p className="p-4 text-sm text-gray-700 text-center">
              {descriptions[i].map((part, index) => (
                <span
                  key={index}
                  className={index === 1 ? 'text-indigo-600 font-medium' : ''}
                >
                  {part + ' '}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
