
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
   username: string
};

const initialState: InitialState = {
   username: ''
};

const userReduce = createSlice({
   name: 'username',
   initialState,
   reducers: {
      addUser(state, action: PayloadAction<string>) {
         state.username = action.payload;
      }
   }
});

export const { addUser } = userReduce.actions;
export default userReduce.reducer;