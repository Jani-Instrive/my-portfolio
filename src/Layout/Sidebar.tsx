import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Collapse,
  useTheme,
  alpha,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  ShoppingCart as EcommerceIcon,
  AccountBalance as BankingIcon,
  BookOnline as BookingIcon,
  Folder as FileIcon,
  School as CourseIcon,
  People as UserIcon,
  Inventory as ProductIcon,
  Receipt as OrderIcon,
  Description as InvoiceIcon,
  Article as BlogIcon,
  Work as JobIcon,
  CalendarToday as CalendarIcon,
  ViewKanban as KanbanIcon,
  Security as PermissionIcon,
  ExpandLess,
  ExpandMore,
  ChevronRight,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 'overview',
    label: 'OVERVIEW',
    icon: <></>,
    children: [
      { id: 'app', label: 'App', icon: <DashboardIcon />, path: '/admin' },
      { id: 'ecommerce', label: 'Ecommerce', icon: <EcommerceIcon />, path: '/admin/ecommerce' },
      { id: 'analytics', label: 'Analytics', icon: <AnalyticsIcon />, path: '/admin/analytics' },
      { id: 'banking', label: 'Banking', icon: <BankingIcon />, path: '/admin/banking' },
      { id: 'booking', label: 'Booking', icon: <BookingIcon />, path: '/admin/booking' },
      { id: 'file', label: 'File', icon: <FileIcon />, path: '/admin/file' },
      { id: 'course', label: 'Course', icon: <CourseIcon />, path: '/admin/course' },
    ],
  },
  {
    id: 'management',
    label: 'MANAGEMENT',
    icon: <></>,
    children: [
      {
        id: 'user',
        label: 'User',
        icon: <UserIcon />,
        children: [
          { id: 'profile', label: 'Profile', icon: <ChevronRight />, path: '/admin/profile' },
          { id: 'cards', label: 'Cards', icon: <ChevronRight />, path: '/admin/user/cards' },
          { id: 'list', label: 'List', icon: <ChevronRight />, path: '/admin/user/list' },
          { id: 'create', label: 'Create', icon: <ChevronRight />, path: '/admin/user/create' },
          { id: 'edit', label: 'Edit', icon: <ChevronRight />, path: '/admin/user/edit' },
          { id: 'account', label: 'Account', icon: <ChevronRight />, path: '/admin/user/account' },
        ],
      },
      { id: 'product', label: 'Product', icon: <ProductIcon />, path: '/admin/product' },
      { id: 'order', label: 'Order', icon: <OrderIcon />, path: '/admin/order' },
      { id: 'invoice', label: 'Invoice', icon: <InvoiceIcon />, path: '/admin/invoice' },
      { id: 'blog', label: 'Blog', icon: <BlogIcon />, path: '/admin/blog' },
      { id: 'job', label: 'Job', icon: <JobIcon />, path: '/admin/job' },
    ],
  },
  {
    id: 'misc',
    label: 'MISC',
    icon: <></>,
    children: [
      { id: 'calendar', label: 'Calendar', icon: <CalendarIcon />, path: '/admin/calendar' },
      { id: 'kanban', label: 'Kanban', icon: <KanbanIcon />, path: '/admin/kanban' },
      { id: 'permission', label: 'Permission', icon: <PermissionIcon />, path: '/admin/permission' },
    ],
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  width: number;
  collapsedWidth: number;
  collapsed: boolean;
  variant?: 'permanent' | 'persistent' | 'temporary';
}

const Sidebar: React.FC<SidebarProps> = ({ 
  open, 
  onClose, 
  width, 
  collapsedWidth, 
  collapsed, 
  variant = 'persistent' 
}) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState<string[]>(['overview', 'management', 'misc']);
  const [selectedDropdown, setSelectedDropdown] = useState<string>('');

  const handleItemClick = (item: MenuItem) => {
    if (collapsed && item.children) {
      // In collapsed mode, don't expand - handle via dropdown
      return;
    }
    
    if (item.children) {
      setExpandedItems(prev =>
        prev.includes(item.id)
          ? prev.filter(id => id !== item.id)
          : [...prev, item.id]
      );
    } else if (item.path) {
      navigate(item.path);
      if (variant === 'temporary') {
        onClose();
      }
    }
  };

  const handleDropdownChange = (_parentId: string, childPath: string) => {
    if (childPath) {
      navigate(childPath);
      setSelectedDropdown('');
    }
  };

  const isSelected = (path: string) => location.pathname === path;

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.id);
    const selected = item.path ? isSelected(item.path) : false;

    if (level === 0 && item.children) {
      // Section header
      return (
        <Box key={item.id}>
          {!collapsed && (
            <Typography
              variant="caption"
              sx={{
                px: 3,
                py: 1,
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.5px',
                display: 'block',
              }}
            >
              {item.label}
            </Typography>
          )}
          {item.children.map(child => renderMenuItem(child, level + 1))}
        </Box>
      );
    }

    // For collapsed mode with children, show dropdown on click
    if (collapsed && item.children) {
      return (
        <Box key={item.id}>
          <Tooltip title={item.label} placement="right" arrow>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => setSelectedDropdown(selectedDropdown === item.id ? '' : item.id)}
                sx={{
                  minHeight: 44,
                  px: 1,
                  py: 1,
                  mx: 1,
                  borderRadius: '8px',
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.grey[500], 0.08), // Neutral gray hover
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    color: 'text.secondary',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
          
          {/* Dropdown for children in collapsed mode */}
          {selectedDropdown === item.id && (
            <Box
              sx={{
                position: 'absolute',
                left: collapsedWidth,
                top: 0,
                zIndex: 1300,
                backgroundColor: 'background.paper',
                borderRadius: 1,
                boxShadow: theme.shadows[8],
                minWidth: 200,
                py: 1,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <FormControl fullWidth>
                <Select
                  value=""
                  displayEmpty
                  onChange={(e) => handleDropdownChange(item.id, e.target.value)}
                  sx={{
                    '& .MuiSelect-select': {
                      py: 1,
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    {item.label}
                  </MenuItem>
                  {item.children?.map(child => (
                    <MenuItem key={child.id} value={child.path || ''}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {child.icon}
                        {child.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}
        </Box>
      );
    }

    // Regular menu item (expanded mode or item without children)
    const menuItemContent = (
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          onClick={() => handleItemClick(item)}
          selected={selected}
          sx={{
            minHeight: 44,
            px: collapsed ? 0 : 3,
            py: 0,
            ml: level > 1 && !collapsed ? 2 : 0,
            borderRadius: level > 1 ? 0 : '8px',
            mx: level > 1 ? 2 : 1,
            mt: 0,
            position: 'relative',
            justifyContent: collapsed ? 'center' : 'flex-start',
            '&.Mui-selected': {
              backgroundColor: alpha(theme.palette.primary.main, 0.12),
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.16),
              },
              '& .MuiListItemIcon-root': {
                color: theme.palette.primary.main,
              },
            },
            '&:hover': {
              backgroundColor: collapsed 
                ? alpha(theme.palette.grey[500], 0.08) // Neutral gray hover for collapsed
                : alpha(theme.palette.grey[500], 0.08), // Neutral gray hover for expanded
            },
            // Connection lines for nested items (only in expanded mode)
            ...(level > 1 && !collapsed && {
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 24,
                top: 0,
                bottom: 0,
                width: '1px',
                backgroundColor: theme.palette.divider,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 24,
                top: '50%',
                width: '12px',
                height: '1px',
                backgroundColor: theme.palette.divider,
              },
            }),
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: collapsed ? 0 : 40,
              color: selected ? theme.palette.primary.main : 'text.secondary',
              ml: level > 1 && !collapsed ? 2 : 0,
              justifyContent: collapsed ? 'center' : 'flex-start',
            }}
          >
            {item.icon}
          </ListItemIcon>
          {!collapsed && (
            <>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: selected ? 600 : 400,
                }}
              />
              {item.children && (
                <Box sx={{ color: 'text.secondary' }}>
                  {isExpanded ? <ExpandLess /> : <ExpandMore />}
                </Box>
              )}
            </>
          )}
        </ListItemButton>
      </ListItem>
    );

    return (
      <Box key={item.id} >
        {collapsed && !item.children ? (
          <Tooltip title={item.label} placement="right" arrow>
            {menuItemContent}
          </Tooltip>
        ) : (
          menuItemContent
        )}
        {item.children && !collapsed && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map(child => renderMenuItem(child, level + 1))}
            </List>
          </Collapse>
        )}
      </Box>
    );
  };

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column',  }}>
      {/* Logo */}
      <Box
        sx={{
          p: collapsed ? 3 : 3,
          display: 'flex',
          justifyContent: collapsed ? 'center' : 'flex-start',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00C851 0%, #00A041 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: collapsed ? 0 : 2,
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              M
            </Typography>
          </Box>
          {!collapsed && (
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Dashboard
            </Typography>
          )}
        </Box>
      </Box>

      {/* Menu Items */}
      <Box sx={{ 
        flexGrow: 1, 
        overflow: 'auto', 
        py: 0,
        position: 'relative',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
      }}>
        <List>
          {menuItems.map(item => renderMenuItem(item))}
        </List>
      </Box>
    </Box>
  );

  const currentWidth = collapsed ? collapsedWidth : width;

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      sx={{
        width: currentWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: currentWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
