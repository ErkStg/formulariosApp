import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario : FormGroup = this.formBuilder.group({
    nombre: [ '' , [Validators.required, Validators.minLength(3)] ],
    juegos: this.formBuilder.array( [
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]

    ], Validators.required )
  });

  nuevoJuego : FormControl = this.formBuilder.control('', Validators.required );

  constructor(private formBuilder : FormBuilder ) { }

  ngOnInit(): void {
  }

  get favoritosArr(){
    return this.miFormulario.get('juegos') as FormArray;
  }

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

  agregarJuego(){
    if(this.nuevoJuego.invalid){
      return;
    }

    this.favoritosArr.push( new FormControl(this.nuevoJuego.value, Validators.required));
    //this.favoritosArr.push( this.formBuilder.control( [this.nuevoJuego.value, Validators.required]));

    this.nuevoJuego.reset();
  }

  borrar( indice: number){
    this.favoritosArr.removeAt(indice);
  }
}
