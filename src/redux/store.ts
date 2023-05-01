import { configureStore } from '@reduxjs/toolkit';
import {
   notificationReducer,
   postOptionsReducer,
   postsReducer,
   userReducer
} from './Slices';


const store = configureStore({
   reducer: {
      postOption: postOptionsReducer,
      user: userReducer,
      postsStorage: postsReducer,
      notification: notificationReducer
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;