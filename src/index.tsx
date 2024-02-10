import React from 'react';
import { createRoot } from 'react-dom/client';

import { StoreProvider, ThemeProvider, LocalizationProvider, SnackbarProvider, RouterProvider } from '@/providers';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <LocalizationProvider>
          <SnackbarProvider>
            <RouterProvider />
          </SnackbarProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
);
