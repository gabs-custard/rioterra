import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const NewNavbar = () => {
  const navItems = ["Home", "About", "Technology", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 bg-black bg-opacity-20 backdrop-blur-sm rounded-b-lg px-6">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">Pecuária<span className="text-cyan-400">Mais</span></h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NewNavbar;