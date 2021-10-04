import {Component, OnInit} from '@angular/core';
import {MarketingService} from '../../../../services/entities/marketing.service';
import {CrudShow} from '../../../../interfaces/crud.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-marketing-details',
  templateUrl: './marketing-details.component.html',
  styleUrls: ['./marketing-details.component.scss']
})
export class MarketingDetailsComponent implements OnInit, CrudShow {
  public dataSource: any;

  constructor(private service: MarketingService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getDataSource(params.id));
  }

  getDataSource(id: string): void {
    this.service.show(id).subscribe((response: any) => {
      this.dataSource = response.data;
    });
  }
}
