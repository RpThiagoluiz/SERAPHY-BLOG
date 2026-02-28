import type { Theme } from './styles/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- styled-components module augmentation
  export interface DefaultTheme extends Theme {}
}
