import { FormControl } from "@angular/forms";

export const nombreYApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const noPuedeSerSteg = ( control : FormControl ) => {
    const valor : string = control.value?.trim().toLowerCase();

    if(valor == "steg"){
      return {
        noSteg: true
      }
    }

    return null;
  }