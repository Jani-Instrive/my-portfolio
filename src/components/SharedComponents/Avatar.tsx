import React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';
import type { AvatarProps } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedAvatarProps extends AvatarProps {
  animate?: boolean;
  delay?: number;
}

const Avatar: React.FC<AnimatedAvatarProps> = ({
  animate = false,
  delay = 0,
  ...props
}) => {
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
      >
        <MuiAvatar {...props} />
      </motion.div>
    );
  }

  return <MuiAvatar {...props} />;
};

export default Avatar;
