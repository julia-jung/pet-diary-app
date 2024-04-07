import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header, Nav } from '@/components';
import { NAV_WIDTH } from '@/types';

export default function RootRoute() {
  const [openNav, setOpenNav] = useState(false);
  // TODO: change nav state into context

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />
      <Box sx={{ display: 'flex' }}>
        <Nav isOpen={openNav} onClose={() => setOpenNav(false)} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${NAV_WIDTH}px)` } }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
