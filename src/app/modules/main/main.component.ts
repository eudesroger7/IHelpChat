import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {clearSearch, setSearch} from '../../state/actions/search.action';

@Component({
  selector: 'app-admin',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public navbarMobileOpened = false;
  public search$: Observable<any>;
  public menus = [
    {title: 'Dashboard',     path: '/dashboard',  icon: 'fas fa-chart-pie'},
    {title: 'Atendimento',   path: '/attendance', icon: 'fas fa-comments'},
    {title: 'Relatórios',    path: '/reports',    icon: 'far fa-file-excel'},
    {title: 'Contatos',      path: '/contacts',   icon: 'fas fa-search'},
    {title: 'Marketing',     path: '/marketing',  icon: 'fas fa-file-alt'},
    {title: 'Configurações', path: '/settings',   icon: 'fas fa-cog'},
  ];

  constructor(private store: Store<{ search: string }>) {
    this.search$ = this.store.select('search');
  }

  ngOnInit(): void {
  }

  public search($event: any): void {
    this.store.dispatch(setSearch({payload: $event.target.value}));
  }

  public clearSearch(): void {
    this.store.dispatch(clearSearch());
  }
}
