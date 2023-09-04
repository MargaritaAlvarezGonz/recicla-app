import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { LoadingState } from 'src/store/loading/LoadingState';
import { hide, show } from 'src/store/loading/loading.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/AppState';
import { recoverPassword, recoverPasswordSuccess, recoverPassworddFail } from 'src/store/login/login.action';
import { ToastController } from '@ionic/angular';
import { LoginState } from '../../../store/login/LoginState';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  form: FormGroup;
  loginStateSubscription: Subscription;


  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>,
    private toastController:ToastController, private authService: AuthService) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();

    this.loginStateSubscription = this.store.select("login").subscribe( loginState =>{
      this.onIsRecoveredPassword(loginState);
      this.onIsRecoveringPassword(loginState);
      this.onIsRecoverPasswordFail(loginState);
    })
  }

  ngOnDestroy(){
    if(this.loginStateSubscription){
      this.loginStateSubscription.unsubscribe();
    }
  }

  private async onIsRecoverPasswordFail(loginState: LoginState){
    if (loginState.error){
      this.store.dispatch(hide());
      const toaster = await this.toastController.create({
        position: "bottom",
        message: loginState.error.message,
        color: "danger"
      });
      toaster.present();
    }
  }

  private onIsRecoveringPassword(loginState: LoginState){
    if (loginState.isRecoveringPassword){
      this.store.dispatch(show());

      this.authService.recoverEmailPassword(this.form.get('email').value).subscribe(()=>{
        this.store.dispatch(recoverPasswordSuccess());
      }, error => {this.store.dispatch(recoverPassworddFail({error}))
    });
    }
  }

  private async onIsRecoveredPassword(loginState: LoginState){
    if(loginState.isRecoveredPassword){
      this.store.dispatch(hide());
      const toaster = await this.toastController.create({
        position: "bottom",
        message: "Correo electrónico de recuperación enviado",
        color: "primary"
      });
      toaster.present();
    }
  }

  forgotEmailPassword(){
    this.store.dispatch(recoverPassword())

    setTimeout(()=>{
      this.store.dispatch(hide())
    }, 3000)
  }

  login(){
    this.router.navigate(['home']);

  }

  register(){
    this.router.navigate(['register'])
  }

}
