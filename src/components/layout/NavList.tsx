import { useLocation, Link as RouterLink } from 'react-router-dom';
import { List, ListItemButton, ListItemIcon, ListItemText, Icon } from '@mui/material';
import {
  BarChart as BarChartIcon,
  Vaccines as VaccinesIcon,
  SetMeal as SetMealIcon,
  LocalPharmacy as LocalPharmacyIcon,
  Create as CreateIcon,
} from '@mui/icons-material';

interface NavItem {
  path: string;
  text: string;
  icon: React.ReactElement;
}

interface NavItemProps extends NavItem {
  onSelect: () => void;
}

interface NavListProps {
  onSelect: () => void;
}

export default function NavList({ onSelect }: NavListProps) {
  const navItems: NavItem[] = [
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

  return (
    <List>
      {navItems.map((item) => (
        <NavItem key={item.path} {...item} onSelect={onSelect} />
      ))}
    </List>
  );
}

function NavItem({ icon, text, path, onSelect }: NavItemProps) {
  const { pathname } = useLocation();
  const isActive = path === pathname;

  return (
    <ListItemButton component={RouterLink} to={path} selected={isActive} onClick={onSelect}>
      <ListItemIcon>
        <Icon color={isActive ? 'primary' : undefined}>{icon}</Icon>
      </ListItemIcon>
      <ListItemText
        primary={text}
        primaryTypographyProps={{
          fontSize: 17,
          fontWeight: 500,
          color: isActive ? 'primary' : undefined,
        }}
      />
    </ListItemButton>
  );
}
