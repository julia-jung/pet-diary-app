import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/types/common';

export const useAppDispatch = () => useDispatch<AppDispatch>();
