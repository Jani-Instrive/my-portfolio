import React from 'react';
import { Box, Container, Grid, Card, CardContent, IconButton } from '@mui/material';
import { ArrowUpward, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Typography, Button } from '../SharedComponents';

const BlogSection: React.FC = () => {
  return (
    <Box
      id="blog"
      sx={{
        py: 8,
        background: '#ffffff',
        minHeight: '100vh',
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
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 8 }}>
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 700,
                color: '#333',
              }}
            >
              From my <span style={{ color: '#FF6B35' }}>blog post</span>
            </Typography>
            <Button
              endIcon={<ArrowForward />}
              sx={{
                color: '#FF6B35',
                fontWeight: 600,
                fontSize: '16px',
                '&:hover': {
                  bgcolor: 'rgba(255, 107, 53, 0.1)',
                },
              }}
            >
              View All
            </Button>
          </Box>

          {/* Blog Posts Grid */}
          <Grid container spacing={4}>
            {/* First Blog Post */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: '20px',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {/* Blog Image */}
                  <Box
                    sx={{
                      height: 200,
                      background: 'linear-gradient(45deg, #f0f0f0 0%, #e0e0e0 100%)',
                      position: 'relative',
                    }}
                  />
                  
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 1,
                      mb: 2,
                      color: '#FF6B35',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}>
                      <Box sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#FF6B35',
                      }} />
                      UI/UX Design
                    </Box>
                    
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#333',
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      Design Unraveled: Behind the Scenes of UI/UX Magic
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#FF6B35',
                        }} />
                        <Typography sx={{ fontSize: '12px', color: '#666' }}>
                          Jenny Smith
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#FF6B35',
                        }} />
                        <Typography sx={{ fontSize: '12px', color: '#666' }}>
                          22 July 2023
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>

                  <IconButton
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      right: 20,
                      width: 50,
                      height: 50,
                      background: '#333',
                      color: 'white',
                      '&:hover': {
                        background: '#555',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <ArrowUpward sx={{ transform: 'rotate(45deg)' }} />
                  </IconButton>
                </Card>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: '20px',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {/* Blog Image */}
                  <Box
                    sx={{
                      height: 200,
                      background: 'linear-gradient(45deg, #f0f0f0 0%, #e0e0e0 100%)',
                      position: 'relative',
                    }}
                  />
                  
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 1,
                      mb: 2,
                      color: '#FF6B35',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}>
                      <Box sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#FF6B35',
                      }} />
                      User Experience
                    </Box>
                    
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#333',
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      Beyond Aesthetics: Crafting Intuitive UX
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#FF6B35',
                        }} />
                        <Typography sx={{ fontSize: '12px', color: '#666' }}>
                          Jenny Smith
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#FF6B35',
                        }} />
                        <Typography sx={{ fontSize: '12px', color: '#666' }}>
                          22 July 2023
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>

                  <IconButton
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      right: 20,
                      width: 50,
                      height: 50,
                      background: '#FF6B35',
                      color: 'white',
                      '&:hover': {
                        background: '#E55A2B',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <ArrowUpward sx={{ transform: 'rotate(45deg)' }} />
                  </IconButton>
                </Card>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: '20px',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {/* Blog Image */}
                  <Box
                    sx={{
                      height: 200,
                      background: 'linear-gradient(45deg, #f0f0f0 0%, #e0e0e0 100%)',
                      position: 'relative',
                    }}
                  />
                  
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 1,
                      mb: 2,
                      color: '#FF6B35',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}>
                      <Box sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#FF6B35',
                      }} />
                      Design
                    </Box>
                    
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#333',
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      Pixels & Insights: Unveiling the Art of UI/UX
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#FF6B35',
                        }} />
                        <Typography sx={{ fontSize: '12px', color: '#666' }}>
                          Jenny Smith
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#FF6B35',
                        }} />
                        <Typography sx={{ fontSize: '12px', color: '#666' }}>
                          22 July 2023
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>

                  <IconButton
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      right: 20,
                      width: 50,
                      height: 50,
                      background: '#333',
                      color: 'white',
                      '&:hover': {
                        background: '#555',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <ArrowUpward sx={{ transform: 'rotate(45deg)' }} />
                  </IconButton>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
    </motion.div>
  </Container>
</Box>
  );
};

export default BlogSection;
