import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Booking: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Booking
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Booking Dashboard
          </Typography>
          <Typography color="text.secondary">
            Booking content will be displayed here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Booking;
