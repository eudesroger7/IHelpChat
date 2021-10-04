import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {startLoading, stopLoading} from '../../state/actions/loading.action';
import {Store} from '@ngrx/store';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<{ loading: boolean }>
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: environment.authToken,
        'Access-Control-Allow-Origin': '*',
      },
    });
    this.store.dispatch(startLoading());
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('request finish');
            this.store.dispatch(stopLoading());
            if (event.body.error) {
              throw event;
            }
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            this.store.dispatch(stopLoading());
          }
        }
      )
    );
  }
}
