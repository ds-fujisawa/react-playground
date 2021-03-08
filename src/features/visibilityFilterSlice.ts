import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialState = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export default createSlice({
  name: 'visibilityFilter',
  initialState: 'SHOW_ALL' as InitialState,
  reducers: {
    setVisibilityFilter: (_, action: PayloadAction<InitialState>) =>
      action.payload
  }
});
