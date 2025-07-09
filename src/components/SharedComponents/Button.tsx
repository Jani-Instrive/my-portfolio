import React from 'react';
import { Button as MuiButton, type ButtonProps } from '@mui/material';
import { motion, type TargetAndTransition } from 'framer-motion';

interface AnimatedButtonProps extends ButtonProps {
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
}

const Button: React.FC<AnimatedButtonProps> = ({
  children,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  ...props
}) => {
  return (
    <motion.div whileHover={whileHover} whileTap={whileTap}>
      <MuiButton {...props}>{children}</MuiButton>
    </motion.div>
  );
};

export default Button;
