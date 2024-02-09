import React from 'react';
import { createRoot } from 'react-dom/client';

import { StoreProvider, ThemeProvider, SnackbarProvider, RouterProvider } from '@/providers';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <SnackbarProvider>
          <RouterProvider />
        </SnackbarProvider>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
);
