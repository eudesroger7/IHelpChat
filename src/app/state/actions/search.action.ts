import {createAction, props} from '@ngrx/store';

enum actionTypes {
  setSearch = 'SET_SEARCH',
  clearSearch = 'CLEAR_SEARCH',
}

export const setSearch = createAction(
  actionTypes.setSearch,
  props<{payload: any}>()
);

export const clearSearch = createAction(
  actionTypes.clearSearch
);
