import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpClient
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EntitiesControllerPaths } from '@workspace-sense-hub/sh-api';
import { Entity, ShApiConfig } from '@workspace-sense-hub/sh-api';
import { delay } from 'rxjs/operators';
import { ShMockApiService } from '../sh-mock-api.service';
import { entityListResponse } from '../responses/entity-list-response';

export function makeMockResponse(statusCode: number, body: any, delayInterval: number): Observable<any> {
  return of(new HttpResponse({status: 200, body: body})).pipe(delay(delayInterval))
}

@Injectable()
export class ShMockApiInterceptor implements HttpInterceptor {
  constructor(private config: ShApiConfig,
              private http: HttpClient,
              private mockApiService: ShMockApiService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.mockApiService.isEnabled) {
      switch (this.config.apiBase ? request.url.replace(this.config.apiBase, '') : request.url) {
        case EntitiesControllerPaths.load: return makeMockResponse(200, entityListResponse, 300);
        case EntitiesControllerPaths.update: return makeMockResponse(200, request.body, 300);
        case EntitiesControllerPaths.remove: return makeMockResponse(200, request.body, 0);
        case EntitiesControllerPaths.add: return makeMockResponse(200, request.body, 300);
      }
    }

    return next.handle(request);
  }

}
