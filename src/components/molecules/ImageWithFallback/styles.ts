import styled from 'styled-components';

const getBorderRadius = (
  theme: { radii: Record<string, string> },
  value: string,
  allSides: boolean,
) => {
  const r = theme.radii[value as keyof typeof theme.radii] ?? value;
  return allSides ? r : `${r} ${r} 0 0`;
};

export const StyledImage = styled.img<{
  $height: number;
  $borderRadius: string;
  $allSides?: boolean;
}>`
  width: 100%;
  height: ${(props) => props.$height}px;
  object-fit: cover;
  border-radius: ${(props) =>
    getBorderRadius(
      props.theme,
      props.$borderRadius,
      props.$allSides ?? false,
    )};
  flex-shrink: 0;
`;

export const StyledImagePlaceholder = styled.div<{
  $height: number;
  $borderRadius: string;
  $allSides?: boolean;
}>`
  width: 100%;
  height: ${(props) => props.$height}px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.neutrals.extraLight} 0%,
    ${(props) => props.theme.colors.neutrals.light} 100%
  );
  border-radius: ${(props) =>
    getBorderRadius(
      props.theme,
      props.$borderRadius,
      props.$allSides ?? false,
    )};
  flex-shrink: 0;
`;
