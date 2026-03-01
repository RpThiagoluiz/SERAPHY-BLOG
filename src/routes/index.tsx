import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '../components';
import RootLayout from './RootLayout';

const Home = lazy(() => import('../pages/Home'));
const PostDetails = lazy(() => import('../pages/PostDetails'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <RootLayout />
      </AppLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'post/:id',
        element: <PostDetails />,
      },
    ],
  },
]);
