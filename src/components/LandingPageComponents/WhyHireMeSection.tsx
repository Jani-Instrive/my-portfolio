/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Typography, Button } from '../SharedComponents';
import JaniImage from '../../assets/janiImg.png';

const WhyHireMeSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      id="why-hire-me"
      component="section"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: (theme: any) =>
          theme.palette.mode === 'dark' ? '#151515' : '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } 
        }}
      >
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ 
                display: 'flex', 
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Orange Circle Background */}
              <Box sx={{
                width: {
                  xs: '250px',
                  sm: '300px',
                  md: '350px',
                  lg: '400px',
                  xl: '450px'
                },
                height: {
                  xs: '250px',
                  sm: '300px',
                  md: '350px',
                  lg: '400px',
                  xl: '450px'
                },
                borderRadius: '50%',
                background: '#FF6B35',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <Box
                  component="img"
                  src={JaniImage}
                  alt="Jani Image"
                  sx={{
                    width: '300px',
                    height: {
                      xs: '270px',
                      sm: '270px',
                      md: '400px',
                      lg: '400px',
                      xl: '400px'
                    },
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </Box>

              {/* Decorative Elements */}
              <Box sx={{
                position: 'absolute',
                top: 50,
                left: -20,
                fontSize: '2rem',
              }}>
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                  <path d="M10 10L20 20M20 20L30 10M20 20L10 30" stroke={theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333'} strokeWidth="2" strokeLinecap="round"/>
                  <path d="M35 15L45 25M45 25L55 15M45 25L35 35" stroke={theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333'} strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 5L25 15M25 15L35 5M25 15L15 25" stroke={theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333'} strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  color: (theme: any) =>
                    theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                  lineHeight: 1.1,
                  mb: 3,
                  textAlign: { xs: 'center', lg: 'left' },
                }}
              >
                Why You <span style={{ color: '#FF6B35' }}>Hire Me</span> for Your Next Projects?
              </Typography>

                <Typography
                sx={{
                  fontSize: '1rem',
                  color: (theme: any) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                  lineHeight: 1.6,
                  mb: 4,
                  textAlign: { xs: 'center', lg: 'left' },
                  // maxWidth: '500px',
                  mx: { xs: 'auto', lg: 0 },
                }}
                >
                With 3+ years of hands-on experience in React and Redux Toolkit, I bring proven expertise in building scalable frontend applications. My growing knowledge in Node.js enables full-stack collaboration, while my strong time management skills and understanding of Scrum methodologies ensure project deadlines are consistently met. I'm committed to delivering optimized solutions that drive business value.
                </Typography>

              {/* Stats */}
              <Box sx={{ 
                display: 'flex', 
                gap: 6,
                justifyContent: { xs: 'center', lg: 'flex-start' },
                flexWrap: 'wrap',
                mb: 4,
              }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: (theme: any) =>
                    theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                    lineHeight: 1,
                  }}>
                    2+
                  </Typography>
                  <Typography sx={{
                    fontSize: '14px',
                    color: (theme: any) =>
                    theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                    mt: 1,
                  }}>
                    Project Completed
                  </Typography>
                </Box>
                
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: (theme: any) =>
                    theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                    lineHeight: 1,
                  }}>
                    2+
                  </Typography>
                  <Typography sx={{
                    fontSize: '14px',
                    color: (theme: any) =>
                    theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                    mt: 1,
                  }}>
                    Industry Covered
                  </Typography>
                </Box>
              </Box>

              {/* Hire Me Button */}
              <Box sx={{ 
                display: 'flex',
                justifyContent: { xs: 'center', lg: 'flex-start' },
              }}>
                <Button
                  sx={{
                    bgcolor: 'transparent',
                    color: '#FF6B35',
                    border: '2px solid #FF6B35',
                    borderRadius: '25px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: '#FF6B35',
                      color: 'white',
                    },
                  }}
                >
                  Hire Me
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyHireMeSection;
