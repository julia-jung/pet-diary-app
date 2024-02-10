import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { Box, TextField, MenuItem, InputAdornment, Button, Stack } from '@mui/material';
import { DateField } from '@mui/x-date-pickers';

import { Pet } from '@/types/pet';
import { ImageButton } from '../common';

interface PetInfoFormProps {
  pet?: Pet;
  onSave: (pet: Pet) => void;
  isSaving: boolean;
}

export default function PetInfoForm({ pet, onSave, isSaving }: PetInfoFormProps) {
  const [image, setImage] = useState(pet?.image);
  const imageUrl = image ? `/assets/images/${image}` : undefined;

  const [type, setType] = useState(pet?.type ?? '');
  const isTypeValid = type === 'cat' || type === 'dog';
  const [breed, setBreed] = useState(pet?.breed ?? '');
  const [birthDate, setBirthDate] = useState<Dayjs | null>(dayjs(pet?.birthDate));
  const isBirthDateValid = !!birthDate && birthDate.isBefore(dayjs());
  const [weight, setWeight] = useState(pet?.weight?.toString() ?? '');
  const isWeightValid = weight === '' || !!Number(weight);
  const [allergies, setAllergies] = useState(pet?.allergies ?? '');
  const [diseases, setDiseases] = useState(pet?.diseases ?? '');
  const [memo, setMemo] = useState(pet?.memo ?? '');

  const isValid: boolean = isTypeValid && isBirthDateValid && isWeightValid;

  const changedPet: Pet = {
    id: pet?.id ?? 0,
    name: pet?.name ?? '',
    type: type,
    breed: breed || null,
    birthDate: birthDate?.format('YYYY-MM-DD') ?? dayjs().format('YYYY-MM-DD'),
    weight: weight ? Number(weight) : null,
    allergies: allergies || null,
    diseases: diseases || null,
    image: image || null,
    memo: memo || null,
  };

  const hasChanged: boolean =
    !pet ||
    pet.type !== changedPet.type ||
    pet.breed !== changedPet.breed ||
    pet.birthDate !== changedPet.birthDate ||
    pet.weight !== changedPet.weight ||
    pet.allergies !== changedPet.allergies ||
    pet.diseases !== changedPet.diseases ||
    pet.memo !== changedPet.memo;
  const canSave: boolean = !isSaving && isValid && hasChanged;

  const handleImageChange = (image?: string) => {
    setImage(image);
    onSave({ ...changedPet, image });
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr',
        },
        gap: 4,
      }}
    >
      <Stack sx={{ gridRow: 'span 4' }}>
        <ImageButton url={imageUrl} onChange={handleImageChange} />
      </Stack>

      <TextField
        id="pet-type"
        label="타입"
        value={type}
        variant="standard"
        select
        required
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem key="cat" value="cat">
          고양이
        </MenuItem>
        <MenuItem key="dog" value="dog">
          강아지
        </MenuItem>
      </TextField>

      <TextField
        id="pet-breed"
        label="품종"
        value={breed}
        helperText="e.g. 말티즈, 러시안블루"
        variant="standard"
        onChange={(e) => setBreed(e.target.value)}
      />

      <DateField
        id="pet-birthdate"
        label="생일"
        value={birthDate}
        format="YYYY-MM-DD"
        helperText="YYYY-MM-DD"
        variant="standard"
        margin="normal"
        required
        onChange={(newValue) => setBirthDate(newValue)}
      />

      <TextField
        id="pet-weight"
        label="몸무게"
        value={weight}
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        margin="normal"
        error={!isWeightValid}
        onChange={(e) => setWeight(e.target.value)}
      />

      <TextField
        id="pet-breed"
        label="알러지"
        value={allergies}
        placeholder="알러지가 있다면 간단히 적어주세요"
        helperText="e.g. 식이 알러지(닭고기)"
        onChange={(e) => setAllergies(e.target.value)}
        variant="standard"
      />
      <TextField
        id="pet-breed"
        label="질병"
        value={diseases}
        placeholder="질병이 있다면 간단히 적어주세요"
        helperText="e.g. 치아흡수성병변"
        variant="standard"
        onChange={(e) => setDiseases(e.target.value)}
      />

      <TextField
        id="pet-memo"
        label="메모"
        value={memo}
        placeholder="추가 정보를 메모로 남겨보세요"
        rows={4}
        multiline
        variant="standard"
        onChange={(e) => setMemo(e.target.value)}
        sx={{ gridColumn: [null, null, 'span 2'] }}
      />

      <Button
        variant="contained"
        disabled={!canSave}
        onClick={() => onSave(changedPet)}
        sx={{ gridColumn: [null, null, 'span 2'] }}
      >
        저장
      </Button>
    </Box>
  );
}
