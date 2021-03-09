import * as React from 'react';
import Button from '@material-ui/core/Button';

type PropsType = {
  active: boolean;
  onClick: () => void;
};

const Link: React.FC<PropsType> = ({ active, children, onClick }) => {
  if (active) return <Button disabled>{children}</Button>;

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Button onClick={clickHandler} color="primary">
      {children}
    </Button>
  );
};

export default Link;
