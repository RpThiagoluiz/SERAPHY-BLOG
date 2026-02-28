import styled, { css } from 'styled-components';
import { getThemeColor, hexToRgba } from '../styles/themeColors';
import type { ThemeColorPath } from '../styles/themeColors';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'bodyLarge'
  | 'bodySmall'
  | 'caption';

export type { ThemeColorPath };

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: ThemeColorPath | (string & {});
  opacity?: number;
  as?: React.ElementType;
  children?: React.ReactNode;
}

const variantStyles = {
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
};

const StyledTypography = styled.span<{
  $variant: TypographyVariant;
  $color?: string;
  $opacity?: number;
}>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: 0;

  ${(props) => variantStyles[props.$variant]}

  ${(props) => {
    if (!props.$color) return '';
    const themeColor = getThemeColor(props.theme, props.$color);
    const colorValue = themeColor ?? props.$color;
    const finalColor =
      props.$opacity != null && colorValue.startsWith('#')
        ? hexToRgba(colorValue, props.$opacity)
        : colorValue;
    return css`
      color: ${finalColor};
    `;
  }}
`;

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  bodyLarge: 'p',
  bodySmall: 'p',
  caption: 'span',
};

type StyledTypographyProps = React.ComponentPropsWithoutRef<
  typeof StyledTypography
>;

type StyledTypographyOmit = '$variant' | '$color' | '$opacity';

export function Typography({
  variant = 'bodyLarge',
  color,
  opacity,
  as,
  children,
  ...rest
}: TypographyProps & Omit<StyledTypographyProps, StyledTypographyOmit>) {
  const Component = as ?? defaultElementMap[variant];

  return (
    <StyledTypography
      as={Component}
      $variant={variant}
      $color={color}
      $opacity={opacity}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
}
