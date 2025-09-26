import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
  logoSrc: string;
  logoAlt?: string;
  onNavigate?: (href: string) => void;
}

/**
 * A translucent navigation bar that floats above the hero background.
 * It collapses into a mobile drawer and subtly animates between transparent
 * and solid states as the user scrolls.
 */
const Navbar = ({ links, logoSrc, logoAlt = 'Pecuária Mais', onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={clsx(
        'fixed inset-x-0 top-0 z-40 mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-6 py-4 transition-all duration-500',
        'backdrop-blur-lg',
        isScrolled
          ? 'bg-neutral-900/80 shadow-lg shadow-black/30'
          : 'bg-neutral-900/30 border border-white/10'
      )}
    >
      <div className="flex items-center gap-3">
        <img src={logoSrc} alt={logoAlt} className="h-10 w-auto" loading="lazy" />
        <span className="font-semibold tracking-wide text-neutral-50">Pecuária Mais</span>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <button
            key={link.href}
            type="button"
            onClick={() => handleNavigate(link.href)}
            className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-200 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
          >
            {link.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-neutral-100 transition hover:bg-white/20 md:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="sr-only">Toggle navigation menu</span>
        {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="absolute left-4 right-4 top-[calc(100%+0.75rem)] z-30 rounded-2xl border border-white/10 bg-neutral-900/95 p-4 shadow-2xl shadow-black/60 md:hidden"
          >
            <div className="flex flex-col divide-y divide-white/5">
              {links.map((link) => (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavigate(link.href)}
                  className="py-3 text-left text-sm font-semibold tracking-wide text-neutral-100"
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
