import { IReduxCartState } from './state';
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
  constructor(
    store: NgRedux<IReduxCartState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter
  ) {
    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger()],
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
  }
}
