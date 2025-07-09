import React from 'react';
import { Chip as MuiChip } from '@mui/material';
import type { ChipProps } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedChipProps extends ChipProps {
  animate?: boolean;
  delay?: number;
}

const Chip: React.FC<AnimatedChipProps> = ({
  animate = false,
  delay = 0,
  ...props
}) => {
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <MuiChip {...props} />
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <MuiChip {...props} />
    </motion.div>
  );
};

export default Chip;
