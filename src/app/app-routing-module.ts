import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //importar router

//importar componentes
import { ShopMascotas } from './shop-mascotas/shop-mascotas';
import { ShopAbout } from './shop-about/shop-about';


const routes: Routes = [ //Ponemos todo el routeo de la app, creamos las rutas
  
  {//Raíz del proyecto
    path: '',
    redirectTo: 'mascotas',
    pathMatch: 'full'
  },
  {
    path: 'mascotas',
    component: ShopMascotas
  },
  {
    path: 'about',
    component: ShopAbout
  },
];

@NgModule({ //Define el router
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
