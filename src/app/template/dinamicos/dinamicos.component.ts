import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre : string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: []
})
export class DinamicosComponent implements OnInit {

  //@ViewChild('miForm') miForm !: NgForm;

  nuevoJuego : string = '';

  persona : Persona = {
    nombre: 'Pepe',
    favoritos:[
      {id:3, nombre: 'El juego del calamar'},
      {id:1, nombre: 'Pacman'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){}

  eliminar( indice : number) : void{
    this.persona.favoritos.splice(indice, 1);
  }

  agregarJuego():void{
    const nuevoFavorito : Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }
}
