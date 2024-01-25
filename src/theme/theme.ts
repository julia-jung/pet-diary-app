import { ThemeOptions } from '@mui/material/styles';
import { lime, indigo } from '@mui/material/colors';

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
    primary: indigo,
    secondary: lime,
    background: {
      paper: '#F9FAFB',
      default: '#F9FAFB',
    },
  },
  typography: {
    fontFamily: 'Public Sans, sans-serif',
  },
  // palette: palette as PaletteOptions,
  // typography: typography as TypographyVariantsOptions,
  // shadows: shadows as Shadows,
  // customShadows,
  // shape: { borderRadius: 8 },
};
