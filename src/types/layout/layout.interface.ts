import { Pet } from '../pet';

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

export interface PetsMenuProps {
  pets: Pet[];
  selectedId: number;
  onSelect: (id: number) => void;
}
