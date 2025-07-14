import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Home,
  Person,
  Work,
  Subscriptions,
  Security,
  Settings,
  Logout,
  Close,
} from '@mui/icons-material';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

interface ProfileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ open, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    onClose();
  };

  const menuItems = [
    { icon: <Home />, label: 'Home', path: '/dashboard/dashboard' },
    { icon: <Person />, label: 'Profile', path: '/dashboard/profile' },
    { icon: <Work />, label: 'Projects', badge: '3', path: '/dashboard/projects' },
    { icon: <Subscriptions />, label: 'Subscription', path: '/dashboard/subscription' },
    { icon: <Security />, label: 'Security', path: '/dashboard/security' },
    { icon: <Settings />, label: 'Account settings', path: '/dashboard/settings' },
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 320,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Box>

        {/* Profile Section */}
        <Box sx={{ textAlign: 'center', px: 3, pb: 3 }}>
          <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 1,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                alt={user?.name || 'User'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </Avatar>
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                right: -8,
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: '#00C851',
                border: '2px solid white',
              }}
            />
          </Box>

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {user?.name || 'Jaydon Frankie'}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {user?.email || 'demo@minimals.cc'}
          </Typography>
        </Box>

        <Divider />

        {/* Menu Items */}
        <Box sx={{ flexGrow: 1, py: 1 }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleMenuClick(item.path)}
                  sx={{
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                    }}
                  />
                  {item.badge && (
                    <Box
                      sx={{
                        minWidth: 20,
                        height: 20,
                        borderRadius: '10px',
                        backgroundColor: 'error.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.badge}
                    </Box>
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Logout Button */}
        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            startIcon={<Logout />}
            onClick={handleLogout}
            sx={{
              py: 1.5,
              borderRadius: 2,
              borderColor: 'error.main',
              color: 'error.main',
              '&:hover': {
                backgroundColor: 'error.50',
                borderColor: 'error.main',
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ProfileDrawer;
