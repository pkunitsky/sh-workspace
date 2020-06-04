import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchComponentBase } from '../search.utils';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'compact-search',
  templateUrl: './compact-search.component.html',
  styleUrls: ['./compact-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompactSearchComponent extends SearchComponentBase {
  constructor(router: Router,
              cd: ChangeDetectorRef,
              route: ActivatedRoute) {
    super(router, cd, route);
  }
}
