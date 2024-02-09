import { useContext, createContext } from 'react';

import { SnackbarOptions } from '@/types/common';

type SnackbarContextType = {
  setSnackbar: React.Dispatch<React.SetStateAction<SnackbarOptions>>;
};

export const SnackbarContext = createContext<SnackbarContextType | null>(null);

export const useSnackbar = () => {
  const context = useContext<SnackbarContextType | null>(SnackbarContext);
  if (!context) throw new Error('useSnackbar must be used within a provider');

  return context;
};
