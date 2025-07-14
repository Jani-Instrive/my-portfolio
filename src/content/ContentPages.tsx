import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Course: React.FC = () => (
  <Box>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Course</Typography>
    <Card><CardContent><Typography variant="h6" gutterBottom>Course Dashboard</Typography><Typography color="text.secondary">Course content will be displayed here.</Typography></CardContent></Card>
  </Box>
);

const User: React.FC = () => (
  <Box>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>User</Typography>
    <Card><CardContent><Typography variant="h6" gutterBottom>User Management</Typography><Typography color="text.secondary">User management content will be displayed here.</Typography></CardContent></Card>
  </Box>
);

const Product: React.FC = () => (
  <Box>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Product</Typography>
    <Card><CardContent><Typography variant="h6" gutterBottom>Product Management</Typography><Typography color="text.secondary">Product management content will be displayed here.</Typography></CardContent></Card>
  </Box>
);

const Order: React.FC = () => (
  <Box>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Order</Typography>
    <Card><CardContent><Typography variant="h6" gutterBottom>Order Management</Typography><Typography color="text.secondary">Order management content will be displayed here.</Typography></CardContent></Card>
  </Box>
);

const Invoice: React.FC = () => (
  <Box>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Invoice</Typography>
    <Card><CardContent><Typography variant="h6" gutterBottom>Invoice Management</Typography><Typography color="text.secondary">Invoice management content will be displayed here.</Typography></CardContent></Card>
  </Box>
);

const Blog: React.FC = () => (
  <Box>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Blog</Typography>
    <Card><CardContent><Typography variant="h6" gutterBottom>Blog Management</Typography><Typography color="text.secondary">Blog management content will be displayed here.</Typography></CardContent></Card>
  </Box>
);

const Job: React.FC = () => (
  <Box>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Job</Typography>
    <Card><CardContent><Typography variant="h6" gutterBottom>Job Management</Typography><Typography color="text.secondary">Job management content will be displayed here.</Typography></CardContent></Card>
  </Box>
);

const Calendar: React.FC = () => (
  <Box>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Calendar</Typography>
    <Card><CardContent><Typography variant="h6" gutterBottom>Calendar</Typography><Typography color="text.secondary">Calendar content will be displayed here.</Typography></CardContent></Card>
  </Box>
);

const Kanban: React.FC = () => (
  <Box>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Kanban</Typography>
    <Card><CardContent><Typography variant="h6" gutterBottom>Kanban Board</Typography><Typography color="text.secondary">Kanban board content will be displayed here.</Typography></CardContent></Card>
  </Box>
);

export { Course, User, Product, Order, Invoice, Blog, Job, Calendar, Kanban };
