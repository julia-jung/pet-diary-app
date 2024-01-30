import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet } from '@/types/pet';
import { RootState } from '@/types/common';

const initialState: Pet = {
  id: 0,
  name: '',
  type: '',
};

const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    initPet: (state, { payload: pets }: PayloadAction<Pet[]>) => {
      const storedId = localStorage.getItem('pet_id');
      let pet;
      if (storedId) {
        pet = pets.find((p) => p.id === +storedId);
      }
      state = Object.assign(state, { ...(pet ?? pets[0]) });
      localStorage.setItem('pet_id', String(state.id));
    },
    changePet: (state, action: PayloadAction<Pet>) => {
      state = Object.assign(state, { ...action.payload });
      localStorage.setItem('pet_id', String(state.id));
    },
    resetPet: (state) => {
      state = Object.assign(state, { ...initialState });
      localStorage.removeItem('pet_id');
    },
  },
});

export const selectPetId = (state: RootState) => state.pet.id;
export const { initPet, changePet, resetPet } = petSlice.actions;
export default petSlice.reducer;
