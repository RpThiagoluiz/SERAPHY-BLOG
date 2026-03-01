import { mediaBreakPoints } from './mediaBreakPoints';

export const theme = {
  colors: {
    neutrals: {
      lightest: '#F0F0F2',
      extraLight: '#E0E2E6',
      light: '#C0C2C8',
      medium: '#9EA0A5',
      dark: '#7F8185',
      extraDark: '#5E5F63',
      darkest: '#202122',
    },
    primary: {
      light: '#0B0E3A',
      medium: '#060725',
      dark: '#020318',
    },
    secondary: {
      light: '#EF4C84',
      medium: '#D31450',
      dark: '#8C1038',
    },
    accent: {
      light: '#00BFC1',
      medium: '#009598',
      dark: '#006C6E',
    },
  },
  typography: {
    fontFamily: '"Inter", "Open Sans", sans-serif',
    h1: { size: '3.5rem', weight: 700, lineHeight: '130%' },
    h2: { size: '2.25rem', weight: 700, lineHeight: '130%' },
    h3: { size: '1.25rem', weight: 700, lineHeight: '130%' },
    bodyLargeSemiBold: { size: '1rem', weight: 600, lineHeight: '150%' },
    bodyLarge: { size: '1rem', weight: 400, lineHeight: '150%' },
    bodySmall: { size: '0.875rem', weight: 400, lineHeight: '150%' },
    caption: { size: '0.75rem', weight: 400, lineHeight: '130%' },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  breakpoints: mediaBreakPoints,
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    pill: '9999px',
  },
  transition: {
    interactive:
      'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
  },
} as const;

export type Theme = typeof theme;
