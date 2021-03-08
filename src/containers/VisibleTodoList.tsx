import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import { RootState } from '../rootReducer';
import todosSlice, { InitialState as TodosState } from '../features/todosSlice';
import { InitialState as VisibleState } from '../features/visibilityFilterSlice';

const getVisibleTodos = (todos: TodosState, filter: VisibleState) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const VisibleTodoList: React.VFC = () => {
  const { todos, visibilityFilter } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { toggleTodo } = todosSlice.actions;

  return (
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onTodoClick={id => dispatch(toggleTodo(id))}
    />
  );
};

export default VisibleTodoList;
