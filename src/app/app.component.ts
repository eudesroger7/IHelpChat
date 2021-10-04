import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loading$: Observable<any>;

  constructor(private store: Store<{ loading: boolean }>) {
    this.loading$ = this.store.select('loading');
  }

  ngOnInit(): void {
  }
}
