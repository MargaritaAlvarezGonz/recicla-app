import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadingState } from '../../../store/loading/LoadingState';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/AppState';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  LoadingState$: Observable<LoadingState>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.LoadingState$ = this.store.select('loading');
  }

}
