import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Chip,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Security as SecurityIcon,
  Label as LabelIcon,
  ViewHeadline as CaptionIcon,
  Block as DisabledIcon,
} from '@mui/icons-material';

const Permission: React.FC = () => {
  const [expanded, setExpanded] = useState<string[]>(['level', 'level1a', 'level2b']);

  const handleExpandClick = (item: string) => {
    setExpanded(prev =>
      prev.includes(item)
        ? prev.filter(id => id !== item)
        : [...prev, item]
    );
  };

  const permissionItems = [
    {
      id: 'permission',
      label: 'Permission',
      icon: <SecurityIcon />,
      description: 'Only admin can see this item.',
      type: 'info',
    },
    {
      id: 'disabled',
      label: 'Disabled',
      icon: <DisabledIcon />,
      type: 'disabled',
    },
    {
      id: 'label',
      label: 'Label',
      icon: <LabelIcon />,
      badge: 'NEW',
      type: 'new',
    },
    {
      id: 'caption',
      label: 'Caption',
      icon: <CaptionIcon />,
      description: 'Quisque malesuada placerat nisl. In...',
      type: 'default',
    },
  ];

  const renderLevelItem = (level: string, label: string, children?: string[]) => (
    <Box key={level}>
      <ListItem
        onClick={() => handleExpandClick(level)}
        sx={{
          pl: level.includes('2') ? 4 : level.includes('1') ? 2 : 0,
          borderLeft: level.includes('2') || level.includes('1') ? '1px solid' : 'none',
          borderColor: 'divider',
          position: 'relative',
          cursor: children ? 'pointer' : 'default',
          '&::before': level.includes('2') ? {
            content: '""',
            position: 'absolute',
            left: 16,
            top: '50%',
            width: '12px',
            height: '1px',
            backgroundColor: 'divider',
          } : {},
          '&:hover': children ? {
            backgroundColor: 'action.hover',
          } : {},
        }}
      >
        <ListItemText primary={label} />
        {children && (
          <IconButton size="small">
            {expanded.includes(level) ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        )}
      </ListItem>
      {children && (
        <Collapse in={expanded.includes(level)} timeout="auto" unmountOnExit>
          {children.map(child => renderLevelItem(child, 
            child === 'level2a' ? 'Level 2a' :
            child === 'level2b' ? 'Level 2b' :
            child === 'level3a' ? 'Level 3a' :
            child === 'level3b' ? 'Level 3b' :
            child === 'level1b' ? 'Level 1b' : child,
            child === 'level2b' ? ['level3a', 'level3b'] : undefined
          ))}
        </Collapse>
      )}
    </Box>
  );

  return (
    <Box>
      {/* Breadcrumb */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Dashboard • Permission
      </Typography>

      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Permission
      </Typography>

      <Card>
        <CardContent sx={{ p: 0 }}>
          {/* Permission Items */}
          <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" gutterBottom>
              MISC
            </Typography>
            
            {permissionItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  py: 2,
                  pl: 2,
                  borderRadius: 1,
                  mb: 1,
                  opacity: item.type === 'disabled' ? 0.5 : 1,
                  bgcolor: item.type === 'info' ? 'primary.50' : 'transparent',
                }}
              >
                <Box sx={{ mr: 2, color: 'text.secondary' }}>
                  {item.icon}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body1">{item.label}</Typography>
                    {item.badge && (
                      <Chip 
                        label={item.badge}
                        size="small"
                        sx={{
                          bgcolor: '#E1F5FE',
                          color: '#0277BD',
                          fontWeight: 'bold',
                          fontSize: '0.75rem',
                        }}
                      />
                    )}
                  </Box>
                  {item.description && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      {item.description}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Level Structure */}
          <List sx={{ p: 0 }}>
            {renderLevelItem('level', 'Level', ['level1a', 'level1b'])}
            <Collapse in={expanded.includes('level')} timeout="auto" unmountOnExit>
              {renderLevelItem('level1a', 'Level 1a', ['level2a', 'level2b'])}
              <Collapse in={expanded.includes('level1a')} timeout="auto" unmountOnExit>
                {renderLevelItem('level2a', 'Level 2a')}
                {renderLevelItem('level2b', 'Level 2b', ['level3a', 'level3b'])}
                <Collapse in={expanded.includes('level2b')} timeout="auto" unmountOnExit>
                  {renderLevelItem('level3a', 'Level 3a')}
                  {renderLevelItem('level3b', 'Level 3b')}
                </Collapse>
              </Collapse>
              {renderLevelItem('level1b', 'Level 1b')}
            </Collapse>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Permission;
