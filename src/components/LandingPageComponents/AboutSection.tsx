/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, CardMedia, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Typography } from '../SharedComponents';
// import type { AboutData } from '../../types/data';
// import aboutDataRaw from '../../data/about.json';
import AboutImage from '../../assets/AboutImage.png';
import HTML from '../../assets/HTML.png';
import JavascriptLogo from '../../assets/Javascript.png';
import Typescript from '../../assets/typescript.png';
import ReactLogo from '../../assets/react.png';
import ReduxLogo from '../../assets/redux.png';
import NodeJs from '../../assets/nodeJs.png';
import GitHub from '../../assets/Github.png';
import CSS from '../../assets/css.png';
import Express from '../../assets/express.webp';
import MongoDB from '../../assets/MongoDB.png';
import Next from '../../assets/next.png';
import Firebase from '../../assets/firebase.png';

// const aboutData = aboutDataRaw as AboutData;

const techStack = [
  {
    name: 'TypeScript',
    icon: Typescript,
    color: '#007ACC',
    textColor: '#FFFFFF',
  },
  {
    name: 'JavaScript',
    icon: JavascriptLogo,
    color: '#F7DF1E',
    textColor: '#000',
  },
  { name: 'React', icon: ReactLogo, color: '#61DAFB', textColor: '#000' },
  { name: 'ReduxToolkit', icon: ReduxLogo, color: '#61DAFB', textColor: '#000' },
  { name: 'Node.js', icon: NodeJs, color: '#339933', textColor: '#FFFFFF' },
  { name: 'GitHub', icon: GitHub, color: '#181717', textColor: '#FFFFFF' },
  { name: 'HTML', icon: HTML, color: '#E34F26', textColor: '#FFFFFF' },
  { name: 'CSS', icon: CSS, color: '#1572B6', textColor: '#FFFFFF' },
  { name: 'Express', icon: Express, color: '#000000', textColor: '#FFFFFF' },
  { name: 'MongoDB', icon: MongoDB, color: '#47A248', textColor: '#FFFFFF' },
  { name: 'Next.js', icon: Next, color: '#000000', textColor: '#FFFFFF' },
  { name: 'Firebase', icon: Firebase, color: '#FFCA28', textColor: '#000000' },
];

const AboutSection: React.FC = () => {
  return (
    <Box
      component='section'
      id='about'
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: (theme: any) =>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            align='center'
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              color: (theme: any) =>
                theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
              lineHeight: 1.1,
              mb: 6,
            }}
          >
            About <span style={{ color: '#FF6B35' }}>Me</span>
          </Typography>
        </motion.div>
        <Grid container spacing={{ xs: 4, sm: 6, lg: 8 }}>
          {/* <Grid size={{ xs: 12, lg: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, sm: 4, md: 5 },
                  borderRadius: 3,
                  backgroundColor: (theme: any) =>
                    theme.palette.mode === 'dark' ? '#2B2B2B' : '#FFFFFF',
                }}
              >
                <Typography
                  variant='h5'
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    mb: 3,
                    fontSize: {
                      xs: '1.5rem',
                      sm: '1.75rem',
                      md: '2rem',
                      lg: '2.25rem',
                    },
                    color: (theme: any) =>
                      theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                  }}
                >
                  Hello! I'm {aboutData.name.split(' ')[0]}
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem', lg: '1.2rem' },
                    lineHeight: 1.8,
                    mb: 3,
                    color: (theme: any) =>
                      theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                  }}
                >
                  {aboutData.summary}
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem', lg: '1.2rem' },
                    lineHeight: 1.8,
                    color: (theme: any) =>
                      theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
                  }}
                >
                  Based in {aboutData.location} I'm eager to take the next step
                  in my journey as a software development engineer at a reputed
                  company. I’m excited about the opportunity to work alongside
                  innovative teams, contribute to impactful projects, and grow
                  both personally and professionally in a collaborative tech
                  environment.
                </Typography>
              </Paper>
            </motion.div>
          </Grid> */}
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              backgroundSize: 'contain',
              borderRadius: 3,
              color: 'red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardMedia
              component='img'
              image={AboutImage}
              alt='About Me'
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 3,
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: 'none',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Typography
                variant='h5'
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: '#333333',
                  textAlign: 'center',
                  mb: 4,
                  fontSize: '2rem',
                }}
              >
                Tech Stack
              </Typography>

              <Grid container spacing={4} justifyContent='center'>
                {techStack.map((tech) => (
                  <Grid key={tech.name}>
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        y: -10,
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 10,
                        },
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: tech.color,
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                      }}
                      title={tech.name}
                    >
                      <CardMedia
                        component='img'
                        image={tech.icon}
                        alt={tech.name}
                        sx={{
                          borderRadius: '5px',
                          width: '60%',
                          height: '60%',
                          objectFit: 'contain',
                        }}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
