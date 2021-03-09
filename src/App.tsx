import * as React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Status from './components/Status';
import Counter from './components/Counter';

const App: React.VFC = () => (
  <>
    <Status />
    <AddTodo />
    <VisibleTodoList />
    <Counter />
  </>
);

export default App;
