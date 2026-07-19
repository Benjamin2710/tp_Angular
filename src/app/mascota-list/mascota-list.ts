import { Component } from '@angular/core';
import { Mascota } from "./mascota";
import { MascotaCart } from '../mascota-cart'; //Importar SERVICIO

@Component({
  selector: 'app-mascota-list',
  standalone: false,
  templateUrl: './mascota-list.html',
  styleUrl: './mascota-list.scss'
})

export class MascotaList { //"export" makes the inteface public

  mascotas: Mascota[] = [ //Un arreglo, una colección del tipo Mascota
    //MOCK de Objeto literal
    {
      type: "lagarto ruso",
      price: 349990,
      stock: 4,
      image: "../../assets/img/lagarto_ruso.jpg",
      clearance: false,
      quantity: 0,
    },

    {
      type: "serpiente china",
      price: 249999,
      stock: 17,
      image: "../../assets/img/serpiente_china.jpg",
      clearance: true,
      quantity: 0,
    },

    {
      type: "rata siria",
      price: 99999,
      stock: 2,
      image: "../../assets/img/rata_siria.jpg",
      clearance: false,
      quantity: 0,
    },

  ];

  constructor(private cart: MascotaCart){ //El COMPONENTE necesita un Service. 
  // Inyectamos la dependencia del servicio. 
  // Se crea una variable privada con una instancia del servicio.    
  }

  addToCart(mascota: Mascota): void{ //usamos service
    this.cart.addToCart(mascota);

    //Control de STOCK
    mascota.stock -= mascota.quantity;
    mascota.quantity = 0; //Reiniciar a 0 para la sig compra refreshStock()

  }

  mError(m: string){
    alert(m);
  }

}
