import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Hero = ({ content, backgroundImage, onPrimaryClick, onSecondaryClick }) => (
  <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
    <div className="absolute inset-0 bg-black bg-opacity-40" />
    <div className="absolute inset-0">
      <img src={backgroundImage} alt="Pecuária Sustentável" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-primary/80 to-green-secondary/60" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-grotesk"
        >
          {content.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button onClick={onPrimaryClick} className="btn-primary text-lg px-8 py-4">
            {content.cta}
          </button>
          <button onClick={onSecondaryClick} className="btn-secondary text-lg px-8 py-4">
            {content.cta2}
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
