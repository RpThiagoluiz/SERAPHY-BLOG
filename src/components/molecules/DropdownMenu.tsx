import styled from 'styled-components';
import { DropdownOption } from '../atoms/DropdownOption';

const MENU_WIDTH = 314;
const MENU_HEIGHT = 244;
const PADDING = 16;
const GAP = 16;

export interface DropdownOptionItem {
  id: string;
  label: string;
}

export interface DropdownMenuProps {
  options: DropdownOptionItem[];
  selectedIds: string[];
  onSelect: (id: string) => void;
  onClose?: () => void;
}

const StyledMenu = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: ${MENU_WIDTH}px;
  height: ${MENU_HEIGHT}px;
  padding: ${PADDING}px;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${GAP}px;
  background-color: ${(props) => props.theme.colors.neutrals.lightest};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  overflow-y: auto;
`;

export function DropdownMenu({
  options,
  selectedIds,
  onSelect,
}: DropdownMenuProps) {
  return (
    <StyledMenu
      role="listbox"
      aria-label="Category options"
      aria-multiselectable="true"
    >
      {options.map((option) => (
        <DropdownOption
          key={option.id}
          label={option.label}
          isSelected={selectedIds.includes(option.id)}
          onClick={() => onSelect(option.id)}
          aria-selected={selectedIds.includes(option.id)}
        />
      ))}
    </StyledMenu>
  );
}
