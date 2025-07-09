import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHub, Launch, Close } from '@mui/icons-material';
import type { Project } from '../../types/data';
import projectsData from '../../data/projects.json';

const PortfolioSection: React.FC = () => {
  const projects = projectsData as Project[];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    ...Array.from(new Set(projects.map(project => project.category))),
  ];
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <Box
      id='projects'
      component='section'
      sx={{
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        background: theme =>
          theme.palette.mode === 'dark' ? '#151515' : '#FFFFFF',
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
        }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Box textAlign='center' mb={8}>
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 700,
                color: theme =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
              }}
            >
              My Recent <span style={{ color: '#FF6B35' }}>Work</span>
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: theme =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                lineHeight: 1.6,
                mb: 4,
                textAlign: 'center',
                maxWidth: '500px',
                mx: { xs: 'auto', lg: 'auto' },
              }}
            >
              Here are some of my recent projects that showcase my skills and
              experience
            </Typography>

            {/* Filter Tabs */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 4,
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {categories.map(category => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? 'filled' : 'outlined'}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: '#FF6B35',
                    transition: 'all 0.3s ease',
                    ...(activeFilter === category && {
                      background: theme =>
                        `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      color: 'white',
                      '&:hover': {
                        background: theme =>
                          `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                      },
                    }),
                  }}
                />
              ))}
            </Box>
          </Box>

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              <Grid container spacing={4}>
                {filteredProjects.map(project => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} maxHeight="450px" key={project.id}>
                    <motion.div variants={itemVariants}>
                      <Card
                        sx={{
                          height: '100%',
                          minHeight: '450px',
                          background: theme =>
                            theme.palette.mode === 'dark'
                              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
                          backdropFilter: 'blur(10px)',
                          border: theme =>
                            `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                          borderRadius: 3,
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: theme =>
                              theme.palette.mode === 'dark'
                                ? '0 20px 40px rgba(255, 152, 0, 0.1)'
                                : '0 20px 40px rgba(0, 0, 0, 0.1)',
                          },
                        }}
                        onClick={() => setSelectedProject(project)}
                      >
                        <CardMedia
                          component='img'
                          height='200'
                          image={project.image}
                          alt={project.title}
                          sx={{
                            objectFit: 'contain',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              mb: 2,
                            }}
                          >
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>
                              {project.title}
                            </Typography>
                            {project.featured && (
                              <Chip
                                label='Featured'
                                size='small'
                                sx={{
                                  background: theme =>
                                    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                  color: 'white',
                                  fontWeight: 600,
                                }}
                              />
                            )}
                          </Box>

                          <Typography
                            variant='body2'
                            sx={{
                              color: 'text.secondary',
                              mb: 2,
                              lineHeight: 1.5,
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {project.description}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 1,
                              mb: 2,
                            }}
                          >
                            {project.technologies
                              .slice(0, 3)
                              .map((tech, index) => (
                                <Chip
                                  key={index}
                                  label={tech}
                                  size='small'
                                  variant='outlined'
                                  sx={{
                                    fontSize: '0.7rem',
                                    height: 24,
                                    borderColor: '#FF6B35',
                                    color: '#FF6B35',
                                  }}
                                />
                              ))}
                            {project.technologies.length > 3 && (
                              <Chip
                                label={`+${project.technologies.length - 3}`}
                                size='small'
                                variant='outlined'
                                sx={{
                                  fontSize: '0.7rem',
                                  height: 24,
                                  borderColor: '#FF6B35',
                                  color: '#FF6B35',
                                }}
                              />
                            )}
                          </Box>

                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                              size='small'
                              href={project.githubUrl}
                              target='_blank'
                              rel='noopener noreferrer'
                              onClick={e => e.stopPropagation()}
                              sx={{
                                background: theme =>
                                  `${theme.palette.primary.main}20`,
                                color: '#FF6B35',
                                '&:hover': {
                                  background: '#FF6B35',
                                  color: 'white',
                                },
                              }}
                            >
                              <GitHub fontSize='small' />
                            </IconButton>
                            <IconButton
                              size='small'
                              href={project.liveUrl}
                              target='_blank'
                              rel='noopener noreferrer'
                              onClick={e => e.stopPropagation()}
                              sx={{
                                background: theme =>
                                  `${theme.palette.primary.main}20`,
                                color: '#FF6B35',
                                '&:hover': {
                                  background: '#FF6B35',
                                  color: 'white',
                                },
                              }}
                            >
                              <Launch fontSize='small' />
                            </IconButton>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth='md'
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: theme =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant='h5' sx={{ fontWeight: 700 }}>
                {selectedProject.title}
              </Typography>
              <IconButton onClick={() => setSelectedProject(null)}>
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                  }}
                />
              </Box>

              <Typography variant='body1' sx={{ mb: 3, lineHeight: 1.6 }}>
                {selectedProject.description}
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      variant='outlined'
                      sx={{
                        borderColor: '#FF6B35',
                        backgroundColor: '#FF6B35',
                        color: '#FFFFFF',
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href={selectedProject.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    background: '#FF6B35',
                    color: 'white',
                    '&:hover': {
                      background: '#FFFFFF',
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href={selectedProject.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    background: '#FF6B35',
                    color: 'white',
                    '&:hover': {
                      background: '#FFFFFF',
                    },
                  }}
                >
                  <Launch />
                </IconButton>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default PortfolioSection;
