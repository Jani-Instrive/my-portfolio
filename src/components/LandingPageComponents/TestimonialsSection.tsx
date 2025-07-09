/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Grid, Card, CardContent, Avatar, Rating, Button } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Typography } from '../SharedComponents';
import { CustomizedDialogs } from '../SharedComponents/Dialog';
import { useState, type FC } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const featuredTestimonials = [
  {
    id: 1,
    name: 'Joshua Arthur',
    role: 'CTO',
    company: 'EY Charger',
    testimonial: 'Outstanding work on our web application. The attention to detail and technical expertise exceeded our expectations.',
    rating: 5,
    image: '/api/placeholder/60/60',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    testimonial: 'Delivered a pixel-perfect, responsive design that perfectly matched our vision. Highly recommended!',
    rating: 5,
    image: '/api/placeholder/60/60',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    testimonial: 'Professional, reliable, and produces high-quality code. Will definitely work with again.',
    rating: 5,
    image: '/api/placeholder/60/60',
  },
];

const TestimonialsSection: FC = () => {
  const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false);
  return (
  <Box component="section" sx={{backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? '#151515' : '#FFFFFF'}}>
    {<CustomizedDialogs isOpen={openFeedbackDialog} onClose={() => setOpenFeedbackDialog(false)} />}
    <Box
      id="testimonials"
      component="section"
       sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: (theme: any) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 100%)'
            : '#151515',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme: any) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(circle at 70% 80%, rgba(255, 152, 0, 0.05) 0%, transparent 70%)'
              : 'radial-gradient(circle at 30% 20%, rgba(255, 152, 0, 0.1) 0%, transparent 70%)',
          zIndex: 0,
        },
        borderRadius: 15
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } 
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                background: (theme: any) =>
                  `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: (theme: any) => theme.palette.mode === 'dark' ? '#333333' : '#FFFFFF',
              }}
            >
              What <span style={{ color: '#FF6B35' }}>Clients & Colleagues Say</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: (theme: any) => theme.palette.mode === 'dark' ? '#333333' : '#FFFFFF',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Don't just take my word for it - here's what my clients & colleagues have to say about working with me
            </Typography>
          </Box>          
          <Grid container spacing={4}>
            {featuredTestimonials.map((testimonial) => (
              <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4 }} key={testimonial.id}>
                <motion.div 
                // variants={itemVariants}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '#FFFFFF'
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: (theme) =>
                        `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'}`,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: (theme) =>
                          theme.palette.mode === 'dark'
                            ? '0 25px 50px rgba(0, 0, 0, 0.15)'
                            : '0 25px 50px rgba(255, 152, 0, 0.15)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: (theme) =>
                          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, position: 'relative' }}>
                      {/* Quote Icon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: 20,
                          opacity: 0.1,
                        }}
                      >
                        <FormatQuote sx={{ fontSize: 80, color: 'primary.main' }} />
                      </Box>

                      {/* Rating */}
                      <Box sx={{ mb: 3 }}>
                        <Rating
                          value={testimonial.rating}
                          readOnly
                          sx={{
                            '& .MuiRating-iconFilled': {
                              color: 'primary.main',
                            },
                          }}
                        />
                      </Box>

                      {/* Testimonial Text */}
                      <Typography
                        variant="body1"
                        sx={{
                          // color: 'text.primary',
                          color: (theme: any) => theme.palette.mode === 'dark' ? '#333333' : '#FFFFFF',
                          mb: 4,
                          lineHeight: 1.7,
                          fontSize: '1.1rem',
                          fontStyle: 'italic',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        "{testimonial.testimonial}"
                      </Typography>

                      {/* Client Info */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                          src={testimonial.image}
                          alt={testimonial.name}
                          sx={{
                            width: 60,
                            height: 60,
                            border: (theme) => `3px solid ${theme.palette.primary.main}30`,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              // color: 'text.primary',
                              color: (theme: any) => theme.palette.mode === 'dark' ? '#333333' : '#FFFFFF',
                              mb: 0.5,
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'primary.main',
                              fontWeight: 600,
                            }}
                          >
                            {testimonial.role}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: (theme: any) => theme.palette.mode === 'dark' ? '#333333' : '#FFFFFF'
                            }}
                          >
                            {testimonial.company}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Statistics */}
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 3,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(255, 152, 0, 0.08) 0%, rgba(255, 152, 0, 0.03) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%)',
              border: (theme) => `1px solid ${theme.palette.primary.main}30`,
            }}
          >            <Grid container spacing={4} textAlign="center">
              <Grid size={{ xs: 6, md: 3 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    mb: 1,
                  }}
                >
                  2+
                </Typography>
                <Typography variant="body1" sx={{ color: (theme: any) => theme.palette.mode === 'dark' ? '#333333' : '#FFFFFF' }}>
                  Happy Clients
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    mb: 1,
                  }}
                >
                  2+
                </Typography>
                <Typography variant="body1" sx={{ color: (theme: any) => theme.palette.mode === 'dark' ? '#333333' : '#FFFFFF' }}>
                  Projects Completed
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    mb: 1,
                  }}
                >
                  98%
                </Typography>
                <Typography variant="body1" sx={{ color: (theme: any) => theme.palette.mode === 'dark' ? '#333333' : '#FFFFFF' }}>
                  Client Satisfaction
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    mb: 1,
                  }}
                >
                  3
                </Typography>
                <Typography variant="body1" sx={{ color: (theme: any) => theme.palette.mode === 'dark' ? '#333333' : '#FFFFFF' }}>
                  Years Experience
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{
            mt: 6,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}>
          <Button variant="contained" onClick={() => setOpenFeedbackDialog(true)} color="primary">Submit Response</Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  </Box>
  );
};

export default TestimonialsSection;
