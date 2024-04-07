import { Link as RouterLink } from 'react-router-dom';
import { Box, Divider, Toolbar, Drawer, Button } from '@mui/material';
import { Pets as PetsIcon } from '@mui/icons-material';

import NavList from './NavList';
import { PetProfile } from '../pet';

import { NAV_WIDTH } from '@/types';
interface NavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Nav({ isOpen, onClose }: NavProps) {
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

      <NavList onSelect={onClose} />
    </>
  );

  return (
    <Box component="nav" sx={{ width: { sm: NAV_WIDTH }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={onClose}
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
