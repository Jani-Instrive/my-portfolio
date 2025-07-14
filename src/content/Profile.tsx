import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  Tab,
  Tabs,
} from '@mui/material';

const Profile: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      {/* Breadcrumb */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Dashboard • User • Jaydon Frankie
      </Typography>

      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Profile
      </Typography>

      {/* Profile Header Card */}
      <Card sx={{ mb: 3 }}>
        <Box
          sx={{
            height: 200,
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
            position: 'relative',
          }}
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                mt: -8,
                border: '4px solid white',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face"
                alt="Jaydon Frankie"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </Avatar>
            <Box sx={{ ml: 3, flexGrow: 1 }}>
              <Typography variant="h5" fontWeight="bold">
                Jaydon Frankie
              </Typography>
              <Typography variant="body1" color="text.secondary">
                CTO
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="outlined" size="small">
                Profile
              </Button>
              <Button variant="outlined" size="small">
                Followers
              </Button>
              <Button variant="outlined" size="small">
                Friends
              </Button>
              <Button variant="outlined" size="small">
                Gallery
              </Button>
            </Box>
          </Box>

          {/* Stats */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                1,947
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Follower
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                9,124
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Following
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card>
        <Tabs value={value} onChange={handleChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="Profile" />
          <Tab label="Followers" />
          <Tab label="Friends" />
          <Tab label="Gallery" />
        </Tabs>
        <CardContent>
          {value === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography paragraph>
                Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Post
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Chip label="Image/Video" variant="outlined" />
                  <Chip label="Streaming" variant="outlined" color="error" />
                </Box>
                <Button variant="contained" sx={{ borderRadius: 2 }}>
                  Post
                </Button>
              </Box>
            </Box>
          )}
          {value === 1 && (
            <Typography>Followers content goes here</Typography>
          )}
          {value === 2 && (
            <Typography>Friends content goes here</Typography>
          )}
          {value === 3 && (
            <Typography>Gallery content goes here</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
