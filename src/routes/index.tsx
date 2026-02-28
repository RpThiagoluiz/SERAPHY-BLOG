import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './RootLayout';

const Home = lazy(() => import('../pages/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
