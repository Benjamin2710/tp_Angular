import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module'; //importar las rutas
import { App } from './app';
import { MascotaList } from './mascota-list/mascota-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';

import {FormsModule} from '@angular/forms';
import { ShopAbout } from './shop-about/shop-about';
import { ShopMascotas } from './shop-mascotas/shop-mascotas';
import { InputInteger } from './input-integer/input-integer'; //Permite Two-Ways Data Binding

@NgModule({
  declarations: [ //Declaro todo los componentes  que voy a usar
    App,
    MascotaList,
    ShoppingCart,
    ShopAbout,
    ShopMascotas,
    InputInteger
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //indica dónde está la config de las rutas
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App] //Este es el root component
})
export class AppModule { }
