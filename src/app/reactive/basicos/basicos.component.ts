import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  constructor( private formBuilder : FormBuilder) { }

  /*miFormulario : FormGroup = new FormGroup({
    nombre: new FormControl('Productito'),
    precio: new FormControl('15000'),
    existencias: new FormControl('5')
  });*/

  miFormulario : FormGroup = this.formBuilder.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    precio: [  , [Validators.required, Validators.min(0)]],
    existencias: [ ],
  })

  campoEsValido( campo : string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }
}
