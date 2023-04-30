
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IPost from '../../interface/Post';

type InitialState = {
   postSelected: IPost | null,
   posts: IPost[]
};

const initialState: InitialState = {
   posts: [] as IPost[],
   postSelected: null
};

const postsReduce = createSlice({
   name: 'username',
   initialState,
   reducers: {
      addPost(state, action: PayloadAction<IPost>) {
         state.posts = [action.payload, ...state.posts];
      },
      addPosts(state, action: PayloadAction<IPost[]>) {
         state.posts = [...state.posts, ...action.payload];
      },
      editPost(state, action: PayloadAction<IPost>) {
         state.posts = state.posts.map(post => {
            if (post.id != action.payload.id) return post;

            return action.payload;
         });
      },
      deletePost(state, action: PayloadAction<IPost>) {
         state.posts = state.posts.filter(post => {
            if (post.id === action.payload.id) return;

            return post;
         });
      },
      postSelected(state, action: PayloadAction<IPost>) {
         state.postSelected = action.payload;
      },
      resetPosts(state) {
         state.posts = [];
      },
   }
});

export const { addPosts, addPost, deletePost, editPost, postSelected, resetPosts } = postsReduce.actions;
export default postsReduce.reducer;