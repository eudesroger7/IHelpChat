import {Component, OnInit} from '@angular/core';
import {MarketingService} from '../../../../services/entities/marketing.service';
import {CrudIndex} from '../../../../interfaces/crud.interface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {MarketingIndexItem, MarketingIndexResponse} from '../../../../interfaces/marketing.interface';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit, CrudIndex {
  public dataSource: MarketingIndexItem[] = [];
  public filteredDataSource: MarketingIndexItem[] = [];
  public search$: Observable<any>;

  constructor(private service: MarketingService,
              private store: Store<{ search: string }>) {
    this.search$ = this.store.select('search');
  }

  ngOnInit(): void {
    this.getDataSource();
    this.search$.subscribe(state => {
      this.filteredDataSource = this.dataSource.filter(item => item.Titulo.includes(state.search));
    });
  }

  getDataSource(): void {
    this.service.index().subscribe((response: MarketingIndexResponse) => {
      this.dataSource = response.Dados;
      this.filteredDataSource = response.Dados;
    });
  }
}
