import styled from 'styled-components';
import { Skeleton } from '../../atoms/Skeleton';

const CARD_WIDTH = 314;
const CARD_HEIGHT = 425;
const IMAGE_HEIGHT = 196;

export const SkeletonCard = styled.article`
  display: flex;
  flex-direction: column;
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: ${(props) => props.theme.radii.xl};
  background-color: ${(props) => props.theme.colors.neutrals.lightest};
  border: 1px solid ${(props) => props.theme.colors.neutrals.extraLight};
  overflow: hidden;
`;

export const SkeletonImage = styled(Skeleton).attrs({
  $width: '100%',
  $height: `${IMAGE_HEIGHT}px`,
})`
  border-radius: ${(props) => props.theme.radii.xl}
    ${(props) => props.theme.radii.xl} 0 0;
  flex-shrink: 0;
`;

export const SkeletonBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex: 1;
`;

export const SkeletonHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SkeletonTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkeletonBadges = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;
