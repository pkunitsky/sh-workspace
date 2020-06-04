import { Component, OnInit } from '@angular/core';
import { EntitiesControllerService } from '@workspace-sense-hub/sh-api';
import { EntityListResponse } from '@workspace-sense-hub/sh-api';
import { Entity } from '@workspace-sense-hub/sh-api';
import { clone } from '@workspace-sense-hub/components';
import { EntitiesTableFields } from './entities-table-fields';
import { tap } from 'rxjs/operators';
import { appearDisappear } from '../../../../../../libs/components/src/lib/shared/animations';

export function trackEntityBy(index, entity: Entity) {
  return entity.animalId;
}

@Component({
  selector: 'sh-entities-table',
  templateUrl: './entities-table.component.html',
  styleUrls: ['./entities-table.component.scss'],
  animations: [
    appearDisappear
  ]
})
export class EntitiesTableComponent implements OnInit {
  readonly EntitiesTableFields = EntitiesTableFields;
  readonly scrollContainerHeight = 500;
  readonly Object = Object;
  readonly trackEntityBy = trackEntityBy;

  constructor(private entityControllerService: EntitiesControllerService) {
  }

  isAddEntity;
  delete$;
  entities$;
  entityList: Array<Entity>;
  processedDeletionEntityId;

  ngOnInit(): void {
    this.entities$ = this.entityControllerService.getEntities({page: 0, perPage: 100});
  }

  handleResponse(entityListResponse: EntityListResponse) {
    this.entityList = entityListResponse.result;
  }

  patchEntity(entity: Entity, value: any, fieldName: string) {
    const _entity = clone(entity);
    let _entityList = clone(this.entityList);

    _entity[fieldName] = value;

    this.entityControllerService.patchEntity(_entity).subscribe(response => {
      const index = this.entityList.findIndex(ent => ent.animalId === _entity.animalId);

      if (index !== -1) {
        _entityList = _entityList.filter(e => e.animalId !== _entity.animalId);
        _entityList.splice(index, 0, _entity);
        this.entityList = _entityList;
      }
    });
  }

  deleteEntity(entity: Entity) {
    this.delete$ = this.entityControllerService.deleteEntityById(entity.animalId).pipe(tap(() => {
      this.processedDeletionEntityId = entity.animalId;
      this.entityList = this.entityList.filter(entty => entty.animalId !== entity.animalId);
    }));
  }

  handleAddResponse(entity) {
    this.isAddEntity = false;
    this.entityList.unshift(entity);
  }

}
