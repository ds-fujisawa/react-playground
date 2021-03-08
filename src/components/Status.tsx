import * as React from 'react';
import FilterLink from '../containers/FilterLink';

const Status: React.VFC = () => (
  <div>
    <FilterLink filter="SHOW_ALL">All</FilterLink>{' '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{' '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </div>
);

export default Status;
