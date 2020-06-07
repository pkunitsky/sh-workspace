import { Component, OnInit } from '@angular/core';
import { ShMockApiService } from '../sh-mock-api.service';

@Component({
  selector: 'sh-api-switcher',
  templateUrl: './api-switcher.component.html',
  styleUrls: ['./api-switcher.component.css']
})
export class ApiSwitcherComponent implements OnInit {

  constructor(public mockApiService: ShMockApiService) { }

  ngOnInit(): void {
  }

  switchApi() {
    if (this.mockApiService.isEnabled) {
      this.mockApiService.disable();
    } else {
      this.mockApiService.enable();
    }
  }

}
