import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const data = [
  {id: 1, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
  {id: 2, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
  {id: 3, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
  {id: 4, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
  {id: 5, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
  {id: 6, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
  {id: 7, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
  {id: 8, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
  {id: 9, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
  {id: 10, date: '2021-07-27 04:12', title: 'lala', scheduling_date: '2021-07-27 04:12', status: 'Completo'},
];

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  constructor(protected http: HttpClient) { }

  public index(): Observable<any> {
    return new Observable(observer => observer.next({data}));
    // return this.http.get(`${environment.apiUrl}/ws/marketing/campanhas`);
  }

  public show(id: string): Observable<any> {
    const dataItem = data.find(item => `${item.id}` === id);
    return new Observable(observer => observer.next({
      data: {
        ...dataItem,
        waiting: 1,
        sent: 21,
        not_sent: 0,
        message: 'Oi, {var1}, tudo bem?\n\nestou entrando em contato para confirmar nossa demonstração de {var3} às {var2}',
        contacts: [
          {contact: '55818955985', send_date: '2021-09-01 15:02', status: 'Enviado', variables: 'Eudes,10h,sexta-feira'},
          {contact: '55818955985', send_date: '2021-09-01 15:02', status: 'Enviado', variables: 'Eudes,10h,sexta-feira'},
          {contact: '55818955985', send_date: '2021-09-01 15:02', status: 'Enviado', variables: 'Eudes,10h,sexta-feira'},
          {contact: '55818955985', send_date: '2021-09-01 15:02', status: 'Enviado', variables: 'Eudes,10h,sexta-feira'},
          {contact: '55818955985', send_date: '2021-09-01 15:02', status: 'Enviado', variables: 'Eudes,10h,sexta-feira'},
        ]
      },
    }));
    // return this.http.get(`${environment.apiUrl}/ws/marketing/${id}`);
  }
}
