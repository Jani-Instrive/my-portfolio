/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';

const Loader = (Component: React.LazyExoticComponent<React.ComponentType<any>>) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const DashboardLayout = Loader(lazy(() => import('../Layout/DashboardLayout')));
const Dashboard = Loader(lazy(() => import('../content/Dashboard')));
const Analytics = Loader(lazy(() => import('../content/Analytics')));
const Ecommerce = Loader(lazy(() => import('../content/Ecommerce')));
const Banking = Loader(lazy(() => import('../content/Banking')));
const Booking = Loader(lazy(() => import('../content/Booking')));
const FileManager = Loader(lazy(() => import('../content/FileManager')));
const Permission = Loader(lazy(() => import('../content/Permission')));
const Profile = Loader(lazy(() => import('../content/Profile')));

export const adminRoutes: RouteObject[] = [
    {
        path: '/admin',
        element: <DashboardLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'analytics',
                element: <Analytics />
            },
            {
                path: 'ecommerce',
                element: <Ecommerce />
            },
            {
                path: 'banking',
                element: <Banking />
            },
            {
                path: 'booking',
                element: <Booking />
            },
            {
                path: 'file',
                element: <FileManager />
            },
            {
                path: 'permission',
                element: <Permission />
            },
            {
                path: 'profile',
                element: <Profile />
            }
        ]
    }
];
