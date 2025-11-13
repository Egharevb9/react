
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">NaijaMarket</h1>

        {/* Navigation links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200 transition">Home</a>
          <a href="#" className="hover:text-gray-200 transition">Shop</a>
          <a href="#" className="hover:text-gray-200 transition">Blog</a>
          <a href="#" className="hover:text-gray-200 transition">Contact</a>
        </div>

        {/* Right side: cart + login + hamburger */}
        <div className="flex items-center space-x-4">
          {/* Cart icon using emoji */}
          <span className="text-2xl cursor-pointer">🛒</span>

          {/* Login button */}
          <button className="bg-white text-green-700 px-3 py-1 rounded font-semibold hover:bg-gray-100 transition">
            Login
          </button>

          {/* Hamburger menu (mobile only) */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 flex flex-col space-y-2 px-4 pb-4 transition-all duration-300">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Shop</a>
          <a href="#" className="hover:text-gray-200">Blog</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default App;



