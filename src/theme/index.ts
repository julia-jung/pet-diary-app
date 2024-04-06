import type { ThemeOptions } from '@mui/material/styles';

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
      light: '#E1F1FF',
      main: '#0d2039',
      dark: '#3D4C68',
    },
    secondary: {
      light: '#DAF7F4',
      main: '#00C6BC',
      dark: '#2E928C',
      // light: '#FFEECB',
      // main: '#d9cbb6',
      // main: '#D9A21B',
      // dark: '#877455',
    },
    background: {
      paper: '#F4F6F8',
      // paper: '#F4F6F8',
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
    MuiListSubheader: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.overline,
          borderBottom: `1px dashed ${theme.palette.grey[400]}`,
        }),
      },
    },
  },
  // palette: palette as PaletteOptions,
  // typography: typography as TypographyVariantsOptions,
  // shadows: shadows as Shadows,
  // customShadows,
  // shape: { borderRadius: 8 },
};
