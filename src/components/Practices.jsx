import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import Card from './Card';
import SectionTitle from './SectionTitle';
import pecuariaBanner from '../assets/banner_pecumais4.webp';

const Practices = ({ title, subtitle, items }) => {
  const cardHover = {
    whileHover: {
      y: -12,
      scale: 1.03,
      boxShadow: '0 35px 90px rgba(7, 69, 54, 0.35)'
    },
    whileTap: { scale: 0.99 },
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  };

  return (
    <section id="practices" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={pecuariaBanner}
          alt="Criação de gado sustentável na Amazônia"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#031a14]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#031a14]/80 via-[#0b4d3c]/65 to-[#0a2a20]/85" />
      </div>
      <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-green-light/20 blur-3xl opacity-70" />
      <div className="absolute bottom-[-40%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#ffd301]/10 blur-3xl opacity-60" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTitle
            title={title}
            subtitle={subtitle}
            titleClassName="text-white drop-shadow-[0_16px_55px_rgba(0,0,0,0.4)]"
            subtitleClassName="text-white/80 drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          />
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
              <Card className="group relative h-full overflow-hidden border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_25px_70px_rgba(4,35,27,0.45)] transition-transform">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-green-light/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-green-light/30 blur-3xl opacity-60 transition duration-500 group-hover:opacity-80" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <h3 className="max-w-[75%] text-2xl font-semibold text-white md:text-2xl">
                      {practice.title}
                    </h3>
                    <span className="text-5xl font-bold text-white/10 leading-tight">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-white/80">
                    {practice.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {practice.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-light/15 text-sm font-semibold text-green-light">
                          <span>•</span>
                        </div>
                        <span className="text-sm text-white/80 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
