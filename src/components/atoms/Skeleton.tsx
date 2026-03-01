import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.4;
  }
`;

export const Skeleton = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width ?? '100%'};
  height: ${(props) => props.$height ?? '1em'};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.neutrals.extraLight} 0%,
    ${(props) => props.theme.colors.neutrals.light} 50%,
    ${(props) => props.theme.colors.neutrals.extraLight} 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: ${(props) => props.theme.radii.sm};
`;
