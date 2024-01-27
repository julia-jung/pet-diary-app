import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Divider, Toolbar, Drawer, Button, List } from '@mui/material';
import {
  Pets as PetsIcon,
  BarChart as BarChartIcon,
  Vaccines as VaccinesIcon,
  SetMeal as SetMealIcon,
  LocalPharmacy as LocalPharmacyIcon,
  Create as CreateIcon,
} from '@mui/icons-material';

import { NAV, NavProps, NavItemProps } from '@/types/layout';
import NavItem from './NavItem';

const navItems: NavItemProps[] = [
  {
    path: '/',
    text: 'Dashboard',
    icon: <BarChartIcon />,
  },
  {
    path: '/vet-visits',
    text: 'Vet Visits',
    icon: <VaccinesIcon />,
  },
  {
    path: '/foods',
    text: 'Foods',
    icon: <SetMealIcon />,
  },
  {
    path: '/medications',
    text: 'Medications',
    icon: <LocalPharmacyIcon />,
  },
  {
    path: '/blogs',
    text: 'Blogs',
    icon: <CreateIcon />,
  },
];

export default function Nav({ openNav, onCloseNav }: NavProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // useEffect(() => {
  //   // fetch('/api/pets/2').then((res) => console.log(res.json()));
  // }, []);

  return (
    <Box component="nav" sx={{ width: { sm: NAV.WIDTH }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      <Drawer
        variant="temporary"
        open={openNav}
        onClose={onCloseNav}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: NAV.WIDTH },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: NAV.WIDTH },
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
      <Button component={RouterLink} to="/" startIcon={<PetsIcon />}>
        My Pet Diary
      </Button>
    </Toolbar>
    <Divider />

    <List>
      {navItems.map((item) => (
        <NavItem key={item.path} {...item} />
      ))}
    </List>
  </>
);
