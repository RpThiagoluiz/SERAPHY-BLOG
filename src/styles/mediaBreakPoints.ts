export const mediaBreakPoints = {
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export type MediaBreakPoints = typeof mediaBreakPoints;
