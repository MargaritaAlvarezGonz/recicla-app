import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  recoverEmailPassword(emai:string) : Observable<void>{
    return new Observable<void>(observer=>{
      setTimeout(()=>{

      },3000);
    })
  }
}
