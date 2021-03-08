import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { RootState } from '../rootReducer';
import todosSlice from '../features/todosSlice';

const AddTodo: React.VFC = () => {
  const [text, setText] = React.useState('');
  const { todos } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { addTodo } = todosSlice.actions;

  return (
    <div>
      <TextField
        label="TODO"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            dispatch(addTodo({ id: todos.length + 1, text, completed: false }));
            setText('');
          }
        }}
      />
      <Fab
        onClick={() => {
          dispatch(addTodo({ id: todos.length + 1, text, completed: false }));
          setText('');
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddTodo;
