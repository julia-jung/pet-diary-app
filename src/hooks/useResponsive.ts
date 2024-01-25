import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type Query = 'up' | 'down' | 'between';
type BreakPoint = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export function useResponsive(query: Query, start: BreakPoint, end?: BreakPoint) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end ?? 'lg'));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  switch (query) {
    case 'up':
      return mediaUp;
    case 'down':
      return mediaDown;
    case 'between':
      return mediaBetween;
    default:
      return mediaOnly;
  }
}

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output: null | BreakPoint, key: BreakPoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
