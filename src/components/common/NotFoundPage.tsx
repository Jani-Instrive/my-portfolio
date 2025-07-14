import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        minWidth: '100vw',
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '4rem', md: '8rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            404
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              fontWeight: 500,
              mb: 4,
            }}
          >
            Page Not Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              mb: 4,
              opacity: 0.9,
            }}
          >
            The page you are looking for doesn't exist or has been moved.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleGoHome}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            Go Back Home
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
