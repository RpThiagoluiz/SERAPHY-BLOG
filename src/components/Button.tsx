import styled, { css } from 'styled-components';
import type { LucideIcon } from 'lucide-react';
import { getThemeColor } from '../styles/themeColors';
import { themeColors } from '../styles';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: LucideIcon;
}

const ICON_SIZE = 20;
const ICON_TEXT_GAP = 16;

const primaryStyles = css`
  background-color: ${(props) =>
    getThemeColor(props.theme, themeColors.secondary.medium)};
  color: ${(props) =>
    getThemeColor(props.theme, themeColors.neutrals.lightest)};
  border: none;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      getThemeColor(props.theme, themeColors.secondary.dark)};
  }
`;

const secondaryStyles = css`
  background-color: transparent;
  color: ${(props) => getThemeColor(props.theme, themeColors.secondary.medium)};
  border: 1px solid
    ${(props) => getThemeColor(props.theme, themeColors.secondary.medium)};

  &:hover:not(:disabled) {
    color: ${(props) => getThemeColor(props.theme, themeColors.secondary.dark)};
    border-color: ${(props) =>
      getThemeColor(props.theme, themeColors.secondary.dark)};
  }
`;

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${ICON_TEXT_GAP}px;
  padding: 12px 24px;
  border-radius: 9999px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 1rem;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  ${(props) => (props.$variant === 'primary' ? primaryStyles : secondaryStyles)}

  &:focus-visible {
    outline: 2px solid
      ${(props) => getThemeColor(props.theme, themeColors.secondary.medium)};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
`;

export function Button({
  variant = 'primary',
  icon: IconComponent,
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} type="button" {...rest}>
      {IconComponent && (
        <StyledIcon aria-hidden>
          <IconComponent size={ICON_SIZE} strokeWidth={2} />
        </StyledIcon>
      )}
      {children}
    </StyledButton>
  );
}
