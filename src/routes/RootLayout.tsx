import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <ScrollRestoration />
    <Outlet />
  </Suspense>
);

export default RootLayout;
