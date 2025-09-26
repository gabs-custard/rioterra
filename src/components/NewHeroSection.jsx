import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import NewNavbar from './NewNavbar';
import NewThreeScene from './NewThreeScene';
import { Button } from './ui/button';

// Framer Motion variants for staggering animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const NewHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <NewThreeScene />
      </div>

      {/* Navbar */}
      <NewNavbar />

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 bg-black/30" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <motion.div
          className="max-w-4xl px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          >
            Amazon Reimagined.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
          >
            Fusing advanced technology with sustainable practices to cultivate a new future for Amazonian agriculture.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px #00BFFF' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Discover the Project
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHeroSection;