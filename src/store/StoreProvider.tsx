import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { petReducer } from './slices';

export const store = configureStore({
  reducer: {
    pet: petReducer,
  },
});

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
