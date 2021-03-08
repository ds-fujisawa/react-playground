import * as React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Status from './components/Status';

const App: React.VFC = () => (
  <>
    <Status />
    <AddTodo />
    <VisibleTodoList />
  </>
);

export default App;
