import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm; 

  initForm = {
    producto: 'algo',
    precio: '10',
    existencias: 5
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido() : boolean{
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched;
  }

  precioValido() : boolean{
    return this.miFormulario?.controls.precio?.value < 0 && this.miFormulario?.controls.precio?.touched;
  }

  guardar(){
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }
}