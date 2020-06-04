import { ShApiConfig } from '../sh-api-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class Controller {
  protected constructor(private http: HttpClient,
                        private config: ShApiConfig) {
  }

  protected post(path: string, body: any, ...params): Observable<any> {
    return this.http.post(this.config.apiBase + path, body, ...params);
  }
}
