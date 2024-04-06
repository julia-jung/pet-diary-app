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
      localStorage.setItem('pet_id', String(state.selectedId));
    },
    changePet: (state, { payload: id }: PayloadAction<number>) => {
      state = Object.assign(state, { ...state, selectedId: id });
      localStorage.setItem('pet_id', String(state.selectedId));
    },
    updatePet: (state, { payload: pet }: PayloadAction<Pet>) => {
      const pets = state.pets;
      const targetPetIndex = pets.findIndex((p) => p.id === pet.id);
      if (targetPetIndex > 0) {
        pets[targetPetIndex] = pet;
        state = Object.assign(state, { ...state, pets });
      }
    },
    // resetPet: (state) => {
    //   state = Object.assign(state, { ...initialState });
    //   localStorage.removeItem('pet_id');
    // },
  },
});

export const selectedPet = (state: RootState) => state.pets.pets.find((p) => p.id === state.pets.selectedId);
export const { initPet, changePet, updatePet } = petsSlice.actions;
export default petsSlice.reducer;
