import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Ecommerce: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Ecommerce
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Ecommerce Dashboard
          </Typography>
          <Typography color="text.secondary">
            Ecommerce content will be displayed here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Ecommerce;
