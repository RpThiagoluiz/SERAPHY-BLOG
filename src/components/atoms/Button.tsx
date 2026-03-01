import styled, { css } from 'styled-components';
import type { LucideIcon } from 'lucide-react';
import { typographyVariants } from '../../styles';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: LucideIcon;
}

const ICON_SIZE = 20;
const ICON_TEXT_GAP = 16;

const primaryStyles = css`
  background-color: ${(props) => props.theme.colors.secondary.medium};
  color: ${(props) => props.theme.colors.neutrals.lightest};
  border: none;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.secondary.dark};
  }
`;

const secondaryStyles = css`
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary.medium};
  border: 1px solid ${(props) => props.theme.colors.secondary.medium};

  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.secondary.dark};
    border-color: ${(props) => props.theme.colors.secondary.dark};
  }
`;

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${ICON_TEXT_GAP}px;
  padding: 12px 24px;
  border-radius: ${(props) => props.theme.radii.pill};
  ${typographyVariants.bodyLargeSemiBold}
  cursor: pointer;
  transition: ${(props) => props.theme.transition.interactive};

  ${(props) => (props.$variant === 'primary' ? primaryStyles : secondaryStyles)}

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.secondary.medium};
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
