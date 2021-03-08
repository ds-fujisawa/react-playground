import { combineReducers } from '@reduxjs/toolkit';
import todosSlice from './features/todosSlice';
import visibilityFilterSlice from './features/visibilityFilterSlice';

const rootReducer = combineReducers({
  todos: todosSlice.reducer,
  visibilityFilter: visibilityFilterSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
