import { createSlice } from '@reduxjs/toolkit';
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

const postOptionsReducer = createSlice({
   name: 'EditingPost',
   initialState,
   reducers: {
      editPostPopUp(state) {
         state.editingPost = !state.editingPost;
      },
      deletePostPopUp(state) {
         state.deletingPost = !state.deletingPost;
      }
   }
});

export const {  editPostPopUp,  deletePostPopUp } = postOptionsReducer.actions;
export default postOptionsReducer.reducer;