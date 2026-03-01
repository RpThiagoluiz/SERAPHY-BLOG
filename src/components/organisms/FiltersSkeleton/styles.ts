import styled from 'styled-components';
import { media } from '../../../styles';

export const SkeletonSidebar = styled.aside`
  display: none;

  ${media.md`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.lg};
    width: 240px;
    flex-shrink: 0;
    padding: ${(props) => props.theme.spacing.lg};
    background-color: ${(props) => props.theme.colors.neutrals.lightest};
    border-radius: ${(props) => props.theme.radii.lg};
    border: 1px solid ${(props) => props.theme.colors.neutrals.extraLight};
  `}
`;

export const SkeletonTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const SkeletonSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const SkeletonSectionTitle = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

export const SkeletonFilterItem = styled.div`
  padding: ${(props) => props.theme.spacing.sm} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutrals.extraLight};
`;

export const SkeletonButton = styled.div`
  margin-top: auto;
`;

export const SkeletonFilterBar = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};

  ${media.md`
    display: none;
  `}
`;
