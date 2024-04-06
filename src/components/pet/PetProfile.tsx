import { Link as RouterLink } from 'react-router-dom';

import { Box, Avatar, Typography, ButtonGroup, Button } from '@mui/material';
import { alpha } from '@mui/material/styles';

import { useAppSelector } from '@/hooks';
import { selectedPet } from '@/store';

export default function PetProfile() {
  const pet = useAppSelector(selectedPet);

  if (!pet) {
    return <>You have no pet registered..!</>;
  }

  return (
    <>
      {pet && (
        // <ButtonGroup
        //   variant="contained"
        //   color="secondary"
        //   aria-label="split button"
        //   sx={{
        //     my: 2,
        //     width: '100%',
        //     mx: 'auto',
        //   }}
        // >
        <Button
          component={RouterLink}
          to={`/pet-info/${pet.id}`}
          sx={{ p: 2, m: 2, bgcolor: (theme) => theme.palette.primary.light }}
        >
          <Avatar src={`/assets/images/${pet.image ?? pet.type + '.jpg'}`} alt="petTypeAvatar" />

          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2">{pet.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {pet.breed ?? ''} {pet.type}
            </Typography>
          </Box>
        </Button>
        // {/* {pets && pets.length > 1 && <PetsMenu pets={pets} selectedId={pet.id} onSelect={handlePetChange} />} */}
        // </ButtonGroup>
      )}
    </>
  );
}

// interface PetsMenuProps {
//   pets: Pet[];
//   selectedId: number;
//   onSelect: (id: number) => void;
// }

// function PetsMenu({ pets, selectedId, onSelect }: PetsMenuProps) {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const openMenu = Boolean(anchorEl);

//   const handleClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleSelect = (id: number) => {
//     setAnchorEl(null);
//     onSelect(id);
//   };
//   return (
//     <>
//       <Button
//         size="small"
//         sx={{ bgcolor: (theme) => alpha(theme.palette.primary.light, 0.3) }}
//         onClick={handleClickMore}
//       >
//         <ExpandMoreIcon />
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={openMenu}
//         onClose={() => setAnchorEl(null)}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//       >
//         {pets.map((pet) => (
//           <MenuItem key={pet.id} selected={pet.id === selectedId} onClick={() => handleSelect(pet.id)}>
//             <ListItemIcon>
//               <Avatar src={`/assets/images/${pet.image ?? pet.type + '.jpg'}`} alt="petTypeAvatar" />
//             </ListItemIcon>
//             <ListItemText>{pet.name}</ListItemText>
//             <Typography variant="body2" color="text.secondary">
//               {pet.breed ?? ''} {petTypeLabel(pet.type)}
//             </Typography>
//           </MenuItem>
//         ))}
//       </Menu>
//     </>
//   );
// }

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
