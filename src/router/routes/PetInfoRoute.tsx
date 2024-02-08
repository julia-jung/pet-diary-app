import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import useSWR from 'swr';
// import axios from 'axios';

import { Stack, Card, Typography, Button, Divider } from '@mui/material';

import { PetInfoForm } from '@/components/pet-info';
import { Pet } from '@/types/pet';
import { useAppDispatch, useAppSelector, useFetch } from '@/hooks';
import { changePet, selectPetId } from '@/store/slices';

export default function PetInfoRoute() {
  const petId = useAppSelector(selectPetId);
  const dispatch = useAppDispatch();
  console.log('Selected Pet ID: ', petId);

  let { id } = useParams();

  const { data: pet, error, isFetching } = useFetch(`/api/pets/${id}`);

  useEffect(() => {
    console.log(pet);
  }, [pet]);
  // const {
  //   data: pet,
  //   error,
  //   isLoading: isFetching,
  // } = useSWR(`/api/pets/${id}`, async (url) => {
  //   console.log('##### fetching data using SWR for: ', url);
  //   const res = await axios.get(url);
  //   return res.data;
  // });

  const handlePetInfoSave = (pet: Pet) => {
    console.log(pet);
    dispatch(changePet(pet));
  };

  const handleClickDelete = () => {
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

        <PetInfoForm key={pet?.id} pet={{ ...pet }} onSave={handlePetInfoSave} />
      </Card>
    </Stack>
  );
}
