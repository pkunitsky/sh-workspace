import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'semantic-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() className = 'mini ui button';

  ngOnInit(): void {
  }

}
