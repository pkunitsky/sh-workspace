import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

const templates = new Map<string, BehaviorSubject<string>>();

@Directive({
  selector: 'svg[source]'
})
export class SvgSourceDirective implements OnInit, OnDestroy {

  constructor(private element: ElementRef,
              private http: HttpClient,
              private renderer2: Renderer2,
              private domSanitizer: DomSanitizer
  ) {
  }

  @Input() private source: string;

  private subs = new Subscription();

  ngOnInit() {
    if (this.source) {
      if (!templates.has(this.source)) {
        const icon$ = new BehaviorSubject(null);
        templates.set(this.source, icon$);
        this.http.get(this.source, {responseType: 'text'}).subscribe((html: string) => {
          icon$.next(html);
        });
      }
      this.subs.add(templates.get(this.source).subscribe((html: string) => {
        if (html) {
          const divElement = this.renderer2.createElement('div');
          divElement.innerHTML = this.domSanitizer.bypassSecurityTrustHtml(html);
          this.element.nativeElement.innerHTML = divElement.querySelector('svg').innerHTML;
          this.renderer2.setAttribute(this.element.nativeElement, 'xmlns', 'www.w3.org/2000/svg');
          this.renderer2.setAttribute(this.element.nativeElement, 'viewBox', divElement.querySelector('svg').getAttribute('viewBox'));
        } else {
          this.element.nativeElement.innerHTML = '';
        }
      }));
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
