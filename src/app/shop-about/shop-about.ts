import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-shop-about',
  standalone: false,
  templateUrl: './shop-about.html',
  styleUrl: './shop-about.scss'
})
export class ShopAbout {
  contacts: Contact[] = [ 
      {
        name: "Soledad",
        tel: 22320895637,
        email: "soleVilla@gmail.com",
      },
  
      {
        name: "Juan",
        tel: 2983556871,
        email: "jplopez@gmail.com",
      },
  
      {
        name: "Federico",
        tel: 2494503781,
        email: "Federex360@gmail.com",
      },
      {
        name: "Casa central",
        tel: 8003330033,
        email: "contacto@exoticbeasts.com",
      },
  
  ];
}
