import React from 'react';
import { createRoot } from 'react-dom/client';

import { StoreProvider } from '@/store';
import { ThemeProvider } from '@/theme';
import { RouterProvider } from '@/router';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
);
