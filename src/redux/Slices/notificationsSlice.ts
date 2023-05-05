
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type NotificationTypes = {
   type: 'welcome' | 'failed' | 'success' | '',
   text: string
}

interface InitialState extends NotificationTypes {
   isActive: boolean,
};

const initialState: InitialState = {
   type: '',
   text: '',
   isActive: true
};

const notificationSlice = createSlice({
   name: 'username',
   initialState,
   reducers: {
      showNotification(state, action: PayloadAction<NotificationTypes>) {
         state.isActive = true;
         state.type = action.payload.type;
         state.text = action.payload.text;
      },
      hiddenNotification(state) {
         state.isActive = false;
      },
   }
});

export const { showNotification, hiddenNotification } = notificationSlice.actions;
export default notificationSlice.reducer;