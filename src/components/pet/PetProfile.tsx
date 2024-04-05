import { useState, useEffect } from 'react';
import { Link as RouterLink, Navigate } from 'react-router-dom';

import {
  Box,
  Avatar,
  Typography,
  ButtonGroup,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { useAppDispatch, useAppSelector, useFetch } from '@/hooks';
import { changePet, initPet, selectedPet } from '@/store';
import { Pet } from '@/types';

export default function PetProfile() {
  const pet = useAppSelector(selectedPet);
  // const dispatch = useAppDispatch();

  // const handlePetChange = (id: number) => {
  //   const pet = pets.find((p: Pet) => p.id === id);
  //   if (pet) {
  //     dispatch(changePet(pet));
  //   }
  // };

  // if (isFetching) {
  //   return (
  //     <LoadingButton
  //       loading
  //       loadingIndicator="Loading…"
  //       sx={{ m: 2, p: 2, bgcolor: (theme) => alpha(theme.palette.primary.light, 0.3) }}
  //     >
  //       Fetch data
  //     </LoadingButton>
  //   );
  // }

  // if (error) {
  //   console.log(error);
  //   return <Navigate to="/error" state={error} />;
  // }

  if (!pet) {
    return <>You have no pet registered..!</>;
  }

  return (
    <>
      {pet && (
        <ButtonGroup
          variant="contained"
          color="inherit"
          aria-label="split button"
          sx={{
            my: 2,
            mx: 'auto',
          }}
        >
          <Button
            component={RouterLink}
            to={`/pet-info/${pet.id}`}
            sx={{ p: 2, bgcolor: (theme) => alpha(theme.palette.primary.light, 0.3) }}
          >
            <Avatar src={`/assets/images/${pet.image ?? pet.type + '.jpg'}`} alt="petTypeAvatar" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2">{pet.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {pet.breed ?? ''} {pet.type}
              </Typography>
            </Box>
          </Button>
          {/* {pets && pets.length > 1 && <PetsMenu pets={pets} selectedId={pet.id} onSelect={handlePetChange} />} */}
        </ButtonGroup>
      )}
    </>
  );
}

interface PetsMenuProps {
  pets: Pet[];
  selectedId: number;
  onSelect: (id: number) => void;
}

function PetsMenu({ pets, selectedId, onSelect }: PetsMenuProps) {
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
              <Avatar src={`/assets/images/${pet.image ?? pet.type + '.jpg'}`} alt="petTypeAvatar" />
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
