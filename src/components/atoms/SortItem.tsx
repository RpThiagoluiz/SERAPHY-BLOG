import { useState } from 'react';
import styled from 'styled-components';
import type { LucideIcon } from 'lucide-react';
import { ArrowUpDown } from 'lucide-react';
import { media, typographyVariants } from '../../styles';

const ICON_SIZE = 16;
const GAP = 8;
const PADDING_VERTICAL = 8;
const PADDING_HORIZONTAL = 16;

export type SortOrder = 'newest' | 'oldest';

const SORT_LABELS: Record<SortOrder, string> = {
  newest: 'Newest first',
  oldest: 'Oldest first',
};

export interface SortItemProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onChange'
> {
  value?: SortOrder;
  onChange?: (value: SortOrder) => void;
  label?: string;
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
  ${typographyVariants.caption}
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

  ${media.md`
    ${typographyVariants.bodySmall}
  `}
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
  value: controlledValue,
  onChange,
  label: labelProp,
  icon: IconComponent = ArrowUpDown,
  onClick,
  ...rest
}: SortItemProps) {
  const [internalValue, setInternalValue] = useState<SortOrder>('newest');
  const value = controlledValue ?? internalValue;
  const label = labelProp ?? SORT_LABELS[value];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextValue: SortOrder = value === 'newest' ? 'oldest' : 'newest';
    if (onChange) {
      onChange(nextValue);
    } else {
      setInternalValue(nextValue);
    }
    onClick?.(e);
  };

  return (
    <StyledSortItem type="button" onClick={handleClick} {...rest}>
      {label}
      {IconComponent && (
        <StyledIcon aria-hidden>
          <IconComponent size={ICON_SIZE} strokeWidth={2} />
        </StyledIcon>
      )}
    </StyledSortItem>
  );
}
