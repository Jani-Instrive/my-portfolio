import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Work, School, Business } from '@mui/icons-material';
import type { Experience } from '../../types/data';
import experienceData from '../../data/experience.json';

const WorkExperienceSection: React.FC = () => {
  const experiences = experienceData as Experience[];

  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'work':
        return <Work />;
      case 'education':
        return <School />;
      default:
        return <Business />;
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? '#151515'
            : '#FFFFFF',
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{ 
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
                color: (theme) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                mb: 3,
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            >
              Work <span style={{ color: '#FF6B35' }}>Experience</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              My professional journey and key achievements
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', mx: 'auto', maxWidth: '800px' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: '60px',
                bottom: '60px',
                width: '3px',
                background: (theme) =>
                  `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                transform: 'translateX(-50%)',
                display: { xs: 'none', md: 'block' }
              }}
            />
            
            {/* Mobile timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: '30px',
                top: '60px',
                bottom: '60px',
                width: '3px',
                background: (theme) =>
                  `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                display: { xs: 'block', md: 'none' }
              }}
            />

            {experiences.map((experience, index) => (
              <motion.div key={experience.id} variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 6,
                    position: 'relative',
                    flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  }}
                >
                  {/* Date and location for desktop */}
                  <Box
                    sx={{
                      flex: 1,
                      px: 3,
                      textAlign: { md: index % 2 === 0 ? 'right' : 'left' },
                      display: { xs: 'none', md: 'block' }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#FF6B35' }}>
                      {experience.startDate} - {experience.endDate || 'Present'}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#FF6B35', mt: 1 }}>
                      {experience.location}
                    </Typography>
                  </Box>

                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: { xs: 'absolute', md: 'relative' },
                      left: { xs: '15px', md: 'auto' },
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: (theme) =>
                        `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      boxShadow: (theme) =>
                        `0 8px 25px ${theme.palette.primary.main}40`,
                      color: 'white',
                    }}
                  >
                    {getIcon(experience.type)}
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      flex: 1,
                      px: { xs: 0, md: 3 },
                      ml: { xs: '90px', md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: (theme) =>
                          `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                        borderRadius: 3,
                        p: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: (theme) =>
                            theme.palette.mode === 'dark'
                              ? '0 15px 30px rgba(255, 152, 0, 0.1)'
                              : '0 15px 30px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      {/* Mobile date display */}
                      <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#FF6B35' }}>
                          {experience.startDate} - {experience.endDate || 'Present'}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#FF6B35' }}>
                          {experience.location}
                        </Typography>
                      </Box>

                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                        {experience.position}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FF6B35',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {experience.company}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: (theme) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                          mb: 2,
                          lineHeight: 1.6,
                        }}
                      >
                        {experience.description}
                      </Typography>
                      
                      {experience.achievements && experience.achievements.length > 0 && (
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            Key Achievements:
                          </Typography>
                          <Box component="ul" sx={{ pl: 2, m: 0 }}>
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <Typography
                                key={achievementIndex}
                                component="li"
                                variant="body2"
                                sx={{
                                  color: (theme) =>
                  theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                                  mb: 0.5,
                                  lineHeight: 1.5,
                                }}
                              >
                                {achievement}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      )}
                      
                      {experience.technologies && experience.technologies.length > 0 && (
                        <Box sx={{ mt: 2 }}>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {experience.technologies.map((tech, techIndex) => (
                              <Box
                                key={techIndex}
                                sx={{
                                  px: 2,
                                  py: 0.5,
                                  borderRadius: 2,
                                  background: (theme) =>
                                    `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.primary.light}20 100%)`,
                                  border: '#FF6B35',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                  color: '#FF6B35',
                                }}
                              >
                                {tech}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WorkExperienceSection;
