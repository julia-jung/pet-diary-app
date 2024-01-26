import { useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { AppBar, Box, Toolbar, Typography, IconButton, Badge, MenuItem, Menu } from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

import { routes } from '@/routes';
import { NAV, HeaderProps } from '@/types/layout';

export default function Header({ onOpenNav }: HeaderProps) {
  const { pathname } = useLocation();
  const currentRoute = routes.find((route) => matchPath(route.path as string, pathname));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${NAV.WIDTH}px)` },
        ml: { sm: `${NAV.WIDTH}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onOpenNav}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={onOpenNav} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton> */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            {currentRoute?.title}
          </Typography>
          {/* <Typography variant="overline" component="div">
              {currentRoute?.subtitle}
            </Typography> */}
        </Box>
        <div>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
