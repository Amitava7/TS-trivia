// Design system for Swiftie Trivia — a colorful pop aesthetic built around
// Taylor's lucky number, 13. Dark jewel-toned canvas so the glitter pops,
// with bright per-game gradients carrying the color.

export const LUCKY_NUMBER = 13;

export const colors = {
  // Canvas
  bg0: '#160427',
  bg1: '#2A0A4E',
  bg2: '#1A0938',

  // Brand accents
  pink: '#FF2E88',
  hotPink: '#FF6CAB',
  violet: '#9B5DE5',
  purple: '#7B2FB5',
  blue: '#5B8DEF',
  gold: '#FFD36E',
  amber: '#FF9E1B',
  mint: '#3AC6B0',

  // Feedback
  correct: '#2BD49B',
  correctDeep: '#0E8F66',
  wrong: '#FF5470',
  wrongDeep: '#B71F3A',

  // Neutrals
  white: '#FFFFFF',
  ink: '#1A0B2E',
  text: '#FFFFFF',
  textDim: 'rgba(255,255,255,0.72)',
  textFaint: 'rgba(255,255,255,0.45)',
  card: 'rgba(255,255,255,0.08)',
  cardBorder: 'rgba(255,255,255,0.16)',
  glass: 'rgba(255,255,255,0.10)',
};

export const gradients = {
  app: [colors.bg0, colors.bg1, colors.bg2],
  title: ['#FFD36E', '#FF6CAB', '#9B5DE5'],
  cta: ['#FF6CAB', '#9B5DE5'],
};

export const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  pill: 999,
};

export const spacing = (n) => n * 8;

export const font = {
  // System font stack; weights + letterSpacing carry the personality.
  black: '900',
  heavy: '800',
  bold: '700',
  semibold: '600',
  medium: '500',
};

export const shadow = {
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  glow: (c) => ({
    shadowColor: c,
    shadowOpacity: 0.6,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 12,
  }),
};
