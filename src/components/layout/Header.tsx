import { matchPath, useLocation, useNavigate } from 'react-router-dom';

import { AppBar, Box, Toolbar, Typography, Stack, IconButton, Button, Badge } from '@mui/material';
import { Menu as MenuIcon, Add as AddIcon, Notifications as NotificationsIcon } from '@mui/icons-material';

import { PetsMenu } from '../pet';

import { routeChildren } from '@/routes';
import { NAV_WIDTH } from '@/types';

interface HeaderProps {
  onOpenNav: () => void;
}

export default function Header({ onOpenNav }: HeaderProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentRoute = routeChildren.find((route) => matchPath(route.path as string, pathname));

  const handleClickCreate = () => {
    navigate('/pet-info/new');
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${NAV_WIDTH}px)` },
        ml: { sm: `${NAV_WIDTH}px` },
        boxShadow: 0,
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

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            {currentRoute?.title}
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            sx={{ height: 1 }}
            onClick={handleClickCreate}
          >
            Add a Pet
          </Button>

          <PetsMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
