import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import dayjs from 'dayjs';

import {
  MenuItem,
  List,
  ListSubheader,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';

import { useAppDispatch, useAppSelector, useFetch } from '@/hooks';
import { changePet, initPet, selectedPet } from '@/store';
import { Pet } from '@/types';
import { petTypeLabel } from '@/utils';

interface PetListProps {
  // pets: Pet[];
  onSelect: (id: number) => void;
}

export default function PetList({ onSelect }: PetListProps) {
  const dispatch = useAppDispatch();
  const { data: pets, error, isFetching } = useFetch('/api/pets');

  useEffect(() => {
    console.log(pets);
    if (pets && pets.length > 0) {
      dispatch(initPet(pets));
    }
  }, [dispatch, pets]);

  const cats = pets?.filter((pet: Pet) => pet.type === 'cat') ?? [];
  const dogs = pets?.filter((pet: Pet) => pet.type === 'dog') ?? [];

  if (isFetching) {
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
      {cats.length > 0 && (
        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ typography: 'overline' }}>
              고양이
            </ListSubheader>
          }
        >
          {cats.map((pet: Pet) => (
            // <NotificationItem key={notification.id} notification={notification} />
            <PetListItem key={pet.id} pet={pet} onSelect={() => onSelect(pet.id)} />
          ))}
        </List>
      )}
      {cats.length > 0 && dogs.length > 0 && <Divider />}
      {dogs.length > 0 && (
        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ typography: 'overline', borderBottom: '1px dashed gray' }}>
              강아지
            </ListSubheader>
          }
        >
          {dogs.map((pet: Pet) => (
            <PetListItem key={pet.id} pet={pet} onSelect={() => onSelect(pet.id)} />
          ))}
        </List>
      )}
    </>
  );
}

interface PetListItemProps {
  pet: Pet;
  onSelect: () => void;
}

function PetListItem({ pet, onSelect }: PetListItemProps) {
  return (
    <MenuItem onClick={onSelect} sx={{ pt: 2 }}>
      <ListItemAvatar sx={{ mr: 1 }}>
        <Avatar src={`/assets/images/${pet.image ?? pet.type + '.jpg'}`} alt="petTypeAvatar" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="subtitle2">
            {pet.name}
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
              &nbsp; {pet.breed ?? ''} {petTypeLabel(pet.type)}
            </Typography>
          </Typography>
        }
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <AccessTimeIcon sx={{ fontSize: 13, mr: 0.5 }} />
            Last updated at: {dayjs(pet.updatedAt).format('YYYY-MM-DD')}
          </Typography>
        }
      />
    </MenuItem>
  );
}
