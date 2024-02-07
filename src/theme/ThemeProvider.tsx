import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    // customShadows: typeof customShadows;
    // typography: typeof typography;
    // palette: typeof palette;
  }
  interface ThemeOptions {
    // customShadows: typeof customShadows;
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#0d2039',
    },
    secondary: {
      main: '#d9cbb6',
    },
    background: {
      paper: '#F4F6F8',
      default: '#DFE3E8',
    },
  },
  typography: {
    fontFamily: 'Public Sans, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF',
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  // palette: palette as PaletteOptions,
  // typography: typography as TypographyVariantsOptions,
  // shadows: shadows as Shadows,
  // customShadows,
  // shape: { borderRadius: 8 },
};

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
