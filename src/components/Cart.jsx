import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Footer from './footer';
const Cart = () => {
  const [products] = useState([
    {
      name: 'Camisa de algodón',
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg', 
      price: 50000,
    },
    {
      name: 'Camisa color negro',
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg', 
      price: 12000,
    },
    {
      name: 'Blusa mujer xs',
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-03-product-04.jpg', 
      price: 8500,
    },
  ]);

  const [quantities, setQuantities] = useState([1, 2, 1]);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] = newQuantity;
      setQuantities(updatedQuantities);
    }
  };

  const removeItem = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setQuantities(quantities.filter((_, i) => i !== index)); 
  };

  const getTotal = () => {
    return products.reduce((acc, product, index) => acc + product.price * quantities[index], 0).toFixed(2);
  };

  return (
    <>
        <section className="container mx-auto my-3 flex w-full flex-col gap-3 px-4 md:px-10">
        <div className="flex flex-col gap-3">
            {products.map((x, index) => (
            <div key={index} className="flex w-full border px-4 py-4 md:px-6 md:py-6">
                <img
                className="self-start object-contain w-24 h-24 md:w-32 md:h-32"
                src={x.image}
                alt={x.name}
                />
                <div className="ml-3 flex w-full flex-col justify-center">
                <div className="flex items-center justify-between">
                    <p className="text-lg md:text-xl font-bold">{x.name}</p>
                </div>
                <p className="py-3 text-lg md:text-xl font-bold text-violet-900">${x.price}</p>
                <div className="mt-2 flex w-full items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                    <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                        onClick={() => updateQuantity(index, quantities[index] - 1)}
                    >
                        −
                    </button>
                    <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                        {quantities[index]}
                    </div>
                    <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                        onClick={() => updateQuantity(index, quantities[index] + 1)}
                    >
                        +
                    </button>
                    </div>
                    <FaTrashAlt
                    onClick={() => removeItem(index)}
                    className="m-0 h-5 w-5 cursor-pointer"
                    />
                </div>
                </div>
            </div>
            ))}
        </div>

        <div className="mt-4 flex w-full justify-between items-center border-t pt-4">
            <div className="text-lg font-bold text-violet-900">Total: ${getTotal()}</div>
            <button
            className="px-6 py-2 text-white bg-violet-900 rounded-md hover:bg-violet-700 transition-all duration-200"
            onClick={() => alert('Proceder a pago')}
            >
            Pagar
            </button>
        </div>
        
        </section>
        <Footer/>
    </>
  );
};

export default Cart;
