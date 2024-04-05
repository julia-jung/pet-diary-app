import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, Pet } from '@/types';

interface PetsSliceState {
  selectedId: number;
  pets: Pet[];
}

const initialState: PetsSliceState = {
  selectedId: 0,
  pets: [],
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    initPet: (state, { payload: pets }: PayloadAction<Pet[]>) => {
      const selectedId = Number(localStorage.getItem('pet_id') ?? pets[0].id);

      state = Object.assign(state, { pets, selectedId });
      console.log(state.pets, state.selectedId);
      localStorage.setItem('pet_id', String(state.selectedId));
    },
    changePet: (state, action: PayloadAction<number>) => {
      // state = Object.assign(state, { ...action.payload });
      state.selectedId = action.payload;
      localStorage.setItem('pet_id', String(state.selectedId));
    },
    // resetPet: (state) => {
    //   state = Object.assign(state, { ...initialState });
    //   localStorage.removeItem('pet_id');
    // },
  },
});

export const selectedPet = (state: RootState) => state.pets.pets.find((p) => p.id === state.pets.selectedId);
export const { initPet, changePet } = petsSlice.actions;
export default petsSlice.reducer;
