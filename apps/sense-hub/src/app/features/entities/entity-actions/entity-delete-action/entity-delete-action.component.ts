import { Component, Input, OnInit } from '@angular/core';
import { EntitiesControllerService, Entity } from '@workspace-sense-hub/sh-api';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EntitiesGridItemsService } from '../../entity-services/entities-grid-items.service';

@Component({
  selector: 'sh-entity-delete-action',
  templateUrl: './entity-delete-action.component.html',
  styleUrls: ['./entity-delete-action.component.scss']
})
export class EntityDeleteActionComponent implements OnInit {
  constructor(private entitiesGridItemsService: EntitiesGridItemsService) { }

  delete$: Observable<any>;

  @Input() entity: Entity;

  ngOnInit(): void {
  }

  execute() {
    this.delete$ = this.entitiesGridItemsService.deleteItem(this.entity.animalId);
  }

  handleResponse() {
  }

}
