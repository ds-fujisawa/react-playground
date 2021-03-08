import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import visibilityFilterSlice, {
  InitialState
} from '../features/visibilityFilterSlice';
import Link from '../components/Link';

type PropsType = {
  filter: InitialState;
};

const FilterLink: React.FC<PropsType> = ({ filter, children }) => {
  const { visibilityFilter } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { setVisibilityFilter } = visibilityFilterSlice.actions;

  return (
    <Link
      active={filter === visibilityFilter}
      onClick={() => {
        dispatch(setVisibilityFilter(filter));
      }}
    >
      {children}
    </Link>
  );
};

export default FilterLink;
