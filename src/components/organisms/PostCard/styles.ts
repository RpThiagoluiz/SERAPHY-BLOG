import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CARD_WIDTH = 314;
const CARD_HEIGHT = 425;
const IMAGE_HEIGHT = 196;
const BODY_PADDING = 16;
const BODY_GAP = 16;
const BADGES_GAP = 8;
const TEXT_BLOCK_GAP = 8;
const TEXT_BLOCK_HEIGHT = 114; /* 54 + 8 + 52 */
const TITLE_HEIGHT = 54;
const DESCRIPTION_HEIGHT = 52;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: ${(props) => props.theme.radii.xl};
  background-color: ${(props) => props.theme.colors.neutrals.lightest};
  border: 1px solid ${(props) => props.theme.colors.neutrals.extraLight};
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
  object-fit: cover;
  border-radius: ${(props) => props.theme.radii.xl}
    ${(props) => props.theme.radii.xl} 0 0;
  flex-shrink: 0;
`;

export const StyledImagePlaceholder = styled.div`
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.neutrals.extraLight} 0%,
    ${(props) => props.theme.colors.neutrals.light} 100%
  );

  border-radius: ${(props) => props.theme.radii.xl}
    ${(props) => props.theme.radii.xl} 0 0;
  flex-shrink: 0;
`;

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${BODY_GAP}px;
  padding: ${BODY_PADDING}px;
  flex: 1;
  min-height: 0;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${TEXT_BLOCK_GAP}px;
`;

export const StyledDot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary.medium};
  flex-shrink: 0;
`;

export const StyledTextBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${TEXT_BLOCK_GAP}px;
  width: 100%; /* Fill 282px (314 - 16*2 padding) */
  min-height: ${TEXT_BLOCK_HEIGHT}px;
`;

export const StyledTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: ${TITLE_HEIGHT}px;
`;

export const StyledDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: ${DESCRIPTION_HEIGHT}px;

  & > * {
    line-height: ${DESCRIPTION_HEIGHT / 2}px;
  }
`;

export const StyledBadges = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${BADGES_GAP}px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: auto;
`;
