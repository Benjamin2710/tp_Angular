import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from "../mascota-list/mascota";

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {
  constructor(){}
  min: number = 0;

  //defines what data a child component can receive.
  @Input()
  quantity!: number; //Declaramos objeto heredado del padre, ! No está declarado

  @Input()
  max!: number;

  
  @Output() 
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() 
  mError: EventEmitter<string> = new EventEmitter<string>();

  upQuantity(): void{
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.mError.emit("Se alcanzó el max");
    }
  }

  downQuantity(): void{
    if (this.quantity > this.min) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }else {
      this.mError.emit("Se alcanzó el min");
    }
  }

  changeQuantity(event: Event): void {
    event.preventDefault();
    if ((this.quantity < this.min) && (this.quantity > this.max) ) {
      this.quantity = this.min;
    }
    this.quantityChange.emit(this.quantity);
  }
}
