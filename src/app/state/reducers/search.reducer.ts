import {createReducer, on} from '@ngrx/store';
import {clearSearch, setSearch} from '../actions/search.action';

const INITIAL_STATE = {
  search: ''
};

export const searchReducer = createReducer(
  INITIAL_STATE,
  on(setSearch, (state, action: any) => ({ ...state, search: action.payload })),
  on(clearSearch, state => ({ ...state, search: '' })),
);
