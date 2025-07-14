import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  TextField,
  InputAdornment,
  Avatar,
  Badge,
  useTheme,
} from '@mui/material';
import {
  Search,
  Menu,
  Notifications,
  Language,
  Settings,
} from '@mui/icons-material';
import { useAuth } from '../context/useDashboardAuth';
import ProfileDrawer from './ProfileDrawer';

interface DashboardHeaderProps {
  onMenuClick: () => void;
  sidebarWidth: number;
  isSidebarOpen: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onMenuClick,
  sidebarWidth,
  isSidebarOpen,
}) => {
  const theme = useTheme();
  const { user } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileOpen(true);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: {
            lg: isSidebarOpen ? `calc(100% - ${sidebarWidth}px)` : '100%',
          },
          ml: {
            lg: isSidebarOpen ? `${sidebarWidth}px` : 0,
          },
          backgroundColor: 'white',
          borderBottom: '1px solid',
          borderColor: 'divider',
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, sm: 3 },
            py: 0,
            justifyContent: 'space-between',
          }}
        >
          {/* Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{
              color: 'text.primary',
            }}
          >
            <Menu />
          </IconButton>

          {/* Right Side - Search and Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Search Bar */}
            <TextField
              placeholder="Search..."
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'divider',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                },
              }}
              sx={{
                width: { xs: 200, sm: 300 },
                '& .MuiInputBase-input': {
                  py: 1,
                },
              }}
            />

            {/* Action Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Language Icon */}
              <IconButton
                size="small"
                sx={{
                  color: 'text.primary',
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                <Language />
              </IconButton>

              {/* Notifications */}
              <IconButton
                size="small"
                sx={{
                  color: 'text.primary',
                }}
              >
                <Badge badgeContent={4} color="error">
                  <Notifications />
                </Badge>
              </IconButton>

              {/* Settings */}
              <IconButton
                size="small"
                sx={{
                  color: 'text.primary',
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                <Settings />
              </IconButton>

              {/* Profile Avatar */}
              <IconButton
                onClick={handleProfileClick}
                sx={{ p: 0.5, ml: 1 }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: 'primary.main',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                    alt={user?.name || 'User'}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                </Avatar>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Drawer */}
      <ProfileDrawer
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </>
  );
};

export default DashboardHeader;
