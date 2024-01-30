export interface Pet {
  id: number;
  name: string;
  type: string;
  breed?: string;
  birthDate?: Date;
  image?: string;
  memo?: string;
}
