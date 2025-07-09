/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import { ArrowForward, Star } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Typography, Button } from '../SharedComponents';
import JaniImage from '../../assets/janiImg.png';

const HeroSection: React.FC = () => {
  return (
    <Box 
      id='home' 
      sx={{ 
        background: (theme: any) =>
          theme.palette.mode === 'dark' ? '#151515' : '#FFFFFF',
        width: "100%",
        minHeight: { xs: 'calc(100vh - 60px)', sm: 'calc(100vh - 60px)', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        pt: 18,
        pb: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ width: '100%' }}
        >
          <Grid
            container
            spacing={{ xs: 4, sm: 6, md: 8, lg: 10, xl: 12 }}
            alignItems='center'
            justifyContent='center'
            sx={{
              width: '100%',
              maxWidth: '1400px',
              mx: 'auto',
            }}
          > 
            {/* Text Content - Left Side */}
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{
                order: { xs: 2, lg: 1 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', lg: 'flex-start' },
                textAlign: { xs: 'center', lg: 'left' },
                justifyContent: 'center',
                pr: { xl: 4 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: '100%' }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '2.5rem',
                      sm: '3.5rem',
                      md: '4.5rem',
                      lg: '4.5rem',
                      xl: '5.5rem',
                    },
                    fontWeight: 700,
                    color: (theme: any) =>
                      theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                    lineHeight: { xs: 1.1, sm: 1, lg: 0.9 },
                    mb: { xs: 3, sm: 4 },
                    maxWidth: '100%',
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  I'm <span style={{ color: '#FF6B35' }}>Shaik Jani</span>,
                  <br />
                  Software Developer
                </Typography>

                {/* Testimonial Quote */}
                <Box
                  sx={{
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '32px', sm: '40px', md: '48px' },
                      color: (theme: any) =>
                        theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                      fontWeight: 300,
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    "
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '14px', sm: '15px', md: '16px' },
                      color: (theme: any) =>
                        theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                      lineHeight: 1.5,
                      maxWidth: { xs: '90%', lg: '100%' },
                      mx: { xs: 'auto', lg: 0 },
                    }}
                  >
                    Jani's brilliant product design made our website a success.
                    <br />A top recommendation!**
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {/* Image Content - Right Side */}
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{
                order: { xs: 1, lg: 2 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                pl: { xl: 4 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  width: '100%',
                }}
              >
                {/* Orange Circle Background */}
                <Box
                  sx={{
                    width: {
                      xs: '280px',
                      sm: '320px',
                      md: '380px',
                      lg: '420px',
                      xl: '480px',
                    },
                    height: {
                      xs: '280px',
                      sm: '320px',
                      md: '380px',
                      lg: '420px',
                      xl: '480px',
                    },
                    borderRadius: '50%',
                    background: '#FF6B35',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    mb: { xs: 3, sm: 4 },
                  }}
                >
                  <Box
                    component='img'
                    src={JaniImage}
                    alt='Jani Image'
                    sx={{
                      width: { 
                        xs: '280px', 
                        sm: '320px', 
                        md: '350px',
                        lg: '380px',
                        xl: '420px',
                      },
                      height: {
                        xs: '270px',
                        sm: '310px',
                        md: '370px',
                        lg: '410px',
                        xl: '470px',
                      },
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                  />
                </Box>

                {/* Experience Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 15, sm: 20, md: 25 },
                    right: { xs: 10, sm: 15, md: 20 },
                    bgcolor: 'white',
                    borderRadius: '15px',
                    p: { xs: 1.5, sm: 2 },
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    minWidth: { xs: 100, sm: 110, md: 120 },
                    zIndex: 10,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}
                  >
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        sx={{
                          color: '#FF6B35',
                          fontSize: { xs: '14px', sm: '15px', md: '16px' }
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                      fontWeight: 700,
                      color: '#333',
                    }}
                  >
                    3 Years
                  </Typography>
                  <Typography 
                    sx={{
                      fontSize: { xs: '10px', sm: '11px', md: '12px' },
                      color: '#666'
                    }}
                  >
                    Experts
                  </Typography>
                </Box>

                {/* Hire Me Button */}
                <Button
                  sx={{
                    bgcolor: '#FF6B35',
                    color: 'white',
                    borderRadius: '20px',
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.2, sm: 1.5 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 600,
                    zIndex: 10,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#E55A2B',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
                    },
                  }}
                  endIcon={<ArrowForward />}
                >
                  Hire Me
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
