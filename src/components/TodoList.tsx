import * as React from 'react';
import List from '@material-ui/core/List';
import Todo from './Todo';

type PropsTypes = {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  onTodoClick: (id: number) => void;
};

const TodoList: React.VFC<PropsTypes> = ({ todos, onTodoClick }) => (
  <List>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </List>
);

export default TodoList;
