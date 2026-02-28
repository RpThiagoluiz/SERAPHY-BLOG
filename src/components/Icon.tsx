import styled, { css } from 'styled-components';
import type { LucideIcon } from 'lucide-react';
import { getThemeColor } from '../styles';
import type { Theme, ThemeColorPath } from '../styles';

export type IconSize = 'sm' | 'md';

export type { ThemeColorPath };

export interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  ring?: boolean;
  background?: ThemeColorPath | (string & {});
  color?: ThemeColorPath | (string & {});
  'aria-label'?: string;
}

function resolveColor(theme: Theme, value: string): string {
  const themeColor = getThemeColor(theme, value);
  return themeColor ?? value;
}

const sizeConfig = {
  sm: {
    container: 24,
    icon: 24,
    padding: 0,
  },
  md: {
    container: 40,
    icon: 24,
    padding: 8,
  },
} as const;

const RING_WIDTH = 4;

const StyledIconWrapper = styled.span<{
  $size: IconSize;
  $ring?: boolean;
  $background?: string;
  $color?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$background
      ? resolveColor(props.theme, props.$background)
      : 'transparent'};
  box-sizing: border-box;
  cursor: pointer;

  ${(props) => {
    const { container, padding } = sizeConfig[props.$size];
    const size = props.$ring ? container + RING_WIDTH * 2 : container;
    return css`
      width: ${size}px;
      height: ${size}px;
      padding: ${padding}px;
      ${props.$ring &&
      css`
        border: ${RING_WIDTH}px solid ${props.theme.colors.neutrals.light};
        width: ${size + RING_WIDTH * 2}px;
        height: ${size + RING_WIDTH * 2}px;
      `}
    `;
  }}
`;

const StyledIcon = styled.span<{ $color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.$color ? resolveColor(props.theme, props.$color) : 'currentColor'};
`;

export function Icon({
  icon: IconComponent,
  size = 'md',
  ring = false,
  background,
  color,
  'aria-label': ariaLabel,
  ...rest
}: IconProps & Omit<React.HTMLAttributes<HTMLSpanElement>, keyof IconProps>) {
  const { icon } = sizeConfig[size];

  return (
    <StyledIconWrapper
      $size={size}
      $ring={ring}
      $background={background}
      role="img"
      aria-label={ariaLabel}
      {...rest}
    >
      <StyledIcon $color={color}>
        <IconComponent size={icon} strokeWidth={2} aria-hidden />
      </StyledIcon>
    </StyledIconWrapper>
  );
}
