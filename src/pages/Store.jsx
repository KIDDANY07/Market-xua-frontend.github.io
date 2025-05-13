import React, { useState } from 'react';
import Footer from '../components/footer';

const Store = () => {
  const exchangeRate = 4500;

  const mockStore = {
    name: "Textiles Lupita",
    image: "https://www.tusitioweb.com/images/hero.jpg",
    rating: 3,
    products: [
      {
        id: 0,
        name: "Producto 1",
        price: ((10 + 0 * 2) * exchangeRate).toFixed(0),
        image: "https://images.pexels.com/photos/8030176/pexels-photo-8030176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      },
      {
        id: 1,
        name: "Producto 2",
        price: ((10 + 1 * 2) * exchangeRate).toFixed(0),
        image: "https://images.pexels.com/photos/6461325/pexels-photo-6461325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        name: "Producto 3",
        price: ((10 + 2 * 2) * exchangeRate).toFixed(0),
        image: "https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 3,
        name: "Producto 4",
        price: ((10 + 3 * 2) * exchangeRate).toFixed(0),
        image: "https://images.pexels.com/photos/9899496/pexels-photo-9899496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 4,
        name: "Producto 5",
        price: ((10 + 4 * 2) * exchangeRate).toFixed(0),
        image: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 5,
        name: "Producto 6",
        price: ((10 + 5 * 2) * exchangeRate).toFixed(0),
        image: "https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 6,
        name: "Producto 7",
        price: ((10 + 6 * 2) * exchangeRate).toFixed(0),
        image: "https://images.pexels.com/photos/2923922/pexels-photo-2923922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 7,
        name: "Producto 8",
        price: ((10 + 7 * 2) * exchangeRate).toFixed(0),
        image: "https://images.pexels.com/photos/7959592/pexels-photo-7959592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  };


  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
    
      <header className="text-center py-26 px-6 bg-[url('./assets/fondoheadertienda.jpg')] bg-cover bg-center bg-blur-sm shadow-xl mb-8">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">
          {mockStore.name}
        </h1>
        <p className="mt-4 text-xl text-white">Descubre los textiles más innovadores con calidad excepcional.</p>
      </header>



      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mockStore.products.map(product => (
            <div key={product.id} className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={product.image}
                alt={product.name} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-3xl" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent p-4 rounded-b-3xl">
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                <p className="text-lg text-white">${product.price}</p> 
                <button 
                  onClick={() => addToCart(product)} 
                  className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
