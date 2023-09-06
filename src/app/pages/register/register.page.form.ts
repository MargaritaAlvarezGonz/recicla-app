import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { recoverPassword } from '../../../store/login/login.action';



export class RegisterPageForm{
  private formBuilder : FormBuilder;
  private form: FormGroup;

  constructor(formBuilder: FormBuilder){
    this.formBuilder = formBuilder;
    this.form = this.createForm();
  }

  private createForm(): FormGroup{
  let form = this.formBuilder.group({
      nombre:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      contraseña:['', [Validators.required, Validators.minLength(6)]],
      confirmaContraseña:['', [Validators.required]],
      telefono:['', [Validators.required]],
      address: this.formBuilder.group({
        direccion:['', [Validators.required]],
        numero:['', [Validators.required]],
        barrio:['', [Validators.required]],
        codigoPostal:['', [Validators.required]],
        localidad:['', [Validators.required]],
      })
    });

    form.get('confirmaContraseña').setValidators(matchPasswordAndRepeatPassword(form));
    return form;
  }

  getForm(): FormGroup{
    return this.form;
  }

}
function matchPasswordAndRepeatPassword(form: FormGroup): ValidatorFn {
  const password = form.get('password');
  const repeatPassword = form.get('repeatPassword');

  const validator = () => {
    return password.value == repeatPassword.value ? null : {isntMatching:true}
  };
  return validator;
}
