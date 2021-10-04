import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {MARKETING_CONTACT_STATUS} from '../enums/marketing-contact-status';

@Pipe({
  name: 'getMarketingContactStatusTitle'
})
export class GetMarketingContactStatusTitlePipe implements PipeTransform {
  constructor() { }

  transform(status: number|undefined): string {
    switch (status) {
      case MARKETING_CONTACT_STATUS.AGUARDANDO_ENVIO: return 'Aguardando Envio';
      case MARKETING_CONTACT_STATUS.ENVIADO:          return 'Enviado';
      case MARKETING_CONTACT_STATUS.NAO_ENVIADO:      return 'Não enviado';
      default:                                        return 'Não definido';
    }
  }
}

@NgModule({
  declarations: [
    GetMarketingContactStatusTitlePipe,
  ],
  exports: [
    GetMarketingContactStatusTitlePipe
  ],
  providers: [
    GetMarketingContactStatusTitlePipe
  ]
})
export class GetMarketingContactStatusTitleModule { }
