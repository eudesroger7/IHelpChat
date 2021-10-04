import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {MARKETING_STATUS} from '../enums/marketing-status';

@Pipe({
  name: 'getMarketingStatusTitle'
})
export class GetMarketingStatusTitlePipe implements PipeTransform {
  constructor() { }

  transform(status: number|undefined): string {
    switch (status) {
      case MARKETING_STATUS.PENDENTE:  return 'Pendente';
      case MARKETING_STATUS.ENVIANDO:  return 'Enviando';
      case MARKETING_STATUS.ENVIADO:   return 'Enviado';
      case MARKETING_STATUS.CANCELADO: return 'Cancelado';
      default:                         return 'Não definido';
    }
  }
}

@NgModule({
  declarations: [
    GetMarketingStatusTitlePipe,
  ],
  exports: [
    GetMarketingStatusTitlePipe
  ],
  providers: [
    GetMarketingStatusTitlePipe
  ]
})
export class GetMarketingStatusTitleModule { }
