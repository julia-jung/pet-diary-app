import { useState, useCallback } from 'react';

import { Box, TextField, MenuItem, InputAdornment, Button, Stack } from '@mui/material';
import { Pet, PetInfoFormProps } from '@/types/pet';
import { ImageButton } from '../common';

export default function PetInfoForm({ pet, onSave }: PetInfoFormProps) {
  const [petInfo, setPetInfo] = useState<Pet>(
    pet ?? {
      id: 0,
      name: '',
      type: '',
    },
  );

  const imageUrl = petInfo.image ? `/assets/images/${petInfo.image}` : undefined;

  const handleImageChange = useCallback((image?: string) => {
    setPetInfo({ ...petInfo, image });
    onSave({ ...petInfo, image });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickSave = () => {
    // validate form
    onSave(petInfo);
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
      {/* {petInfo.id === 0 && <TextField id="pet-name" label="Name" value={petInfo.name} variant="standard" />} */}
      <TextField
        id="pet-type"
        label="Type"
        value={petInfo.type}
        onChange={(e) => setPetInfo({ ...petInfo, type: e.target.value })}
        select
        required
        variant="standard"
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
        label="Breed"
        value={petInfo.breed}
        onChange={(e) => setPetInfo({ ...petInfo, breed: e.target.value })}
        variant="standard"
      />

      {/* change this to date picker */}
      <TextField
        id="pet-birthDate"
        label="BirthDate"
        value={petInfo.birthDate}
        onChange={(e) => setPetInfo({ ...petInfo, birthDate: new Date() })}
        variant="standard"
        margin="normal"
      />

      <TextField
        id="pet-weight"
        label="weight"
        value={petInfo.weight}
        onChange={(e) => setPetInfo({ ...petInfo, weight: Number(e.target.value) })}
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
        margin="normal"
        // error
        helperText=" "
      />

      <TextField
        id="pet-breed"
        label="Allergy"
        value={petInfo.allergies}
        onChange={(e) => setPetInfo({ ...petInfo, allergies: e.target.value })}
        variant="standard"
      />
      <TextField
        id="pet-breed"
        label="Disease"
        value={petInfo.diseases}
        onChange={(e) => setPetInfo({ ...petInfo, diseases: e.target.value })}
        variant="standard"
      />

      <TextField
        id="pet-memo"
        label="Memo"
        value={petInfo.memo}
        onChange={(e) => setPetInfo({ ...petInfo, memo: e.target.value })}
        rows={4}
        multiline
        variant="standard"
        sx={{ gridColumn: [null, null, 'span 2'] }}
      />

      <Button variant="contained" onClick={handleClickSave} sx={{ gridColumn: [null, null, 'span 2'] }}>
        저장
      </Button>
    </Box>
  );
}
