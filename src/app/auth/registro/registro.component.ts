import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreYApellidoPattern, noPuedeSerSteg } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../shared/validator/email-validator.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario : FormGroup = this.formBuilder.group({
    nombre:['', [Validators.required, Validators.pattern(this.validatorService.nombreYApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerSteg], ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmar: ['', [Validators.required, Validators.minLength(6)]]
  },{
    validators: [ this.validatorService.camposIguales('password', 'confirmar')]
  });

  constructor( private formBuilder: FormBuilder,
               private validatorService : ValidatorService,
               private emailValidator : EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Erik Steg',
      email: 'test1@test.com',
      username: 'No es steg lo juro',
      password: '123456',
      confirmar: '123456'
    });
  }

  get emailErrorMsg() :string {
    
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'El correo es obligatorio';
    }else if(errors?.pattern){
      return 'Utiliza el formato "ejemplo@email.com"';
    }else if(errors?.emailTomado){
      return 'Este email ya se encuentra en uso';
    }
    return '';
  }

  campoNoValido( campo : string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }
}
