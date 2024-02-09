import { useState } from 'react';

import { Snackbar, Alert } from '@mui/material';

import { SnackbarContext } from '@/hooks';
import type { ComponentProps, SnackbarOptions } from '@/types/common';

export default function SnackbarProvider({ children }: ComponentProps) {
  const [snackbar, setSnackbar] = useState<SnackbarOptions>({ message: '' });

  const handleClose = () => {
    setSnackbar({ message: '' });
  };

  return (
    <SnackbarContext.Provider value={{ setSnackbar }}>
      <Snackbar
        open={!!snackbar.message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={snackbar.petsistent ? null : 4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbar.type ?? 'info'} variant="filled" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
}
