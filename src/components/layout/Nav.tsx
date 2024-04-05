import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Divider, Toolbar, Drawer, Button } from '@mui/material';
import { Pets as PetsIcon } from '@mui/icons-material';

import NavList from './NavList';
import { PetProfile } from '../pet';

import { NAV_WIDTH } from '@/types';
interface NavProps {
  openNav: boolean;
  onCloseNav: () => void;
}

export default function Nav({ openNav, onCloseNav }: NavProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box component="nav" sx={{ width: { sm: NAV_WIDTH }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      <Drawer
        variant="temporary"
        open={openNav}
        onClose={onCloseNav}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: NAV_WIDTH },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: NAV_WIDTH },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

const drawerContent = (
  <>
    <Toolbar>
      <Button
        component={RouterLink}
        to="/"
        startIcon={<PetsIcon />}
        size="large"
        sx={{
          fontSize: 18,
          fontWeight: 800,
        }}
      >
        My Pet Diary
      </Button>
    </Toolbar>
    <Divider />

    <PetProfile />

    <NavList />
  </>
);
