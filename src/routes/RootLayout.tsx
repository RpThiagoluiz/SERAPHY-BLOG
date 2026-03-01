import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const RootLayout = () => (
  <>
    <Header />
    <Suspense fallback={<div>Carregando...</div>}>
      <Outlet />
    </Suspense>
  </>
);

export default RootLayout;
