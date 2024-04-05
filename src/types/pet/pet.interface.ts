export interface Pet {
  id: number;
  name: string;
  type: string;
  breed?: string | null;
  birthDate: string;
  weight?: number | null;
  allergies?: string | null;
  diseases?: string | null;
  image?: string | null;
  memo?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
