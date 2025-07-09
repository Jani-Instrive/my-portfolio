import React from 'react';
import {
  Box,
  Container,
  Grid,
  Avatar,
  TextField,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  // Twitter,
  Instagram,
  // YouTube,
  LinkedIn,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Typography } from '../SharedComponents';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook />, url: 'https://www.facebook.com/sbabblu1' },
    { name: 'LinkedIn', icon: <LinkedIn />, url: 'https://www.linkedin.com/in/jani-shaida-shaik' },
    { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/17_unique_shades?igsh=MXZqOWZxbGhjbnlzNw%3D%3D&utm_source=qr' },
    // { name: 'Twitter', icon: <Twitter />, url: 'https://twitter.com' },
    // { name: 'YouTube', icon: <YouTube />, url: 'https://youtube.com' },
  ];

  const navigationLinks = ['Home', 'About Us', 'Service', 'Resume', 'Project'];

  const contactLinks = [
    '+919347474786',
    'www.example.com',
    'shaikjanishaida47@gmail.com',
  ];

  return (
    <Box
      component='footer'
      sx={{
        background: '#1a1a1a',
        pt: 8,
        pb: 4,
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
          <Grid container spacing={6}>
            {/* Left Column - Brand & Description */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      mr: 2,
                      background: '#FF6B35',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'white',
                    }}
                  >
                    J
                  </Avatar>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      fontSize: '1.2rem',
                    }}
                  >
                    Jani
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#999',
                    lineHeight: 1.6,
                    mb: 4,
                  }}
                >
                  With 3+ years of hands-on experience in React and Redux
                  Toolkit, I bring proven expertise in building scalable
                  frontend applications. My growing knowledge in Node.js enables
                  full-stack collaboration, while my strong time management
                  skills and understanding of Scrum methodologies ensure project
                  deadlines are consistently met. I'm committed to delivering
                  optimized solutions that drive business value.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map(social => (
                    <IconButton
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      sx={{
                        width: 40,
                        height: 40,
                        background: '#333',
                        color: 'white',
                        '&:hover': {
                          background: '#FF6B35',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Middle Left Column - Navigation */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'white',
                  mb: 3,
                }}
              >
                Navigation
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {navigationLinks.map(link => (
                  <Typography
                    key={link}
                    sx={{
                      fontSize: '14px',
                      color: '#999',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#FF6B35',
                      },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Middle Right Column - Contact */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'white',
                  mb: 3,
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contactLinks.map(contact => (
                  <Typography
                    key={contact}
                    sx={{
                      fontSize: '14px',
                      color: '#999',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#FF6B35',
                      },
                    }}
                  >
                    {contact}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Right Column - Newsletter */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'white',
                  mb: 3,
                }}
              >
                Get the latest information
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  background: '#333',
                  borderRadius: '25px',
                  p: 1,
                  mb: 3,
                }}
              >
                <TextField
                  placeholder='Email address'
                  variant='standard'
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      color: 'white',
                      px: 2,
                      '& .MuiInputBase-input::placeholder': {
                        color: '#999',
                        pt: 1,
                        opacity: 1,
                      },
                    },
                  }}
                />
                <IconButton
                  sx={{
                    width: 30,
                    height: 30,
                    background: '#FF6B35',
                    color: 'white',
                    '&:hover': {
                      background: '#E55A2B',
                    },
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Copyright */}
          <Box
            sx={{
              borderTop: '1px solid #333',
              pt: 4,
              mt: 6,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                color: '#999',
              }}
            >
              Copyright © {currentYear}{' '}
              <span style={{ color: '#FF6B35' }}>Jani</span>. All Rights
              Reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#999',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#FF6B35',
                  },
                }}
              >
                User Terms & Conditions
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#999',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#FF6B35',
                  },
                }}
              >
                Privacy Policy
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
