import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';

type PropsType = {
  id: number;
  onClick: () => void;
  completed?: boolean;
  text: string;
};

const Todo: React.VFC<PropsType> = ({ onClick, completed, text }) => (
  <ListItem
    button
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </ListItem>
);

export default Todo;
