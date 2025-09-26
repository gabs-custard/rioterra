import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import Card from './Card';
import SectionTitle from './SectionTitle';

const Practices = ({ title, subtitle, items }) => {
  const cardHover = {
    whileHover: { y: -10, scale: 1.02, boxShadow: '0 25px 60px rgba(7, 69, 54, 0.18)' },
    whileTap: { scale: 0.99 },
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  };

  return (
    <section
      id="practices"
      className="section-padding bg-gradient-to-br from-[#f5fce8] via-[#e2f5ee] to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTitle title={title} subtitle={subtitle} />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {items.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              {...cardHover}
            >
              <Card className="bg-white/90 h-full p-8 shadow-xl border border-[#74c69d]/30 backdrop-blur">
                <h3 className="text-2xl font-bold text-[#0f5132] mb-4">{practice.title}</h3>
                <p className="text-[#1f2a37]/80 mb-6 leading-relaxed">{practice.description}</p>
                <div className="space-y-3">
                  {practice.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#ffd301] rounded-full" />
                      <span className="text-sm text-[#1f2a37]/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practices;
