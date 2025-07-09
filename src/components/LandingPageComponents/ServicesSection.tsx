/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, useTheme } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Typography } from '../SharedComponents';
import zavenLogo from '../../assets/rfp_progress.png';
import ttLogo from '../../assets/Resource.png';
import ProxteraLogo from '../../assets/proxtera.png';
import ProxteraWhite from '../../assets/proxteraWhite.png';

const ServicesSection: React.FC = () => {
  const theme = useTheme();

  const handleOpenUrl = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: (theme: any) =>
          theme.palette.mode === 'dark'
            ? '#151515'
            : '#FFFFFF',
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 8, textAlign: { xs: 'center', lg: 'center' } }}>
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 700,
                color: (theme: any) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                mb: 2,
              }}
            >
              My <span style={{ color: '#FF6B35' }}>Services</span>
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                color: (theme: any) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                maxWidth: '600px',
                lineHeight: 1.6,
                mx: { xs: 'auto', lg: 'auto' },
              }}
            >
              Worked on product development across three key projects – Zaven, Talent-Tender, and Proxtera – delivering impactful user experiences and scalable solutions.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: 380,
                    background: (theme: any) =>
                      theme.palette.mode === 'dark' ? '#333' : '#FFFFFF',
                    borderRadius: '20px',
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                    <Typography
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: (theme: any) =>
                          theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                        mb: 3,
                      }}
                    >
                     ZAVEN
                    </Typography>                    
                    <Box
                      sx={{
                        flex: 1,
                        background: (theme: any) =>
                          theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                        borderRadius: '12px',
                        mb: 3,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      <CardMedia 
                        component="img"
                        image={zavenLogo} 
                        alt="Zaven Logo" 
                        sx={{ 
                          maxWidth: '80%', 
                          maxHeight: '80%', 
                          objectFit: 'cover'
                        }} 
                      />
                    </Box>

                    <Box
                      onClick={() => handleOpenUrl('https://dev.zavenlegal.com/')}
                      sx={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        width: 50,
                        height: 50,
                        background: '#FF6B35',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <ArrowUpward sx={{ color: '#333', transform: 'rotate(45deg)' }} />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Web Design Card - Featured */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: 380,
                    background: '#FF6B35',
                    borderRadius: '20px',
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: (theme: any) =>
                          theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                        mb: 3,
                      }}
                    >
                      Talent Tender
                    </Typography>
                    
                   <Box
                      sx={{
                        flex: 1,
                        background: '#FFFFFF',
                        borderRadius: '12px',
                        mb: 3,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      <CardMedia 
                        component="img"
                        image={ttLogo} 
                        alt="Talent Tender Logo" 
                        sx={{ 
                          width: '80%', 
                          height: '80%', 
                          objectFit: 'cover' 
                        }} 
                      />
                    </Box>

                    <Box
                      onClick={() => handleOpenUrl('https://dev.talenttender.com/')}
                      sx={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        width: 50,
                        height: 50,
                        background: '#333',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <ArrowUpward sx={{ color: '#FF6B35', transform: 'rotate(45deg)' }} />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Landing Page Card */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: 380,
                    // background: '#333',
                    background: (theme: any) =>
                      theme.palette.mode === 'dark' ? '#333' : '#FFFFFF',
                    borderRadius: '20px',
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: (theme: any) =>
                          theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                        mb: 3,
                      }}
                    >
                      Proxtera
                    </Typography>
                    
                    {/* Card Image Placeholder */}
                    <Box
                      sx={{
                        flex: 1,
                        background: (theme: any) =>
                          theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                        borderRadius: '12px',
                        mb: 3,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      >
                      <CardMedia 
                        component="img"
                        image={theme.palette.mode === 'dark' ? ProxteraLogo : ProxteraWhite} 
                        alt="Proxtera Logo" 
                        sx={{ 
                          width: '80%', 
                          height: '30%', 
                          objectFit: 'cover',
                        }} 
                      />
                      
                    </Box>

                    <Box
                      onClick={() => handleOpenUrl('https://dev.proxtera.app/')}
                      sx={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        width: 50,
                        height: 50,
                        background: '#FF6B35',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <ArrowUpward sx={{ color: '#333', transform: 'rotate(45deg)' }} />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection;
