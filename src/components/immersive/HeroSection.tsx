import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar, { NavLink } from './Navbar';
import ThreeScene from './ThreeScene';
import { Button } from '../ui/button.jsx';

interface HeroSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  onCtaClick?: () => void;
  onNavigate?: (href: string) => void;
  navLinks: NavLink[];
  logoSrc: string;
  logoAlt?: string;
  fallbackImageSrc: string;
}

const useMediaQuery = (query: string) => {
  const getMatches = (q: string) => (typeof window !== 'undefined' ? window.matchMedia(q).matches : false);
  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

const HeroSection = ({
  id = 'home',
  title,
  subtitle,
  ctaLabel,
  onCtaClick,
  onNavigate,
  navLinks,
  logoSrc,
  logoAlt = 'Pecuária Mais',
  fallbackImageSrc,
}: HeroSectionProps) => {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [hasEngaged, setHasEngaged] = useState(false);
  const MotionButton = useMemo(() => motion(Button), []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 16) {
        setHasEngaged(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePointerEngage = useCallback(() => {
    setHasEngaged(true);
  }, []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          when: 'beforeChildren',
          staggerChildren: 0.18,
        },
      },
    }),
    []
  );

  const childVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
    }),
    []
  );

  return (
    <section id={id} className="relative min-h-screen w-full overflow-hidden bg-[#020B06] text-neutral-50">
      <Navbar
        links={navLinks}
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        onNavigate={(href) => {
          setHasEngaged(true);
          onNavigate?.(href);
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C2C1C] via-[#07150E] to-[#020B06]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00BFFF33,transparent_60%)]" />
      </div>

      <div className="absolute inset-0">
        {prefersReducedMotion || isMobile ? (
          <img
            src={fallbackImageSrc}
            alt="Representação digital da floresta amazônica"
            className="h-full w-full object-cover opacity-70"
            loading="lazy"
          />
        ) : (
          <ThreeScene isInteractive={hasEngaged} onPointerEngage={handlePointerEngage} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020B06] via-[#020B06]/30 to-transparent" />
      </div>

      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 py-32">
        <motion.div
          className="flex w-full max-w-3xl flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.6em] text-cyan-300/80"
            variants={childVariants}
          >
            Tecnologia a serviço da Amazônia
          </motion.p>

          <motion.h1
            className="mt-6 font-sans text-4xl font-bold leading-tight text-[#F5F5F5] drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
            variants={childVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base text-neutral-200/90 sm:text-lg"
            variants={childVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div className="mt-10" variants={childVariants}>
            <MotionButton
              size="lg"
              className="group relative overflow-hidden rounded-full bg-[#00BFFF] px-10 py-5 text-base font-semibold uppercase tracking-[0.4em] text-[#04110B] shadow-[0_25px_50px_-12px_rgba(0,191,255,0.45)] transition"
              onClick={onCtaClick}
              asChild={false}
              whileHover={{ scale: 1.04, boxShadow: '0 30px 65px -18px rgba(0,191,255,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center gap-3">
                {ctaLabel}
                <span className="h-px w-12 bg-[#04110B]/40 transition-all duration-300 group-hover:w-16" />
                <span className="size-2 rounded-full bg-[#04110B] group-hover:shadow-[0_0_18px_6px_#00BFFF]" />
              </span>
            </MotionButton>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-30 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.8, y: 0, transition: { delay: 1.2, duration: 0.8 } }}
          className="flex flex-col items-center text-xs font-medium uppercase tracking-[0.4em] text-neutral-300"
        >
          Explore mais
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-3 h-12 w-px bg-gradient-to-b from-[#00BFFF] via-transparent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
