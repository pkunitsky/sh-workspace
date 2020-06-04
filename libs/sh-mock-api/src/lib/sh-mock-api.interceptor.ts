import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EntitiesControllerPaths } from '../../../sh-api/src/lib/controllers/entities-controller/entities-controller-paths';
import { ShApiConfig } from '@workspace-sense-hub/sh-api';
import { entityListResponse } from './utils/entity-list-response';
import { delay } from 'rxjs/operators';

export function makeMockResponse(statusCode: number, body: any, delayInterval: number): Observable<any> {
  return of(new HttpResponse({status: 200, body: body})).pipe(delay(delayInterval))
}

@Injectable()
export class ShMockApiInterceptor implements HttpInterceptor {
  readonly mockRequestDelay = 1000;

  constructor(private config: ShApiConfig) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const requestPath = this.config.apiBase ? request.url.replace(`/`, '')
      : request.url;

    switch (requestPath) {
      case EntitiesControllerPaths.load:
        return makeMockResponse(200, entityListResponse, 2000);
      case EntitiesControllerPaths.update:
        return makeMockResponse(200, null, 2000);
      case EntitiesControllerPaths.remove:
        return makeMockResponse(200, null, 0);
      case EntitiesControllerPaths.add:
        return makeMockResponse(200, null, 2000);
    }

    return next.handle(request);
  }

}
