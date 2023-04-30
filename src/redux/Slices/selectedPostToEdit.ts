import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IPost from '../../interface/Post';

type InitialState = {
   post: IPost | null,
   editingPost: boolean,
   deletingPost: boolean
};

const initialState: InitialState = {
   post: {
      id: 0,
      username: '',
      created_datetime: '',
      title: '',
      content: ''
   },
   editingPost: false,
   deletingPost: false
};

type options = {
   payload?: IPost,
   type: string,

};

const postOptionsReduce = createSlice({
   name: 'EditingPost',
   initialState,
   reducers: {
      editPost(state, type: PayloadAction<IPost>) {
         state.editingPost = !state.editingPost;
         state.post = type.payload;
      },
      deletePost(state, action: PayloadAction<IPost>) {
         state.deletingPost = !state.deletingPost;
         state.post = action.payload;

         console.log('post selected to delete', state.post);
      },
      editPostPopUp(state) {
         state.editingPost = !state.editingPost;
      },
      deletePostPopUp(state) {
         state.deletingPost = !state.deletingPost;
      }
   }
});

export const { editPost, editPostPopUp, deletePost, deletePostPopUp } = postOptionsReduce.actions;
export default postOptionsReduce.reducer;