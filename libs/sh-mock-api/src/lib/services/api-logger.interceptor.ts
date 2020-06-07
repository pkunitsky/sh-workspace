import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { EntitiesControllerPaths, ShApiConfig } from '@workspace-sense-hub/sh-api';
import { LoggingService, LogType } from '@workspace-sense-hub/logging';
import { catchError, tap } from 'rxjs/operators';
import { ShMockApiService } from '../services/sh-mock-api.service';

@Injectable()
export class ApiLoggerInterceptor implements HttpInterceptor {

  constructor(private config: ShApiConfig,
              private loggingService: LoggingService,
              private mockApiService: ShMockApiService) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(req.url.replace(this.config.apiBase, this.mockApiService.apiBase));
    console.log(req.url);
    const request = this.mockApiService.isEnabled ? req.clone({url: req.url.replace(this.config.apiBase, this.mockApiService.apiBase)})
      : req;
    const path = this.mockApiService.formatRequestUrl(request);
    const isEntityControllerApiCall = Object.values(EntitiesControllerPaths).some(entityControllerPath => path.includes(entityControllerPath));

    if (isEntityControllerApiCall) {
      this.notifyRequest(request);
    }

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (isEntityControllerApiCall) {
            this.notifyResponse(request);
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.notifyError(request);
        return throwError(error);
      })
    );
  }

  notifyRequest(request) {
    this.loggingService.publishLog(LogType.Information, `${request.method} ${request.url}`);
  }

  notifyResponse(request) {
    this.loggingService.publishLog(LogType.Success, `${request.method} ${request.url} success!`);
  }

  notifyError(request) {
    this.loggingService.publishLog(LogType.Error, `${request.method} ${request.url} error!`);
  }

}
