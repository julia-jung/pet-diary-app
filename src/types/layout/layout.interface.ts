export interface HeaderProps {
  onOpenNav: () => void;
}

export interface NavProps {
  openNav: boolean;
  onCloseNav: () => void;
}

export interface NavItemProps {
  path: string;
  text: string;
  icon: React.ReactElement;
}
