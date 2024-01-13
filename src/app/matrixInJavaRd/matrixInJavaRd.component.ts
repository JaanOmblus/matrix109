import { Component, OnInit } from '@angular/core';
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: 'matrix-javard',
  templateUrl: './matrixInJavaRd.component.html',
  styleUrls: ['./matrixInJavaRd.component.css']
})
export class JavaRdComponent implements OnInit {

  ngOnInit() {  
   
} 
precio = 12;
  comision = 24;

  valorFinal = 36;


  getPrecio(event) {
    this.precio = event.value;
    this.valorFinal = (event.value + this.comision) /2;
  }

  getComision(event) {
    this.comision = event.value;
    this.valorFinal = (event.value + this.precio) /2;
  }


}