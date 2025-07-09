import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useThemeMode } from '../../context/useThemeMode';

const ThemeToggle: React.FC = () => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label="toggle theme"
        sx={{
          backgroundColor: theme.palette.action.hover,
          '&:hover': {
            backgroundColor: theme.palette.action.selected,
          },
        }}
      >
        {mode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </motion.div>
  );
};

export default ThemeToggle;
