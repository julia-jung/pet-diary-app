import { useEffect } from 'react';
import { Link as RouterLink, Navigate } from 'react-router-dom';

import { Box, Avatar, Typography, ButtonGroup, Button } from '@mui/material';
import { alpha } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

import PetsMenu from './PetsMenu';
import { useApi, useAppDispatch, useAppSelector } from '@/hooks';
import { Pet } from '@/types/pet';
import { changePet, initPet } from '@/store/slices';

export default function PetProfile() {
  const pet = useAppSelector((state) => state.pet);
  const { data: pets, error, isLoading, fetchData } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchData('/api/pets');
  }, [fetchData]);

  useEffect(() => {
    if (pets && pets.length > 0) {
      dispatch(initPet(pets));
    }
  }, [dispatch, pets]);

  const handlePetChange = (id: number) => {
    const pet = pets.find((p: Pet) => p.id === id);
    if (pet) {
      dispatch(changePet(pet));
    }
  };

  if (isLoading) {
    return (
      <LoadingButton
        loading
        loadingIndicator="Loading…"
        sx={{ m: 2, p: 2, bgcolor: (theme) => alpha(theme.palette.primary.light, 0.3) }}
      >
        Fetch data
      </LoadingButton>
    );
  }

  if (error) {
    console.log(error);
    return <Navigate to="/error" state={error} />;
  }

  return (
    <>
      {pet.id > 0 && (
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
            <Avatar src={`/assets/images/avatars/${pet.type}.jpg`} alt="petTypeAvatar" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2">{pet.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {pet.breed ?? ''} {pet.type}
              </Typography>
            </Box>
          </Button>
          {pets && pets.length > 1 && <PetsMenu pets={pets} selectedId={pet.id} onSelect={handlePetChange} />}
        </ButtonGroup>
      )}
    </>
  );
}
