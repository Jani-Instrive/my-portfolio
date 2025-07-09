import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Code as CodeIcon,
  Web as WebIcon,
  PhoneAndroid as MobileIcon,
} from '@mui/icons-material';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'HTML5', 'CSS3',
  'Material-UI', 'Redux', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
    image: 'https://via.placeholder.com/400x250?text=E-Commerce+Platform',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/example/ecommerce',
    demo: 'https://ecommerce-demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://via.placeholder.com/400x250?text=Task+Management+App',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    github: 'https://github.com/example/taskapp',
    demo: 'https://taskapp-demo.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that provides current weather conditions, forecasts, and interactive maps using weather APIs.',
    image: 'https://via.placeholder.com/400x250?text=Weather+Dashboard',
    technologies: ['React', 'JavaScript', 'API Integration', 'Charts.js'],
    github: 'https://github.com/example/weather',
    demo: 'https://weather-demo.com'
  }
];

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    title: 'Web Development',
    description: 'Full-stack web applications using modern technologies like React, Node.js, and cloud services.'
  },
  {
    icon: <MobileIcon sx={{ fontSize: 40 }} />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native and modern mobile development practices.'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'API Development',
    description: 'RESTful APIs and GraphQL services with proper authentication, documentation, and testing.'
  }
];

export const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Fade in={checked} timeout={1000}>
            <Box>
              <Avatar
                sx={{
                  width: { xs: 120, md: 150 },
                  height: { xs: 120, md: 150 },
                  mx: 'auto',
                  mb: 3,
                  border: '4px solid white',
                }}
                src="https://via.placeholder.com/150x150?text=Avatar"
                alt="Profile"
              />
              <Typography
                variant={isMobile ? 'h3' : 'h2'}
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                John Doe
              </Typography>
              <Typography
                variant={isMobile ? 'h6' : 'h5'}
                component="h2"
                gutterBottom
                sx={{ opacity: 0.9 }}
              >
                Full-Stack Developer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 600,
                  mx: 'auto',
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Passionate about creating innovative web solutions and building user-friendly applications
                that make a difference. Let's bring your ideas to life!
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: theme.palette.primary.main,
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
                  }}
                  href="#contact"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' },
                  }}
                  href="#projects"
                >
                  View Projects
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            About Me
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ maxWidth: 800, mx: 'auto', mb: 6, fontSize: '1.1rem' }}
          >
            I'm a passionate full-stack developer with 5+ years of experience creating web applications
            and digital solutions. I love working with modern technologies and always strive to write
            clean, efficient code.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Slide direction="right" in={checked} timeout={1000}>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Skills & Technologies
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        variant="outlined"
                        color="primary"
                        sx={{ mb: 1 }}
                      />
                    ))}
                  </Box>
                </Box>
              </Slide>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Slide direction="left" in={checked} timeout={1000}>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    What I Do
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {services.map((service) => (
                      <Box key={service.title} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box sx={{ color: theme.palette.primary.main }}>
                          {service.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {service.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {service.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Slide>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: { xs: 6, md: 10 }, backgroundColor: theme.palette.grey[50] }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ maxWidth: 600, mx: 'auto', mb: 6, fontSize: '1.1rem' }}
          >
            Here are some of my recent projects that showcase my skills and experience.
          </Typography>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4 
          }}>
            {projects.map((project, index) => (
              <Box key={project.id}>
                <Fade in={checked} timeout={1000 + index * 200}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'translateY(-4px)' },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            color="primary"
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                        >
                          Code
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          href={project.demo}
                          target="_blank"
                        >
                          Demo
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ maxWidth: 600, mx: 'auto', mb: 6, fontSize: '1.1rem' }}
          >
            I'm always open to discussing new opportunities and interesting projects.
            Feel free to reach out!
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: { xs: '100%', md: '66.66%' } }}>
              <Card sx={{ p: 4 }}>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 3 
                }}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <EmailIcon color="primary" />
                      <Typography variant="body1">john.doe@example.com</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <PhoneIcon color="primary" />
                      <Typography variant="body1">+1 (555) 123-4567</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <LocationIcon color="primary" />
                      <Typography variant="body1">San Francisco, CA</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/johndoe"
                        target="_blank"
                      >
                        GitHub
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<LinkedInIcon />}
                        href="https://linkedin.com/in/johndoe"
                        target="_blank"
                      >
                        LinkedIn
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
