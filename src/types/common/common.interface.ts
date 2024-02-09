import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from '@/store';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export interface Error {
  status?: number;
  statusText?: string;
  message: string;
}

export interface ComponentProps {
  children: React.ReactNode;
}

export interface SnackbarOptions {
  message: string;
  type?: 'info' | 'success' | 'error';
  petsistent?: boolean;
}
