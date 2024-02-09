import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { themeOptions } from '@/theme';

import { ComponentProps } from '@/types/common';

export default function ThemeProvider({ children }: ComponentProps) {
  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
