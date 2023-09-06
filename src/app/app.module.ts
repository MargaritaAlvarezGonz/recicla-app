import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PickupCallCardModule } from './components/pickup-call-card/pickup-call-card.module';
import { AppStoreModule } from 'src/store/App.StoreModule';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginPageModule } from './pages/login/login.module';
import { AngularFireModule } from "@angular/fire/compat";


import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, PickupCallCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ...AppStoreModule,
  StoreDevtoolsModule.instrument({maxAge: 25})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})


export class AppModule {}
