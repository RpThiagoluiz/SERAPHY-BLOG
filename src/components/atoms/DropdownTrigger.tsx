import styled, { css } from 'styled-components';
import type { LucideIcon } from 'lucide-react';
import { hexToRgba } from '../../styles';

const TRIGGER_WIDTH = 110;
const TRIGGER_HEIGHT = 32;
const PADDING_TOP_BOTTOM = 12;
const PADDING_LEFT = 16;
const PADDING_RIGHT = 12;
const GAP = 4;
const ICON_SIZE = 24;

export interface DropdownTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: LucideIcon;
  isOpen?: boolean;
}

const defaultStyles = css`
  background-color: ${(props) => props.theme.colors.neutrals.lightest};
  color: ${(props) => props.theme.colors.secondary.medium};
`;

const hoverSelectedStyles = css`
  &:hover:not(:disabled),
  &:focus-visible {
    background-color: ${(props) =>
      hexToRgba(props.theme.colors.secondary.medium, 0.05)};
    color: ${(props) => props.theme.colors.secondary.medium};
  }
`;

const StyledTrigger = styled.button<{ $isOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: ${TRIGGER_WIDTH}px;
  height: ${TRIGGER_HEIGHT}px;
  padding: ${PADDING_TOP_BOTTOM}px ${PADDING_RIGHT}px ${PADDING_TOP_BOTTOM}px
    ${PADDING_LEFT}px;
  gap: ${GAP}px;
  border: none;
  border-radius: 42px;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.interactive};
  font-size: 12px;
  font-weight: 700;

  ${defaultStyles}
  ${hoverSelectedStyles}

  ${(props) =>
    props.$isOpen &&
    css`
      background-color: ${hexToRgba(props.theme.colors.secondary.medium, 0.05)};
      color: ${props.theme.colors.secondary.medium};
    `}

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
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  color: inherit;
`;

export function DropdownTrigger({
  label,
  icon: IconComponent,
  isOpen = false,
  ...rest
}: DropdownTriggerProps) {
  return (
    <StyledTrigger
      $isOpen={isOpen}
      type="button"
      aria-expanded={isOpen}
      {...rest}
    >
      <span>{label}</span>
      <StyledIcon aria-hidden>
        <IconComponent size={ICON_SIZE} strokeWidth={2} />
      </StyledIcon>
    </StyledTrigger>
  );
}
