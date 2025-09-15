import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300 dark:text-gray-400 flex items-center space-x-2">
              <span>2025 Ajinkya Patil. Built with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>React + TypeScript</span>
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Designed and developed with modern web technologies. 
            Always learning, always improving.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;