// http://www.talkingdotnet.com/how-to-set-html-meta-tags-using-angular-4/

import { Meta, Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title,
              private meta: Meta) {
  }

  set(title: string, description?: string) {
    this.title.setTitle(`${title}`);
    this.meta.addTag({name: 'description', content: description});
  }
}
