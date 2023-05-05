
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
   username: string
};

const initialState: InitialState = {
   username: ''
};

const userSlice = createSlice({
   name: 'username',
   initialState,
   reducers: {
      registerUser(state, action: PayloadAction<string>) {
         state.username = action.payload;
      },
      /*       verifyUserRegister(state, action: PayloadAction<string>) {
      
               state.username === action.payload;
               return state.username === action.payload;
            }, */
   }
});

export const { registerUser, /* verifyUserRegister */ } = userSlice.actions;
export default userSlice.reducer;