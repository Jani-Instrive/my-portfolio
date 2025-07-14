import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Banking: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Banking
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Banking Dashboard
          </Typography>
          <Typography color="text.secondary">
            Banking content will be displayed here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Banking;
