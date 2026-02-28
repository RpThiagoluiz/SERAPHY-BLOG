import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <Outlet />
  </Suspense>
);

export default RootLayout;
