import styled from 'styled-components';

export const EmptyPostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.lg};
  min-height: 200px;
  padding: ${(props) => props.theme.spacing.xl};
  text-align: center;
`;

export const EmptyPostsIcon = styled.div`
  color: ${(props) => props.theme.colors.neutrals.medium};
`;

export const EmptyPostsTitle = styled.h2`
  margin: 0;
`;

export const EmptyPostsDescription = styled.p`
  margin: 0;
  max-width: 320px;
  color: ${(props) => props.theme.colors.neutrals.dark};
`;
