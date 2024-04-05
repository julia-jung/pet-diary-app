import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { ComponentProps } from '@/types';

export default function LocalizationProvider({ children }: ComponentProps) {
  return <MuiLocalizationProvider dateAdapter={AdapterDayjs}>{children}</MuiLocalizationProvider>;
}
