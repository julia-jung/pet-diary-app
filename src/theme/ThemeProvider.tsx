import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { themeOptions } from './theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
