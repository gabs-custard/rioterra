import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import heroVideo from '../assets/hero.mp4';

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1],
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

const Hero = ({ content, backgroundImage, onPrimaryClick, onSecondaryClick }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let ratio = window.devicePixelRatio ?? 1;

    const nodes = Array.from({ length: 42 }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.0025,
      vy: (Math.random() - 0.5) * 0.0025,
      vz: (Math.random() - 0.5) * 0.0015
    }));

    const perspective = 950;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      ratio = window.devicePixelRatio ?? 1;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(ratio, ratio);
    };

    resize();

    const project = (node) => {
      const scale = perspective / (perspective - node.z * 400);
      return {
        x: node.x * scale * 220 + width / 2,
        y: node.y * scale * 220 + height / 2,
        scale
      };
    };

    const update = () => {
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;

      const projected = nodes.map((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        if (node.x < -1 || node.x > 1) node.vx *= -1;
        if (node.y < -1 || node.y > 1) node.vy *= -1;
        if (node.z < 0 || node.z > 1.2) node.vz *= -1;

        return project(node);
      });

      for (let i = 0; i < projected.length; i += 1) {
        for (let j = i + 1; j < projected.length; j += 1) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = 0.25 - distance / 720;
            if (opacity <= 0) continue;
            context.strokeStyle = `rgba(188, 219, 46, ${opacity})`;
            context.beginPath();
            context.moveTo(projected[i].x, projected[i].y);
            context.lineTo(projected[j].x, projected[j].y);
            context.stroke();
          }
        }
      }

      projected.forEach(({ x, y, scale }) => {
        const radius = Math.max(1.2, 2.8 * scale);
        const gradient = context.createRadialGradient(x, y, radius * 0.3, x, y, radius);
        gradient.addColorStop(0, 'rgba(188, 219, 46, 0.95)');
        gradient.addColorStop(1, 'rgba(32, 125, 15, 0.05)');
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const title = content?.title ?? 'Pecuária Mais';
  const subtitle =
    content?.subtitle ??
    'Tecnologia e natureza trabalhando juntas para uma pecuária regenerativa e próspera na Amazônia.';
  const cta = content?.cta ?? 'Explore mais';

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#074536] lg:min-h-screen"
      style={{ fontFamily: '"Manrope", "Inter", sans-serif' }}
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={heroVideo}
          poster={backgroundImage}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#074536]/90 via-[#074536]/70 to-[#207d0f]/85 mix-blend-multiply" />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-80"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(188,219,46,0.22)_0%,_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111111] to-transparent" />
      </div>

      <motion.div
        className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bcdb2e]/40 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-[#bcdb2e] shadow-[0_0_25px_rgba(188,219,46,0.25)] sm:text-sm sm:px-5 sm:py-2"
          variants={childVariants}
        >
          Tecnologia • Regeneração • Amazônia
        </motion.span>

        <motion.h1

          className="text-balance text-4xl font-extrabold leading-[1.08] text-white drop-shadow-[0_16px_40px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-7xl"
          variants={childVariants}
        >
          {title}
        </motion.h1>

        <motion.p

          className="mt-6 max-w-3xl text-base text-white/80 sm:text-lg md:text-xl"
          variants={childVariants}
        >
          {subtitle}
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4" variants={childVariants}>
          <motion.button
            type="button"
            onClick={onPrimaryClick}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 32px rgba(255, 211, 1, 0.45)'
            }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center justify-center rounded-full bg-[#ffd301] px-8 py-3 text-base font-semibold uppercase tracking-wide text-black shadow-[0_20px_40px_rgba(255,211,1,0.3)] transition-all sm:px-10 sm:py-4 sm:text-lg"
          >
            <span>{cta}</span>
            <svg
              aria-hidden="true"
              className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          {content?.cta2 && onSecondaryClick && (
            <motion.button
              type="button"
              onClick={onSecondaryClick}
              whileHover={{ scale: 1.03, color: '#ffd301' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-base font-semibold uppercase tracking-wide text-white/80 transition-all sm:px-8 sm:py-4 sm:text-lg"
            >
              {content.cta2}
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
