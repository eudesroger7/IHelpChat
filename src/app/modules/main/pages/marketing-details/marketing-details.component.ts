import {Component, OnInit} from '@angular/core';
import {MarketingService} from '../../../../services/entities/marketing.service';
import {CrudShow} from '../../../../interfaces/crud.interface';
import {ActivatedRoute} from '@angular/router';
import {MarketingShowItem, MarketingShowResponse} from '../../../../interfaces/marketing.interface';
import {MARKETING_CONTACT_STATUS} from "../../../../enums/marketing-contact-status";

interface Metrics {
  waiting: number | undefined;
  sent: number | undefined;
  not_sent: number | undefined;
}

@Component({
  selector: 'app-marketing-details',
  templateUrl: './marketing-details.component.html',
  styleUrls: ['./marketing-details.component.scss']
})
export class MarketingDetailsComponent implements OnInit, CrudShow {
  public dataSource: MarketingShowItem | undefined;
  public metrics?: Metrics;

  constructor(private service: MarketingService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getDataSource(params.id));
  }

  getDataSource(id: string): void {
    this.service.show(id).subscribe((response: MarketingShowResponse) => {
      this.dataSource = response.Dados;
      this.getMetricsByStatus();
    });
  }

  getMetricsByStatus(): void {
    this.metrics = {
      waiting: this.dataSource?.Importacao?.filter(item => item.Status === MARKETING_CONTACT_STATUS.AGUARDANDO_ENVIO)?.length,
      sent: this.dataSource?.Importacao?.filter(item => item.Status === MARKETING_CONTACT_STATUS.ENVIADO).length,
      not_sent: this.dataSource?.Importacao?.filter(item => item.Status === MARKETING_CONTACT_STATUS.NAO_ENVIADO).length,
    };
  }
}
