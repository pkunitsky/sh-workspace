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

@Injectable()
export class ApiLoggerInterceptor implements HttpInterceptor {

  constructor(private config: ShApiConfig,
              private loggingService: LoggingService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const path = this.config.apiBase ? request.url.replace(this.config.apiBase, '') : request.url;
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
    console.log(request);
    this.loggingService.publishLog(LogType.Information, `${request.method} ${request.url}`);
  }

  notifyResponse(request) {
    this.loggingService.publishLog(LogType.Success, `${request.method} ${request.url} success!`);
  }

  notifyError(request) {
    this.loggingService.publishLog(LogType.Error, `${request.method} ${request.url} error!`);
  }

}
