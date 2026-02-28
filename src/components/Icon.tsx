import styled, { css } from 'styled-components';
import type { LucideIcon } from 'lucide-react';

export type IconSize = 'sm' | 'md';

export interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  ring?: boolean;
  'aria-label'?: string;
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

const StyledIconWrapper = styled.span<{ $size: IconSize; $ring?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.neutrals.darkest};
  box-sizing: border-box;

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

const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.neutrals.lightest};
`;

export function Icon({
  icon: IconComponent,
  size = 'md',
  ring = false,
  'aria-label': ariaLabel,
  ...rest
}: IconProps & Omit<React.HTMLAttributes<HTMLSpanElement>, keyof IconProps>) {
  const { icon } = sizeConfig[size];

  return (
    <StyledIconWrapper
      $size={size}
      $ring={ring}
      role="img"
      aria-label={ariaLabel}
      {...rest}
    >
      <StyledIcon>
        <IconComponent size={icon} strokeWidth={2} aria-hidden />
      </StyledIcon>
    </StyledIconWrapper>
  );
}
