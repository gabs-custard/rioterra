import React from 'react';
import { motion } from 'framer-motion';

const MotionCircle = motion.circle;
const MotionGroup = motion.g;

const HeroLandscape = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900/90 to-green-800/80" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,255,220,0.35),transparent_55%)]" />
    <svg
      viewBox="0 0 1440 720"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#0b3d2e" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#064e3b" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="forestCanopy" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f5132" />
          <stop offset="50%" stopColor="#1c6b3e" />
          <stop offset="100%" stopColor="#125c35" />
        </linearGradient>
        <linearGradient id="pasture" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a7a46" />
          <stop offset="100%" stopColor="#2f9c55" />
        </linearGradient>
        <linearGradient id="river" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="fieldLines" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
        <linearGradient id="treeTrunk" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3f2f1e" />
          <stop offset="100%" stopColor="#1f1b16" />
        </linearGradient>
        <linearGradient id="treeFoliage" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2f855a" />
          <stop offset="100%" stopColor="#0f5132" />
        </linearGradient>
        <linearGradient id="cowBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fefefe" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>

      <rect width="1440" height="720" fill="url(#skyGradient)" />

      <MotionCircle
        cx="240"
        cy="200"
        r="120"
        fill="rgba(252, 211, 77, 0.45)"
        initial={{ opacity: 0.4, scale: 0.95 }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <path
        d="M0 380 C 180 340 360 360 540 330 C 720 300 930 350 1120 320 C 1280 295 1440 320 1440 320 L 1440 0 L 0 0 Z"
        fill="url(#forestCanopy)"
        opacity="0.9"
      />

      <path
        d="M0 510 C 160 470 320 490 520 460 C 740 425 980 470 1200 440 C 1310 425 1440 440 1440 440 L 1440 720 L 0 720 Z"
        fill="url(#pasture)"
        opacity="0.95"
      />

      <path
        d="M0 720 C 220 640 340 600 520 580 C 740 555 880 610 1080 580 C 1260 555 1440 600 1440 600 L 1440 720 Z"
        fill="url(#river)"
        opacity="0.7"
      />

      <path
        d="M0 600 Q 180 560 360 580 T 720 580 T 1080 560 T 1440 580"
        fill="none"
        stroke="url(#fieldLines)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M80 540 Q 260 520 420 545 T 760 530 T 1120 545 T 1360 520"
        fill="none"
        stroke="url(#fieldLines)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.3"
      />

      <g opacity="0.55">
        <path
          d="M220 520 C 240 500 280 500 300 520 C 320 540 300 560 280 560 C 260 560 200 540 220 520 Z"
          fill="#14532d"
        />
        <path
          d="M1020 500 C 1040 480 1080 480 1100 500 C 1120 520 1100 540 1080 540 C 1060 540 1000 520 1020 500 Z"
          fill="#166534"
        />
        <path
          d="M580 540 C 600 515 640 515 660 540 C 680 565 660 585 640 585 C 620 585 560 565 580 540 Z"
          fill="#166534"
        />
      </g>

      <MotionGroup
        initial={{ opacity: 0.6, y: 0 }}
        animate={{ opacity: [0.6, 0.8, 0.6], y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M420 470 C 430 455 450 450 465 455 C 480 460 485 470 482 485 C 470 510 430 515 420 470 Z"
          fill="#f8fafc"
          fillOpacity="0.35"
        />
        <path
          d="M860 450 C 875 430 905 430 920 450 C 935 470 920 485 900 490 C 880 495 845 475 860 450 Z"
          fill="#e0f2fe"
          fillOpacity="0.3"
        />
      </MotionGroup>

      <g opacity="0.7">
        {[120, 320, 520, 940, 1180, 1340].map((x) => (
          <g key={`tree-back-${x}`} transform={`translate(${x} 430)`}>
            <rect x="-6" y="10" width="12" height="60" rx="3" fill="url(#treeTrunk)" />
            <path
              d="M0 -40 C -35 -10 -20 20 0 30 C 20 20 35 -10 0 -40 Z"
              fill="url(#treeFoliage)"
              opacity="0.9"
            />
            <path
              d="M0 -20 C -28 0 -18 25 0 30 C 18 25 28 0 0 -20 Z"
              fill="#1f8f51"
              opacity="0.8"
            />
          </g>
        ))}
      </g>

      <g opacity="0.9">
        {[240, 420, 780, 1030].map((x) => (
          <g key={`tree-front-${x}`} transform={`translate(${x} 500)`}>
            <rect x="-8" y="20" width="16" height="90" rx="4" fill="url(#treeTrunk)" />
            <path
              d="M0 -50 C -45 -15 -25 25 0 40 C 25 25 45 -15 0 -50 Z"
              fill="url(#treeFoliage)"
            />
            <path
              d="M0 -15 C -30 5 -20 30 0 35 C 20 30 30 5 0 -15 Z"
              fill="#1c8d54"
              opacity="0.85"
            />
          </g>
        ))}
      </g>

      <MotionGroup
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <g transform="translate(620 520)">
          <ellipse cx="0" cy="28" rx="60" ry="18" fill="rgba(15, 118, 110, 0.35)" />
          <path
            d="M-50 0 C -40 -35 -10 -45 20 -40 C 50 -35 70 -15 68 10 C 65 35 40 45 10 40 C -10 36 -45 25 -50 0 Z"
            fill="url(#cowBody)"
          />
          <path d="M62 5 C 80 2 85 15 78 28 C 70 38 50 35 52 18 Z" fill="#0f172a" opacity="0.8" />
          <circle cx="65" cy="13" r="4" fill="#1e293b" />
          <rect x="-42" y="22" width="8" height="32" rx="3" fill="#0f172a" />
          <rect x="-8" y="26" width="8" height="30" rx="3" fill="#0f172a" />
          <rect x="22" y="28" width="8" height="26" rx="3" fill="#0f172a" />
          <rect x="48" y="24" width="8" height="28" rx="3" fill="#0f172a" />
          <path d="M-60 2 C -70 -6 -80 -10 -78 5 C -75 25 -55 28 -45 18 Z" fill="#0f172a" />
          <path d="M-12 -32 C 6 -40 18 -28 12 -10 C 8 -2 -12 8 -28 2 C -40 -2 -28 -20 -12 -32 Z" fill="#0f172a" opacity="0.12" />
        </g>
        <g transform="translate(940 550)">
          <ellipse cx="0" cy="24" rx="48" ry="14" fill="rgba(13, 148, 136, 0.3)" />
          <path
            d="M-38 0 C -30 -28 0 -34 24 -30 C 48 -26 64 -10 60 10 C 56 28 36 34 10 30 C -6 28 -36 18 -38 0 Z"
            fill="url(#cowBody)"
          />
          <path d="M54 4 C 68 2 72 14 66 24 C 60 32 44 30 46 16 Z" fill="#0f172a" opacity="0.85" />
          <circle cx="56" cy="11" r="3.6" fill="#1e293b" />
          <rect x="-34" y="18" width="7" height="24" rx="3" fill="#0f172a" />
          <rect x="-10" y="20" width="7" height="22" rx="3" fill="#0f172a" />
          <rect x="14" y="20" width="7" height="22" rx="3" fill="#0f172a" />
          <rect x="32" y="18" width="7" height="24" rx="3" fill="#0f172a" />
          <path d="M-46 1 C -54 -5 -62 -8 -60 6 C -58 22 -44 24 -34 16 Z" fill="#0f172a" />
        </g>
      </MotionGroup>
    </svg>
  </div>
);

export default HeroLandscape;
