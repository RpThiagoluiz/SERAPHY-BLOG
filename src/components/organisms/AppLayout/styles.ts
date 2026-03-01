import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: calc(-1 * ${(props) => props.theme.spacing.md});
  margin-right: calc(-1 * ${(props) => props.theme.spacing.md});
  margin-bottom: calc(-1 * ${(props) => props.theme.spacing.md});
  padding: ${(props) => props.theme.spacing.md};
  width: calc(100% + 2 * ${(props) => props.theme.spacing.md});
  min-height: 0;
`;
