import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../../styles';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-left: calc(-1 * ${(props) => props.theme.spacing.md});
  margin-right: calc(-1 * ${(props) => props.theme.spacing.md});
  width: calc(100% + 2 * ${(props) => props.theme.spacing.md});
  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.theme.colors.neutrals.extraLight};
`;

export const StyledMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.md};
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
  min-width: 400px;

  ${media.md`
    display: block;
  `}
`;

export const StyledSearchOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.neutrals.lightest};
  transform: translateX(${(props) => (props.$isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};

  ${media.md`
    display: none;
  `}
`;

export const StyledSearchOverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.md};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutrals.extraLight};
`;

export const StyledLastSearches = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.md};
  flex: 1;
  overflow-y: auto;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const StyledLastSearchesTitle = styled.h2`
  margin: 0;
  font-size: ${(props) => props.theme.typography.caption.size};
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutrals.medium};
`;

export const StyledLastSearchItem = styled.button`
  display: block;
  width: 100%;
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  border: none;
  border-radius: ${(props) => props.theme.radii.md};
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.interactive};
  color: ${(props) => props.theme.colors.neutrals.darkest};

  &:hover {
    background-color: ${(props) => props.theme.colors.neutrals.extraLight};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent.medium};
    outline-offset: 2px;
  }
`;
