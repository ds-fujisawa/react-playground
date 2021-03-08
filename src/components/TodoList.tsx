import * as React from 'react';
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
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => {
          onTodoClick(todo.id);
        }}
      />
    ))}
  </ul>
);

export default TodoList;
