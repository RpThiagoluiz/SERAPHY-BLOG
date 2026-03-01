import styled from 'styled-components';
import type { LucideIcon } from 'lucide-react';
import { typographyVariants } from '../../styles';

const ICON_SIZE = 16;
const GAP = 8;
const PADDING_VERTICAL = 8;
const PADDING_HORIZONTAL = 16;

export interface SortItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: LucideIcon;
}

const StyledSortItem = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${GAP}px;
  padding: ${PADDING_VERTICAL}px ${PADDING_HORIZONTAL}px;
  border: none;
  border-radius: ${(props) => props.theme.radii.pill};
  background-color: transparent;
  color: ${(props) => props.theme.colors.neutrals.extraDark};
  ${typographyVariants.bodySmall}
  cursor: pointer;
  transition: ${(props) => props.theme.transition.interactive};

  &:hover {
    background-color: ${(props) => props.theme.colors.accent.medium};
    color: ${(props) => props.theme.colors.neutrals.extraLight};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent.medium};
    outline-offset: 2px;
  }
`;

const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.accent.medium};
  transition: ${(props) => props.theme.transition.interactive};

  ${StyledSortItem}:hover & {
    color: ${(props) => props.theme.colors.neutrals.extraLight};
  }
`;

export function SortItem({
  label,
  icon: IconComponent,
  ...rest
}: SortItemProps) {
  return (
    <StyledSortItem type="button" {...rest}>
      {label}
      {IconComponent && (
        <StyledIcon aria-hidden>
          <IconComponent size={ICON_SIZE} strokeWidth={2} />
        </StyledIcon>
      )}
    </StyledSortItem>
  );
}
