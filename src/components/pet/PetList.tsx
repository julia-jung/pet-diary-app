import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { List, ListItem, ListSubheader, Divider } from '@mui/material';
import { alpha } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

import PetListItem from './PetListItem';

import { useAppDispatch, useAppSelector, useFetch } from '@/hooks';
import { initPet } from '@/store';
import { Pet } from '@/types';

interface PetListProps {
  onSelect: (id: number) => void;
}

export default function PetList({ onSelect }: PetListProps) {
  const dispatch = useAppDispatch();
  const pets = useAppSelector((state) => state.pets.pets);
  const { data, error, isFetching } = useFetch('/api/pets');

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(initPet(data));
    }
  }, [dispatch, data]);

  const cats = pets?.filter((pet: Pet) => pet.type === 'cat') ?? [];
  const dogs = pets?.filter((pet: Pet) => pet.type === 'dog') ?? [];

  if (isFetching) {
    return (
      <ListItem>
        <LoadingButton
          loading
          loadingIndicator="Loading…"
          sx={{ m: 2, p: 2, bgcolor: (theme) => alpha(theme.palette.primary.light, 0.3) }}
        >
          펫 정보 불러오는 중...
        </LoadingButton>
      </ListItem>
    );
  }

  if (error) {
    console.log(error);
    return <ListItem>Failed to fetch pet list..!</ListItem>;
  } else if (!pets?.length) {
    return <ListItem>You have no pet registered..!</ListItem>;
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
