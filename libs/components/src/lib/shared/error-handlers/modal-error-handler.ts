import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalErrorHandler implements ErrorHandler {
  constructor() {
  }

  handleError(error: any): void {
  }
}
