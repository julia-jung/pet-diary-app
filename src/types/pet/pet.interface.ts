export interface Pet {
  id: number;
  name: string;
  type: string;
  breed?: string;
  birthDate?: Date;
  weight?: number;
  allergies?: string;
  diseases?: string;
  image?: string;
  memo?: string;
}

export interface PetInfoFormProps {
  pet: Pet;
  onSave: (pet: Pet) => void;
}
