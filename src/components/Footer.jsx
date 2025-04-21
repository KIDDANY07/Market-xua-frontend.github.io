// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wider">Market-XUA</h2>
          <p className="text-sm text-gray-400 mt-2">Tu mercado digital confiable</p>
        </div>

        <div className="flex justify-center space-x-6">
          <Link to="/" className="text-gray-400 hover:text-white transition">Inicio</Link>
            <Link to="/store" className="text-gray-400 hover:text-white transition">Tienda</Link>
            <Link to="/cart" className="text-gray-400 hover:text-white transition">Carrito</Link>
          
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Market-XUA. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
