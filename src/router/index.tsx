import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { publicRoutes } from './publicRoutes';
import { adminRoutes } from './adminRoutes';
import NotFoundPage from '../components/common/NotFoundPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/admin" replace /> : <>{children}</>;
};

export const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    ...publicRoutes.map(route => ({
      ...route,
      element: <PublicRoute>{route.element}</PublicRoute>
    })),
    ...adminRoutes.map(route => ({
      ...route,
      element: <ProtectedRoute>{route.element}</ProtectedRoute>
    })),
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);

  return <RouterProvider router={router} />;
};
