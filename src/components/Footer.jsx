import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Micro<span className="text-purple-400">Tools</span></span>
            </Link>
            <p className="mt-2 text-sm">Tools that make your life easier</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold text-white mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/menu" className="hover:text-purple-400 transition-colors">All Tools</Link></li>
                {/* <li><Link to="/favorites" className="hover:text-purple-400 transition-colors">Favorites</Link></li>
                <li><Link to="/new" className="hover:text-purple-400 transition-colors">New Tools</Link></li> */}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-2">Popular Tools</h3>
              <ul className="space-y-2">
                <li><Link to="/password-generator" className="hover:text-purple-400 transition-colors">Password Generator</Link></li>
                {/* <li><Link to="/qr-code" className="hover:text-purple-400 transition-colors">QR Code Maker</Link></li> */}
                <li><Link to="/stopwatch" className="hover:text-purple-400 transition-colors">Stopwatch</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center md:text-left">
          <p className="text-sm text-gray-400">© {currentYear} MicroTools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;