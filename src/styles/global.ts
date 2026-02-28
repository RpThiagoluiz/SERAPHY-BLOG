import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.colors.neutrals.lightest};
    color: ${(props) => props.theme.colors.neutrals.darkest};
    font-family: ${(props) => props.theme.typography.fontFamily};
    min-height: 100vh;
    min-width: 320px;
  }

  #root {
    min-height: 100vh;
    padding: ${(props) => props.theme.spacing.md};
  }

  h1 {
    font-size: ${(props) => props.theme.typography.h1.size};
    font-weight: ${(props) => props.theme.typography.h1.weight};
    line-height: ${(props) => props.theme.typography.h1.lineHeight};
  }

  h2 {
    font-size: ${(props) => props.theme.typography.h2.size};
    font-weight: ${(props) => props.theme.typography.h2.weight};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
  }

  h3 {
    font-size: ${(props) => props.theme.typography.h3.size};
    font-weight: ${(props) => props.theme.typography.h3.weight};
    line-height: ${(props) => props.theme.typography.h3.lineHeight};
  }

  p {
    font-size: ${(props) => props.theme.typography.bodyLarge.size};
    line-height: ${(props) => props.theme.typography.bodyLarge.lineHeight};
  }

  a {
    color: ${(props) => props.theme.colors.secondary.medium};
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.colors.secondary.dark};
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;
