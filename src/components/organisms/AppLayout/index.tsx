import type { ReactNode } from 'react';
import { Header } from '../Header';
import { StyledLayout, StyledMain } from './styles';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <StyledLayout>
      <Header />
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  );
}
