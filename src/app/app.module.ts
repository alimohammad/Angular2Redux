import { CartInfoComponent } from './shopping-cart/cart-info/cart-info.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ACTION_SERVICE_PROVIDERS } from './app-global.provider';
import { ReduxcartStoreModule } from './reduxcart-store/reduxcart-store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CartInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReduxcartStoreModule,
    AppRoutingModule
  ],
  providers: [ACTION_SERVICE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
