import React from 'react';
import { 
  Header, 
  Footer, 
  HeroSection, 
  AboutSection, 
  ServicesSection, 
  WorkExperienceSection, 
  WhyHireMeSection, 
  PortfolioSection, 
  TestimonialsSection, 
  ContactSection 
} from '../../LandingPageComponents';
import { SEO } from '../../SharedComponents';
import { Box } from '@mui/material';

const LandingPageLayout: React.FC = () => {
  return (
    <Box sx={{
      width: '100%',
      margin: '0 auto',
      overflow: 'hidden', // Prevent horizontal scroll
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5',
        position: 'relative',
      }}>

      <SEO />
      <Header />
      <main
        style={{
          paddingTop: '0px', // Remove padding since HeroSection now handles it
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkExperienceSection />
        <WhyHireMeSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPageLayout;
