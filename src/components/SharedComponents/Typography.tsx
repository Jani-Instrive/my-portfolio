import React from 'react';
import { Typography as MuiTypography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedTypographyProps extends TypographyProps {
  animate?: boolean;
  delay?: number;
}

const Typography: React.FC<AnimatedTypographyProps> = ({
  children,
  animate = false,
  delay = 0,
  ...props
}) => {
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
      >
        <MuiTypography {...props}>{children}</MuiTypography>
      </motion.div>
    );
  }

  return <MuiTypography {...props}>{children}</MuiTypography>;
};

export default Typography;
