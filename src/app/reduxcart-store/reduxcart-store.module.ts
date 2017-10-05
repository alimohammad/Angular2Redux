import { rootReducer, INITIAL_STATE } from './';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { createLogger } from 'redux-logger';

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ],
  declarations: []
})
export class ReduxcartStoreModule {
  constructor(store: NgRedux<any>) {
    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger()]
    );
  }
}
