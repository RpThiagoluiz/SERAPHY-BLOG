import { css } from 'styled-components';

export const typographyVariants = {
  h1: css`
    font-size: ${(props) => props.theme.typography.h1.size};
    font-weight: ${(props) => props.theme.typography.h1.weight};
    line-height: ${(props) => props.theme.typography.h1.lineHeight};
  `,
  h2: css`
    font-size: ${(props) => props.theme.typography.h2.size};
    font-weight: ${(props) => props.theme.typography.h2.weight};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
  `,
  h3: css`
    font-size: ${(props) => props.theme.typography.h3.size};
    font-weight: ${(props) => props.theme.typography.h3.weight};
    line-height: ${(props) => props.theme.typography.h3.lineHeight};
  `,
  bodyLargeSemiBold: css`
    font-size: ${(props) => props.theme.typography.bodyLargeSemiBold.size};
    font-weight: ${(props) => props.theme.typography.bodyLargeSemiBold.weight};
    line-height: ${(props) =>
      props.theme.typography.bodyLargeSemiBold.lineHeight};
  `,
  bodyLarge: css`
    font-size: ${(props) => props.theme.typography.bodyLarge.size};
    font-weight: ${(props) => props.theme.typography.bodyLarge.weight};
    line-height: ${(props) => props.theme.typography.bodyLarge.lineHeight};
  `,
  bodySmall: css`
    font-size: ${(props) => props.theme.typography.bodySmall.size};
    font-weight: ${(props) => props.theme.typography.bodySmall.weight};
    line-height: ${(props) => props.theme.typography.bodySmall.lineHeight};
  `,
  caption: css`
    font-size: ${(props) => props.theme.typography.caption.size};
    font-weight: ${(props) => props.theme.typography.caption.weight};
    line-height: ${(props) => props.theme.typography.caption.lineHeight};
  `,
} as const;

export type TypographyVariantKey = keyof typeof typographyVariants;
