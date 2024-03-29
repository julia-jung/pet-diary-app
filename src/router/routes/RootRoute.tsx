import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header, Nav } from '@/components/layout';
import { NAV } from '@/types/layout';

export default function RootRoute() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />
      <Box sx={{ display: 'flex' }}>
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${NAV.WIDTH}px)` } }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
