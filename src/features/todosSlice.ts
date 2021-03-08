import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialState = {
  id: number;
  text: string;
  completed: boolean;
}[];

const initialState: InitialState = [];

export default createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<InitialState[0]>) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) =>
      state.map(s => ({
        ...s,
        completed: action.payload === s.id ? !s.completed : s.completed
      }))
  }
});
