import { useState, useEffect } from 'react';
import {
  Box,
  Divider,
  Toolbar,
  List,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';

import { NAV, NavProps } from '@/types/layout';

export default function Nav({ openNav, onCloseNav }: NavProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    onCloseNav();
  };

  useEffect(() => {
    // fetch('/api/pets/2').then((res) => console.log(res.json()));
  }, []);

  return (
    <Box component="nav" sx={{ width: { sm: NAV.WIDTH }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={openNav}
        onTransitionEnd={() => setIsClosing(false)}
        onClose={handleDrawerClose}
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
    <Toolbar />
    <Divider />
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </>
);
