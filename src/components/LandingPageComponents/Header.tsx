/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
  Avatar,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography, Button, ThemeToggle } from '../SharedComponents';
import { NAVIGATION_ITEMS, scrollToSection } from '../../utils/constants';
import LoginDialog from './LoginDialog';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';

const Header: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > 100;
    }
    return false;
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    const initialScrollTop = window.scrollY;
    setIsScrolled(initialScrollTop > 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const initialScrollTop = window.scrollY;
    const animationDelay = initialScrollTop > 100 ? 0 : 500;

    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, animationDelay);
    return () => clearTimeout(timer);
  }, []);

  const getAnimationProps = (
    initialState: any,
    animateState: any,
    delay: number = 0
  ) => {
    const shouldSkipAnimation = hasAnimated || window.scrollY > 100;

    if (shouldSkipAnimation) {
      return {
        style: { ...animateState, opacity: 1 },
      };
    }
    return {
      initial: initialState,
      animate: animateState,
      transition: { duration: 0.3, delay: delay * 0.5 },
    };
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    const elementId = href.replace("#", "");
    scrollToSection(elementId);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {NAVIGATION_ITEMS.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item.href)}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main + "20",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Button
          variant="outlined"
          startIcon={<LoginIcon />}
          onClick={() => {
            setLoginOpen(true);
            setMobileOpen(false);
          }}
          sx={{
            mb: 2,
            px: 3,
            width: "100%",
          }}
        >
          Login
        </Button>
        <ThemeToggle />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "none",
          borderBottom: "none",
          boxShadow: "none",
          background: "transparent",
          top: isScrolled ? 0 : 20,
          transition: "all 0.6s ease",
          zIndex: 1100,
          left: 0,
          right: 0,
          width: "100%",
          opacity: 1,
          visibility: "visible",
        }}
      >
        {isScrolled ? (
          <motion.div
            initial={false}
            animate={{
              width: "100%",
              borderRadius: 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ opacity: 1 }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(43, 43, 43, 0.95)",
                backdropFilter: "blur(10px)",
                px: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
                py: 1,
                boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                width: "100%",
              }}
            >
              <Toolbar
                sx={{
                  justifyContent: "space-between",
                  py: 0.5,
                  px: 0,
                  minHeight: "56px !important",
                  width: "100%",
                  maxWidth: "1536px",
                  margin: "auto",
                }}
              >
                <motion.div
                  {...getAnimationProps(
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0 }
                  )}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      transition: "transform 0.2s ease",
                    }}
                    onClick={() => scrollToSection("home")}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        mr: 2,
                        background: "#FF6B35",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "white",
                      }}
                    >
                      J
                    </Avatar>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                        fontSize: "1.1rem",
                      }}
                    >
                      Jani
                    </Typography>
                  </Box>
                </motion.div>{" "}
                {!isSmall ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {" "}
                    <AnimatePresence>
                      {NAVIGATION_ITEMS.map((item, index) => (
                        <motion.div
                          key={item.id}
                          {...getAnimationProps(
                            { opacity: 0 },
                            { opacity: 1 },
                            index * 0.05
                          )}
                        >
                          <Button
                            color="inherit"
                            onClick={() => handleNavClick(item.href)}
                            sx={{
                              mx: 0.5,
                              color: "white",
                              fontWeight: 500,
                              padding: "6px 16px",
                              borderRadius: "25px",
                              fontSize: "14px",
                              "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                              },
                            }}
                          >
                            {item.label}
                          </Button>
                        </motion.div>
                      ))}{" "}
                    </AnimatePresence>
                    <motion.div
                      {...getAnimationProps(
                        { opacity: 0, scale: 0.8 },
                        { opacity: 1, scale: 1 },
                        0.3
                      )}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <ThemeToggle />
                        <Button
                          variant="outlined"
                          startIcon={<LoginIcon />}
                          onClick={() => setLoginOpen(true)}
                          sx={{
                            ml: 1,
                            px: 3,
                            py: 1,
                            borderColor: "#FF6B35",
                            color: "#FF6B35",
                            borderRadius: "25px",
                            fontSize: "14px",
                            fontWeight: 600,
                            "&:hover": {
                              borderColor: "#FF6B35",
                              backgroundColor: "rgba(255, 107, 53, 0.1)",
                            },
                          }}
                        >
                          Login
                        </Button>
                      </Box>
                    </motion.div>
                  </Box>
                ) : (
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    sx={{
                      color: "white",
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Toolbar>
            </Box>
          </motion.div>
        ) : (
          <Container
            maxWidth="xl"
            sx={{
              px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#2B2B2B",
                borderRadius: "50px",
                px: 3,
                py: 1,
                transition: "all 0.3s ease",
                width: "100%",
              }}
            >
              {" "}
              <Toolbar
                sx={{
                  justifyContent: "space-between",
                  py: 0.5,
                  px: 0,
                  minHeight: "56px !important",
                }}
              >
                <motion.div
                  {...getAnimationProps(
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0 }
                  )}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      transition: "transform 0.2s ease",
                    }}
                    onClick={() => scrollToSection("home")}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        mr: 2,
                        background: "#FF6B35",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "white",
                      }}
                    >
                      J
                    </Avatar>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                        fontSize: "1.1rem",
                      }}
                    >
                      Jani
                    </Typography>
                  </Box>
                </motion.div>
                {!isSmall ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AnimatePresence>
                      {NAVIGATION_ITEMS.map((item, index) => (
                        <motion.div
                          key={item.id}
                          {...getAnimationProps(
                            { opacity: 0 },
                            { opacity: 1 },
                            index * 0.05
                          )}
                        >
                          <Button
                            color="inherit"
                            onClick={() => handleNavClick(item.href)}
                            sx={{
                              mx: 0.5,
                              color: "white",
                              fontWeight: 500,
                              padding: "6px 16px",
                              borderRadius: "25px",
                              fontSize: "14px",
                              "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                              },
                            }}
                          >
                            {item.label}
                          </Button>
                        </motion.div>
                      ))}{" "}
                    </AnimatePresence>

                    <motion.div
                      {...getAnimationProps(
                        { opacity: 0, scale: 0.8 },
                        { opacity: 1, scale: 1 },
                        0.3
                      )}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <ThemeToggle />
                        <Button
                          variant="outlined"
                          startIcon={<LoginIcon />}
                          onClick={() => setLoginOpen(true)}
                          sx={{
                            ml: 1,
                            px: 3,
                            py: 1,
                            borderColor: "#FF6B35",
                            color: "#FF6B35",
                            borderRadius: "25px",
                            fontSize: "14px",
                            fontWeight: 600,
                            "&:hover": {
                              borderColor: "#FF6B35",
                              backgroundColor: "rgba(255, 107, 53, 0.1)",
                            },
                          }}
                        >
                          Login
                        </Button>
                      </Box>
                    </motion.div>
                  </Box>
                ) : (
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    sx={{
                      color: "white",
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Toolbar>
            </Box>
          </Container>
        )}
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>
      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Header;
