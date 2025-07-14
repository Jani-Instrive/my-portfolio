import React from 'react';
import { Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { useAuth } from '../context/useAuth';
// import {publicRoutes} from './publicRoutes';
// import {adminRoutes} from './adminRoutes';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const AppContent: React.FC = () => {
//   const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* <Route path="/login" element={<publicRoutes />} />
      <Route path="/*" element={isAuthenticated ? <adminRoutes /> : <publicRoutes />} /> */}
    </Routes>
  );
};

const DashboardRouter: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  );
};

export default DashboardRouter;

// export default DashboardRouter;
