import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  constructor(protected http: HttpClient) { }

  public index(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/ws/marketing/campanhas`);
  }

  public show(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/ws/marketing/${id}`);
  }
}
