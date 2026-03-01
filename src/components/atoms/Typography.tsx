import styled, { css } from 'styled-components';
import { getThemeColor, hexToRgba } from '../../styles/themeColors';
import { typographyVariants } from '../../styles';
import type { ThemeColorPath } from '../../styles/themeColors';
import type { TypographyVariantKey } from '../../styles';

export type TypographyVariant = TypographyVariantKey;

export type { ThemeColorPath };

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: ThemeColorPath | (string & {});
  opacity?: number;
  as?: React.ElementType;
  children?: React.ReactNode;
}

const StyledTypography = styled.span<{
  $variant: TypographyVariant;
  $color?: string;
  $opacity?: number;
}>`
  margin: 0;

  ${(props) => typographyVariants[props.$variant]}

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
  bodyLargeSemiBold: 'p',
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
