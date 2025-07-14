/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';

const Loader = (Component: React.LazyExoticComponent<React.ComponentType<Record<string, unknown>>>) => (props: Record<string, unknown>) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const LandingPageLayout = Loader(lazy(() => import('../components/LandingPageComponents/Layout/index')));
const NotFoundPage = Loader(lazy(() => import('../components/common/NotFoundPage')));

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPageLayout />
  },
  {
    path: '/home',
    element: <LandingPageLayout />
  },
  {
    path: '/landing',
    element: <LandingPageLayout />
  },
  {
    path: '/portfolio',
    element: <LandingPageLayout />
  },
  {
    path: '/404',
    element: <NotFoundPage />
  }
];
