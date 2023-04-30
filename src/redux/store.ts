import { configureStore } from '@reduxjs/toolkit';
import postOptionsReduce from './Slices/selectedPostToEdit';
import userReducer from './Slices/user';
import postsReducer from './Slices/posts';

const store = configureStore({
   reducer: {
      postOption: postOptionsReduce,
      user: userReducer,
      postsStorage: postsReducer 
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;