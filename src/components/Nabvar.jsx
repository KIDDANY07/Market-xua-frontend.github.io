import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import marketLogo from '../assets/market.jpg'; 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center text-xl font-bold text-indigo-600">
          <img src={marketLogo} alt="Market-Xua logo" className="w-14" />
          <h2 className="hidden md:block px-2">Market-Xua</h2>
        </Link>
        <Link to="/" className="hover:text-indigo-600">Inicio</Link>
        <Link to="/store" className="hover:text-indigo-600">Tienda</Link>
        <Link to="/cart" className="hover:text-indigo-600">Carrito</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="w-8 h-8 rounded-full" />
            <span>Usuario</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 bg-white shadow-md rounded mt-2 w-40 z-10">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Perfil</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Cerrar sesión</Link>
            </div>
          )}
        </div>
        <Link to="/cart">🛒</Link>
      </div>
    </nav>
  );
};

export default Navbar;
