// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Stack, Card, Typography, Button, Divider } from '@mui/material';

import { PetInfoForm } from '@/components/pet-info';
import { Pet } from '@/types/pet';
import { useAppDispatch, useAppSelector, useFetch, useMutate } from '@/hooks';
import { changePet, selectPetId } from '@/store';

export default function PetInfoRoute() {
  // const petId = useAppSelector(selectPetId);
  const dispatch = useAppDispatch();
  // console.log('Selected Pet ID: ', petId);

  let { id } = useParams();

  const { data: pet, error, isFetching, fetchData } = useFetch(`/api/pets/${id}`);
  const { mutateData, isSaving } = useMutate(`/api/pets/${id}`);

  const handlePetInfoSave = (pet: Pet) => {
    console.log(pet);
    // TODO: call update pet
    // TODO: either fetch pet list again or save pet list in petSlice and update for changed one
    // dispatch(changePet(pet));
  };

  const handleClickDelete = () => {
    // TODO: implement
    // 1. show alert
    // 2. if pick yes, call delete API
    // 3. then show success/error message
    // 4. navigate into
  };

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
      <Card
        sx={{
          p: 5,
          width: 1,
          maxWidth: 800,
        }}
      >
        <Stack direction="row">
          <Typography variant="h4" flexGrow="1">
            {pet?.name ?? '이름을 입력해주세요'}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="secondary">
              + 신규 추가
            </Button>

            <Button color="error" variant="outlined" onClick={handleClickDelete}>
              삭제
            </Button>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <PetInfoForm key={pet?.id} pet={{ ...pet }} isSaving={isSaving} onSave={handlePetInfoSave} />
      </Card>
    </Stack>
  );
}
