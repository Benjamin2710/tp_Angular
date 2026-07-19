import { Injectable } from '@angular/core';
import { Mascota } from './mascota-list/mascota';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

//Código que maneja la lígica del carrito
export class MascotaCart {//El SERVICIO es una clase publica
  
  constructor(){}

  private _cartList: Mascota [] = [];
  cartList: BehaviorSubject<Mascota[]> = new BehaviorSubject<Mascota[]>([]);

  //AGREGAR
  addToCart(mascota: Mascota) {
    
    let item: Mascota | undefined  = this._cartList.find((v1) => v1.type == mascota.type);
    if (!item) {
      this._cartList.push({... mascota}); //Si no existe en la lista hay que agregarlo y clonamos el objeto

    } else { //Si ya existe
      item.quantity += mascota.quantity;
    }

    
    console.log(this._cartList);
    //throw new Error('Method not implemented.');

    this.cartList.next(this._cartList); //Notifoca que hubo un cambio, equivalente al emit de eventos
  }
  


  
}
