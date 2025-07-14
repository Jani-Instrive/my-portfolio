import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
//   Avatar,
//   LinearProgress,
  Chip,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  ArrowForward,
} from '@mui/icons-material';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Product sold',
      value: '765',
      change: '+2.6%',
      trend: 'up',
      period: 'last week',
    },
    {
      title: 'Total balance',
      value: '18,765',
      change: '-0.1%',
      trend: 'down',
      period: 'last week',
    },
    {
      title: 'Sales profit',
      value: '4,876',
      change: '+0.6%',
      trend: 'up',
      period: 'last week',
    },
  ];

  return (
    <Box>
      {/* Page Header */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        App
      </Typography>

      {/* Hero Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Congratulations Card */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 200,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Congratulations 🎉
              </Typography>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Jaydon Frankie
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                Best seller of the month you have done 576% more sales today.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#00C851',
                  color: 'white',
                  fontWeight: 'bold',
                  px: 3,
                  '&:hover': {
                    bgcolor: '#00A041',
                  },
                }}
              >
                Go now
              </Button>
            </CardContent>
            <Box
              sx={{
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0.1,
                fontSize: '200px',
              }}
            >
              🎯
            </Box>
          </Card>
        </Grid>

        {/* Featured App Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
              color: 'white',
              minHeight: 200,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Chip
                label="NEW"
                size="small"
                sx={{
                  bgcolor: '#00C851',
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 2,
                }}
              />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Classic Leather Loafers
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#00C851',
                  color: 'white',
                  fontWeight: 'bold',
                  mt: 2,
                  '&:hover': {
                    bgcolor: '#00A041',
                  },
                }}
              >
                Buy now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {stat.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h4" fontWeight="bold" sx={{ mr: 1 }}>
                    {stat.value}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: stat.trend === 'up' ? 'success.main' : 'error.main',
                    }}
                  >
                    {stat.trend === 'up' ? (
                      <TrendingUp fontSize="small" />
                    ) : (
                      <TrendingDown fontSize="small" />
                    )}
                    <Typography variant="body2" sx={{ ml: 0.5 }}>
                      {stat.change}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {stat.period}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Sections */}
      <Grid container spacing={3}>
        {/* Sale by gender */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Sale by gender
              </Typography>
              <Box sx={{ mt: 3 }}>
                {/* Placeholder for chart */}
                <Box
                  sx={{
                    height: 200,
                    bgcolor: 'grey.100',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography color="text.secondary">Chart Placeholder</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Yearly sales */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Yearly sales
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  endIcon={<ArrowForward />}
                >
                  2023
                </Button>
              </Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                (+43%) than last year
              </Typography>
              <Box sx={{ mt: 3 }}>
                {/* Placeholder for chart */}
                <Box
                  sx={{
                    height: 200,
                    bgcolor: 'grey.100',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography color="text.secondary">Chart Placeholder</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
