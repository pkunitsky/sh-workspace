import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FaviconService {
  readonly defaultHref = 'assets/favicon/favicon.ico';
  readonly folder = 'assets/favicon';

  constructor(@Inject(DOCUMENT) public document: Document) {
  }

  changeFavicon(dayNumber?: number) {
    document.querySelector('link[rel="shortcut icon"]').setAttribute('href', dayNumber ? `${this.folder}/${dayNumber}/favicon.ico`
      : this.defaultHref);
  }
}
