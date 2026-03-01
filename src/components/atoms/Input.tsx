import styled from 'styled-components';
import { typographyVariants } from '../../styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${(props) => props.theme.radii.pill};
  border: 1px solid ${(props) => props.theme.colors.neutrals.extraLight};
  background-color: transparent;
  color: ${(props) => props.theme.colors.neutrals.extraDark};
  ${typographyVariants.bodyLarge}
  transition: ${(props) => props.theme.transition.interactive};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.theme.colors.neutrals.extraDark};
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.accent.medium};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.accent.medium};
  }
`;

export function Input(props: InputProps) {
  return <StyledInput {...props} />;
}
