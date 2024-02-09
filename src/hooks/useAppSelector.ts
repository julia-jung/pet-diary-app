import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '@/types/common';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
