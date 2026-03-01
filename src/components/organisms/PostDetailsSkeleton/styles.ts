import styled from 'styled-components';
import { Skeleton } from '../../atoms/Skeleton';
import { media } from '../../../styles';

const CONTENT_MAX_WIDTH = 688;
const CONTENT_MAX_WIDTH_WEB = 1200;

export const SkeletonPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH}px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.xxl};
  gap: ${(props) => props.theme.spacing.lg};

  ${media.md`
    max-width: ${CONTENT_MAX_WIDTH_WEB}px;
    padding: 0 ${(props) => props.theme.spacing.xl};
  `}
`;

export const SkeletonBack = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  align-self: flex-start;
`;

export const SkeletonHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: ${(props) => props.theme.spacing.lg};
  width: 100%;
`;

export const SkeletonTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: ${(props) => props.theme.spacing.sm};
  width: 100%;
`;

export const SkeletonAuthorBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

export const SkeletonAvatar = styled(Skeleton).attrs({
  $width: '48px',
  $height: '48px',
})`
  border-radius: 50%;
  flex-shrink: 0;
`;

export const SkeletonImage = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.radii.xl};
  overflow: hidden;
`;

export const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  width: 100%;
`;

export const SkeletonLatestSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
  width: 100%;
`;

export const SkeletonLatestTitle = styled.div`
  width: fit-content;
`;

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.lg};

  ${media.md`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
