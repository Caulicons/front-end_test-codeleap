import { configureStore } from '@reduxjs/toolkit';
import postOptionsReduce from './Slices/selectedPostToEdit';

const store = configureStore({
   reducer: {
      postOption: postOptionsReduce
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;