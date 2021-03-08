import * as React from 'react';

type PropsType = {
  id: number;
  onClick: () => void;
  completed?: boolean;
  text: string;
};

const Todo: React.VFC<PropsType> = ({ onClick, completed, text }) => (
  <li className="todo-item">
    <span
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </span>
  </li>
);

export default Todo;
