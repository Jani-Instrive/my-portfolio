import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const FileManager: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        File
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            File Manager
          </Typography>
          <Typography color="text.secondary">
            File manager content will be displayed here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FileManager;
