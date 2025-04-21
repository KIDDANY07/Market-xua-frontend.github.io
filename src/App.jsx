import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Nabvar';
import Home from './pages/Home';
import Store from './pages/Store';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
