import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IPost from '../../interface/Post';

type InitialState = {
   postSelected: IPost | null;
   posts: IPost[];
   nextPostURL: string | null;
};

const initialState: InitialState = {
   posts: [],
   postSelected: null,
   nextPostURL: '',
};

const postsSlice = createSlice({
   name: 'username',
   initialState,
   reducers: {
      addPostInStore(state, action: PayloadAction<IPost>) {
         state.posts = [action.payload, ...state.posts];
      },
      addPostsInStore(state, action: PayloadAction<IPost[]>) {
         const repeatSomePost = state.posts.filter((post) => {
            return action.payload.some(
               (tryAddPost) => tryAddPost.id === post.id
            );
         });

         if (repeatSomePost.length > 0) {
            return;
         }

         state.posts = [...state.posts, ...action.payload];
      },
      editPostInStore(state, action: PayloadAction<IPost>) {
         state.posts = state.posts.map((post) => {
            if (post.id != action.payload.id) return post;

            return action.payload;
         });
      },
      deletePostInStore(state, action: PayloadAction<IPost>) {
         state.posts = state.posts.filter((post) => {
            if (post.id === action.payload.id) return;
            return post;
         });
      },
      postSelectedInStore(state, action: PayloadAction<IPost>) {
         state.postSelected = action.payload;
      },
      nextPostsURLStore(state, action: PayloadAction<string>) {
         const res = action.payload as string;
         state.nextPostURL = res;
      },
   },
});

export const {
   addPostInStore,
   addPostsInStore,
   deletePostInStore,
   editPostInStore,
   postSelectedInStore,
   nextPostsURLStore,
} = postsSlice.actions;
export default postsSlice.reducer;
