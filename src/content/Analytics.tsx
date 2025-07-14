import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Analytics: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Analytics
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Analytics Dashboard
          </Typography>
          <Typography color="text.secondary">
            Analytics content will be displayed here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Analytics;
