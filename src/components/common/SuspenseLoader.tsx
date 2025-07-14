import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const SuspenseLoader: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        minWidth: '100vw',
        backgroundColor: '#f5f5f5',
      }}
    >
      <CircularProgress size={60} thickness={4} />
    </Box>
  );
};

export default SuspenseLoader;
