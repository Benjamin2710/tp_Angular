import { Component } from '@angular/core';
import { Mascota } from "../mascota-list/mascota";
import { MascotaCart } from '../mascota-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {
  
  cartList$: Observable<Mascota[]> | undefined;
  constructor(private cart: MascotaCart){ 
    //La misma INSTANCIA que en mascota-list.ts

    this.cartList$ = cart.cartList.asObservable();
  }




  emptyCart (cart: Mascota): void {
    
  }
}


