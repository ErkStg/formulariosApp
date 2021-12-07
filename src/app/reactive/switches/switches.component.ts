import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor( private FormBuilder : FormBuilder) { }

  persona = {
    genero: 'F',
    notificaciones: true
  }

  miFormulario : FormGroup = this.FormBuilder.group({
    genero: [ 'M' , [ Validators.required ] ],
    notificaciones: [ false, [ Validators.required ] ],
    terminosYCondiciones: [false, [Validators.requiredTrue ] ]
  });

  ngOnInit(): void {
    this.miFormulario.reset( {
      ...this.persona,
      condiciones: false
    } );

    //para sincronizar
    this.miFormulario.valueChanges.subscribe( ({ terminosYCondiciones, ...resto }) => {
      this.persona = resto;
    });
  }

guardar(){
  const formValue = {... this.miFormulario.value};
  delete formValue.condiciones;
  this.persona = formValue;
}

}
