import styled from 'styled-components';
import { X } from 'lucide-react';
import { hexToRgba } from '../../styles';

export interface SelectionChipProps {
  label: string;
  onRemove: () => void;
}

const ICON_SIZE = 16;
const GAP = 8;
const PADDING_VERTICAL = 8;
const PADDING_HORIZONTAL = 12;

const StyledChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${GAP}px;
  padding: ${PADDING_VERTICAL}px ${PADDING_HORIZONTAL}px;
  border-radius: ${(props) => props.theme.radii.pill};
  background-color: ${(props) =>
    hexToRgba(props.theme.colors.secondary.medium, 0.08)};
  border: 1px solid ${(props) => props.theme.colors.secondary.medium};
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary.medium};
`;

const StyledLabel = styled.span`
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  flex-shrink: 0;
  transition: ${(props) => props.theme.transition.interactive};

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.secondary.medium};
    outline-offset: 2px;
    border-radius: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export function SelectionChip({ label, onRemove }: SelectionChipProps) {
  return (
    <StyledChip>
      <StyledLabel>{label}</StyledLabel>
      <RemoveButton
        type="button"
        onClick={onRemove}
        aria-label="Clean selection"
      >
        <X size={ICON_SIZE} strokeWidth={2} aria-hidden />
      </RemoveButton>
    </StyledChip>
  );
}
