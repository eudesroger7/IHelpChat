import {Component, OnInit} from '@angular/core';
import {MarketingService} from '../../../../services/entities/marketing.service';
import {CrudIndex} from '../../../../interfaces/crud.interface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-users',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit, CrudIndex {
  public dataSource: any[] = [];
  public filteredDataSource: any[] = [];
  public search$: Observable<any>;

  constructor(private service: MarketingService,
              private store: Store<{ search: string }>) {
    this.search$ = this.store.select('search');
  }

  ngOnInit(): void {
    this.getDataSource();
    this.search$.subscribe(state => {
      this.filteredDataSource = this.dataSource.filter(item => item.title.includes(state.search));
    });
  }

  getDataSource(): void {
    this.service.index().subscribe((response: any) => {
      this.dataSource = response.data;
    });
  }
}
