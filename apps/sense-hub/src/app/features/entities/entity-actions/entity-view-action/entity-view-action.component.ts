import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Entity } from '@workspace-sense-hub/sh-api';
import { EntityViewModalService } from '../../entity-view-modal/entity-view-modal.service';

@Component({
  selector: 'sh-entity-view-action',
  templateUrl: './entity-view-action.component.html',
  styleUrls: ['./entity-view-action.component.scss']
})
export class EntityViewActionComponent implements OnInit {

  constructor(private entityViewModalService: EntityViewModalService,
              private element: ElementRef) { }

  @Input() entity: Entity;

  ngOnInit(): void {
  }

  execute($event): void {
    $event.stopPropagation();
    this.entityViewModalService.openModal(this.entity, this.element.nativeElement);
  }

}
