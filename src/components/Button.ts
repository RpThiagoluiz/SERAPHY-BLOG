import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary.medium};
  color: white;
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.radii.md};
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: ${(props) => props.theme.typography.bodyLarge.size};
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.secondary.light};
    outline-offset: 2px;
  }
`;
