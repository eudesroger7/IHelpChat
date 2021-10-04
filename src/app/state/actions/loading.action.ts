import {createAction} from '@ngrx/store';

enum actionTypes {
  startLoading = 'START_LOADING',
  stopLoading = 'STOP_LOADING'
}

export const startLoading = createAction(actionTypes.startLoading);

export const stopLoading = createAction(actionTypes.stopLoading);
