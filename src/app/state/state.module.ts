import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
// reducers
import {loadingReducer} from './reducers/loading.reducer';
import {searchReducer} from './reducers/search.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      loading: loadingReducer,
      search: searchReducer
    })
  ],
})
export class StateModule { }
