import {createReducer, on} from '@ngrx/store';
import {startLoading, stopLoading} from '../actions/loading.action';

const INITIAL_STATE = {
  loading : false
};

export const loadingReducer = createReducer(
  INITIAL_STATE,
  on(startLoading, state => ({ ...state, loading: true })),
  on(stopLoading, state => ({ ...state, loading: false })),
);
