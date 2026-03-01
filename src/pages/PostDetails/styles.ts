import styled from 'styled-components';
import { media } from '../../styles';

const CONTENT_MAX_WIDTH = 688;
const CONTENT_MAX_WIDTH_WEB = 1200;

export const PostDetailsPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH}px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.xxl};

  ${media.md`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'back content';
    align-items: start;
    max-width: ${CONTENT_MAX_WIDTH_WEB}px;
    padding: 0 ${(props) => props.theme.spacing.xl};
    gap: 0 ${(props) => props.theme.spacing.xl};
  `}
`;

export const BackButtonWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.lg};
  width: 100%;

  a {
    text-decoration: none;
  }

  ${media.md`
    grid-area: back;
    margin-bottom: 0;
    width: auto;
    position: sticky;
    top: ${(props) => props.theme.spacing.md};
  `}
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;

  ${media.md`
    grid-area: content;
  `}
`;

export const ArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing.lg};
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const AuthorBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

export const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid ${(props) => props.theme.colors.accent.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.neutrals.extraLight};
`;

export const AuthorAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthorIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.accent.medium};
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  ${media.md`
    align-items: flex-start;
  `}
`;

export const FeaturedImageWrapper = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.radii.xl};
  overflow: hidden;
`;

export const ArticleContent = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.typography.bodyLarge.size};
  line-height: ${(props) => props.theme.typography.bodyLarge.lineHeight};
  color: ${(props) => props.theme.colors.neutrals.darkest};
  margin-bottom: ${(props) => props.theme.spacing.xxl};

  & p {
    margin: 0 0 ${(props) => props.theme.spacing.md};
  }

  & p:last-child {
    margin-bottom: 0;
  }
`;

export const LatestSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
`;

export const LatestTitle = styled.h2`
  margin: 0;
  font-size: ${(props) => props.theme.typography.h2.size};
  font-weight: ${(props) => props.theme.typography.h2.weight};
  color: ${(props) => props.theme.colors.neutrals.darkest};
`;

export const LatestGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.lg};

  ${media.md`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
