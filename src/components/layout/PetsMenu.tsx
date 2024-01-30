import { useState } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, ListItemText, Avatar, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { PetsMenuProps } from '@/types/layout';

export default function PetsMenu({ pets, selectedId, onSelect }: PetsMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (id: number) => {
    setAnchorEl(null);
    onSelect(id);
  };
  return (
    <>
      <Button
        size="small"
        sx={{ bgcolor: (theme) => alpha(theme.palette.primary.light, 0.3) }}
        onClick={handleClickMore}
      >
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {pets.map((pet) => (
          <MenuItem key={pet.id} selected={pet.id === selectedId} onClick={() => handleSelect(pet.id)}>
            <ListItemIcon>
              <Avatar src={`/assets/images/avatars/${pet.type}.jpg`} alt="petTypeAvatar" />
            </ListItemIcon>
            <ListItemText>{pet.name}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              {pet.breed ?? ''} {petTypeLabel(pet.type)}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

const petTypeLabel = (type: string): string => {
  if (type === 'cat') return '고양이';
  if (type === 'dog') return '강아지';
  return '';
};

// const petAvatar = (type: string) => {
//   const petTypeText = type.toLowerCase();
//   console.log(petTypeText);
//   const catLabels = ['cat', '고양이', '야옹이', '냥이', '냐옹이'];
//   const dogLabels = ['dog', 'puppy', '강아지', '개'];
//   let avatar = 'pet';
//   if (petTypeText.includes('cat') || petTypeText.includes('고양이')) {
//     avatar = 'cat';
//   }
//   if (petTypeText.includes('dog')) {
//     avatar = 'dog';
//   }
//   return;
// };
