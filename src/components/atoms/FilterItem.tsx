import styled, { css } from 'styled-components';
import { typographyVariants, hexToRgba } from '../../styles';

const PADDING_VERTICAL = 12;
const PADDING_HORIZONTAL = 8;

export interface FilterItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isSelected?: boolean;
}

const defaultStyles = css`
  color: ${(props) => props.theme.colors.neutrals.darkest};
  border: 1px solid ${(props) => props.theme.colors.neutrals.extraLight};
  background-color: transparent;
`;

const hoverStyles = css`
  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.accent.dark};
    border-color: ${(props) => props.theme.colors.neutrals.extraLight};
  }
`;

const selectedStyles = css`
  color: ${(props) => props.theme.colors.accent.dark};
  border: 1px solid ${(props) => props.theme.colors.accent.dark};
  background-color: ${(props) =>
    hexToRgba(props.theme.colors.accent.light, 0.05)};
`;

const StyledFilterItem = styled.button<{ $isSelected: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${PADDING_VERTICAL}px ${PADDING_HORIZONTAL}px;
  border-radius: ${(props) => props.theme.radii.sm};
  ${typographyVariants.bodySmall}
  cursor: pointer;
  transition: ${(props) => props.theme.transition.interactive};

  ${defaultStyles}
  ${hoverStyles}

  ${(props) =>
    props.$isSelected &&
    css`
      ${selectedStyles}
      &:hover:not(:disabled) {
        border-color: ${(props) => props.theme.colors.accent.dark};
      }
    `}

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent.dark};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export function FilterItem({
  label,
  isSelected = false,
  ...rest
}: FilterItemProps) {
  return (
    <StyledFilterItem $isSelected={isSelected} type="button" {...rest}>
      {label}
    </StyledFilterItem>
  );
}
