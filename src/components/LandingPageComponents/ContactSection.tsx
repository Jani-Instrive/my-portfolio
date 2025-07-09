/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  TextField, 
  InputAdornment,
  IconButton
} from '@mui/material';
import { 
  CheckCircle,
  ArrowUpward
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Typography } from '../SharedComponents';

const ContactSection: React.FC = () => {
  return (
    <Box
      id="contact"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 700,
                color: (theme: any) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                mb: 2,
              }}
            >
              Have An Awesome Project Idea?<br/> <span style={{ color: '#FF6B35' }}>Let's Discuss</span>
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 6,
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              background: '#fff',
              border: '2px solid #eee',
              borderRadius: '10px',
              height: '50px', 
              maxWidth: '600px',
              width: '100%',
            }}>
              <TextField
                placeholder="Enter Email Address"
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}>
                        <span style={{ color: 'white', fontSize: '18px' }}>📧</span>
                      </Box>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '12px 0',
                    fontSize: '16px',
                    color: (theme: any) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                  },
                }}
              />
              <IconButton
                sx={{
                  bgcolor: '#FF6B35',
                  color: 'white',
                  borderRadius: 50,
                  mr: 1,
                  fontWeight: 600,
                  fontSize: '16px',
                  minWidth: 'auto',
                  '&:hover': {
                    bgcolor: '#E55A2B',
                  },
                }}
              >
                <ArrowUpward sx={{ transform: 'rotate(45deg)' }} />
              </IconButton>
            </Box>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: 2,
              }}>
                <CheckCircle sx={{ color: '#4CAF50', fontSize: '20px' }} />
                <Typography sx={{ color: (theme: any) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333', fontSize: '14px' }}>
                  4.9/5 Average Ratings
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: 2,
              }}>
                <CheckCircle sx={{ color: '#4CAF50', fontSize: '20px' }} />
                <Typography sx={{ color: (theme: any) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333', fontSize: '14px' }}>
                  2 Winning Awards
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: 2,
              }}>
                <CheckCircle sx={{ color: '#4CAF50', fontSize: '20px' }} />
                <Typography sx={{ color: (theme: any) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333', fontSize: '14px' }}>
                  Certified Ai tools 
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid size={{xs: 10}} sx={{ 
            mt: 10, 
            overflow: 'hidden',
            background: '#FF6B35',
            py: 2,
            position: 'relative',
          }}>
            <Box
              sx={{
                display: 'flex',
                animation: 'scroll 20s linear infinite',
                gap: 8,
                alignItems: 'center',
                '@keyframes scroll': {
                  '0%': {
                    transform: 'translateX(0)',
                  },
                  '100%': {
                    transform: 'translateX(-50%)',
                  },
                },
              }}
            >
              <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                REACT • TYPESCRIPT • NODE.JS • MONGODB • REST API • NEXT.JS • AWS
              </Typography>
            </Box>
          </Grid> */}
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection;
