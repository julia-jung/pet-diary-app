import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import { useTheme, SxProps, Theme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { useResponsive } from '@/hooks';
import { bgBlur } from '@/theme/options';

// import Iconify from 'src/components/iconify';

// import Searchbar from './common/searchbar';
import { HEADER, HeaderProps, NAV } from '@/types/layout';
// import AccountPopover from './common/account-popover';
// import LanguagePopover from './common/language-popover';
// import NotificationsPopover from './common/notifications-popover';

export default function Header({ onOpenNav }: HeaderProps) {
  const theme = useTheme();
  const lgUp = useResponsive('up', 'lg');

  return (
    <AppBar
      sx={
        {
          boxShadow: 'none',
          height: HEADER.H_MOBILE,
          zIndex: theme.zIndex.appBar + 1,
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          transition: theme.transitions.create(['height'], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(lgUp && {
            width: `calc(100% - ${NAV.WIDTH + 1}px)`,
            height: HEADER.H_DESKTOP,
          }),
        } as SxProps<Theme>
      }
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {!lgUp && (
          <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
            <MenuIcon />
            {/* <Iconify icon="eva:menu-2-fill" /> */}
          </IconButton>
        )}

        {/* <Searchbar /> */}

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={1}>
          {/* <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover /> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
