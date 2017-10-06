import { RootEpics } from './epics';
import { IReduxCartState } from './state';
import { rootReducer, INITIAL_STATE } from './';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ],
  declarations: [],
  providers: [
    RootEpics
  ]
})
export class ReduxcartStoreModule {
  constructor(
    store: NgRedux<IReduxCartState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics
  ) {

    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger(), ...rootEpics.createEpics()],
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
  }
}
