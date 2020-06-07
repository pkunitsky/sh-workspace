import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Entity } from '@workspace-sense-hub/sh-api';
import { EntityViewModalService } from './entity-view-modal.service';

@Component({
  selector: 'sh-entity-view-modal',
  templateUrl: './entity-view-modal.component.html',
  styleUrls: ['./entity-view-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntityViewModalComponent implements OnInit {
  readonly Object = Object;

  constructor(private entityViewModalService: EntityViewModalService) { }

  @Input() entity: Entity;
  @Input() anchor: HTMLElement;
  @Output() closeOut = new EventEmitter();

  ngOnInit(): void {
  }

  handleClose() {
    this.entityViewModalService.closeModal();
    this.closeOut.emit();
  }

}
