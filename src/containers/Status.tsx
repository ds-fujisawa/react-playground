import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import visibilityFilterSlice, {
  InitialState
} from '../features/visibilityFilterSlice';
import Link from '../components/Link';

const filter: { [key in InitialState]: string } = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

const Status: React.VFC = () => {
  const { visibilityFilter } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { setVisibilityFilter } = visibilityFilterSlice.actions;

  return (
    <div>
      {(Object.keys(filter) as (keyof typeof filter)[]).map(k => (
        <Link
          key={k}
          active={k === visibilityFilter}
          onClick={() => {
            dispatch(setVisibilityFilter(k));
          }}
        >
          {filter[k]}
        </Link>
      ))}
    </div>
  );
};

export default Status;
