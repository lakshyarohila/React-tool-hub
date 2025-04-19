import { DraftingCompass } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex w-full justify-between items-center bg-slate-900 py-4 px-5 sm:px-20">
      <div className="flex gap-2 items-center text-3xl">
        <DraftingCompass />
        <span className="text-2xl font-medium">Micro Tools</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden sm:block">
        <Link className="text-2xl font-medium" to="/menu">
          Menu
        </Link>
      </div>
      
      {/* Mobile Menu Toggle */}
      <div className="sm:hidden">
        <button
          className="text-2xl font-medium"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-5 sm:hidden">
          <Link
            className="block text-lg font-medium py-2"
            to="/menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;