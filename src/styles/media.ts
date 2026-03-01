import { css } from 'styled-components';
import type { Interpolation } from 'styled-components';
import { mediaBreakPoints } from './mediaBreakPoints';

const createMedia =
  (breakpoint: string) =>
  (
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<object>[]
  ) => css`
    @media (min-width: ${breakpoint}) {
      ${css(strings, ...interpolations)}
    }
  `;

export const media = {
  sm: createMedia(mediaBreakPoints.sm),
  md: createMedia(mediaBreakPoints.md),
  lg: createMedia(mediaBreakPoints.lg),
  xl: createMedia(mediaBreakPoints.xl),
} as const;
