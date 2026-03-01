import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../../styles';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-left: calc(-1 * ${(props) => props.theme.spacing.md});
  margin-right: calc(-1 * ${(props) => props.theme.spacing.md});
  width: calc(100% + 2 * ${(props) => props.theme.spacing.md});
  background-color: ${(props) => props.theme.colors.neutrals.lightest};
  border-bottom: 2px solid ${(props) => props.theme.colors.neutrals.extraLight};
`;

export const StyledMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  gap: ${(props) => props.theme.spacing.md};
`;

export const StyledBrandLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: ${(props) => props.theme.transition.interactive};

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent.medium};
    outline-offset: 2px;
  }
`;

export const StyledBrandTextBlock = styled.span`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: ${(props) => props.theme.spacing.sm};
  min-width: 0;
`;

export const StyledBrandSecondary = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const StyledSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.interactive};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent.medium};
    outline-offset: 2px;
  }

  ${media.md`
    display: none;
  `}
`;

export const StyledSearchFormWrapper = styled.div`
  display: none;
  min-width: 200px;
  max-width: 320px;

  ${media.md`
    display: block;
  `}
`;
