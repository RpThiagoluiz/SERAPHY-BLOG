import styled, { css } from 'styled-components';
import { hexToRgba, typographyVariants } from '../../styles';

export interface DropdownOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  label: string;
  isSelected?: boolean;
}

const StyledDropdownOption = styled.li<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 28px;
  padding: 4px;
  gap: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.interactive};
  color: ${(props) => props.theme.colors.neutrals.extraDark};
  text-align: left;

  ${typographyVariants.caption}

  &:hover:not(:disabled),
  &:focus-visible {
    background-color: ${(props) =>
      hexToRgba(props.theme.colors.secondary.medium, 0.05)};
    color: ${(props) => props.theme.colors.secondary.medium};
    border-radius: ${(props) => props.theme.radii.md};
  }

  ${(props) =>
    props.$isSelected &&
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

export function DropdownOption({
  label,
  isSelected = false,
  onKeyDown,
  ...rest
}: DropdownOptionProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      rest.onClick?.(e as unknown as React.MouseEvent<HTMLLIElement>);
    }
    onKeyDown?.(e);
  };

  return (
    <StyledDropdownOption
      $isSelected={isSelected}
      role="option"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {label}
    </StyledDropdownOption>
  );
}
