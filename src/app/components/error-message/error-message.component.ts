import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() message:string;
  @Input() field:FormGroup;

  
  constructor() { }

  ngOnInit() {
  }

  shouldShowComponent(){
    if(this.field.touched && this.field.errors?.['required']){
      return true;
    }
    return false;
  }

}
