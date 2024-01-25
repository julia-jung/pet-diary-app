import React from 'react';
import { createRoot } from 'react-dom/client';

import StoreProvider from '@/stores/StoreProvider';
import ThemeProvider from '@/theme/ThemeProvider';
import RouterProvider from '@/routes/RouterProvider';

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
