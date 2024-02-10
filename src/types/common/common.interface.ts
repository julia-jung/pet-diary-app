export interface Error {
  status?: number;
  statusText?: string;
  message: string;
}

export interface ComponentProps {
  children: React.ReactNode;
}

export interface SnackbarOptions {
  message: string;
  type?: 'info' | 'success' | 'error';
  petsistent?: boolean;
}
