import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreYApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerSteg ( control : FormControl ) : ValidationErrors | null {
    const valor : string = control.value?.trim().toLowerCase();

    if(valor == "steg"){
      return {
        noSteg: true
      }
    }

    return null;
  }

  camposIguales( campo1 : string, campo2 : string){

    return ( formGroup : AbstractControl): ValidationErrors | null => {
      const pass = formGroup.get(campo1)?.value;
      const confirmar = formGroup.get(campo2)?.value;

      if(pass != confirmar){
        formGroup.get(campo2)?.setErrors({ noIguales: true })
        return { noIguales: true}
      }

      formGroup.get(campo2)?.setErrors(null);
      return null;
    }
  }
}
