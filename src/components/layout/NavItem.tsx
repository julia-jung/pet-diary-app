import { useLocation, Link as RouterLink } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText, Icon } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { NavItemProps } from '@/types/layout';

export default function NavItem({ icon, text, path }: NavItemProps) {
  const { pathname } = useLocation();

  const isActive = path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      to={path}
      selected={path === pathname}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(isActive && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}
