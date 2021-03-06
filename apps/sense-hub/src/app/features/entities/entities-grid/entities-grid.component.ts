import { Component, OnDestroy, OnInit } from '@angular/core';
import { Entity } from '@workspace-sense-hub/sh-api';
import { EntitiesGridItemsService } from '../entity-services/entities-grid-items.service';
import { EntitiesGridFields } from './entities-grid-fields.enum';
import { ShMockApiService } from '@workspace-sense-hub/sh-mock-api';
import { Subscription } from 'rxjs';
import { LoggingService, LogType } from '@workspace-sense-hub/logging';
import { clone, default_scrollbar_height } from '@workspace-sense-hub/components';
import { EntityViewModalService } from '../entity-view-modal/entity-view-modal.service';

export function trackEntityBy(index, entity: Entity) {
  return `${index}-${entity.animalId}`;
}

@Component({
  selector: 'sh-entities-grid',
  templateUrl: './entities-grid.component.html',
  styleUrls: ['./entities-grid.component.scss']
})
export class EntitiesGridComponent implements OnInit, OnDestroy {
  readonly trackEntityBy = trackEntityBy;
  readonly EntitiesGridFields = EntitiesGridFields;
  readonly default_scrollbar_height = default_scrollbar_height;

  private subs = new Subscription();

  constructor(public entitiesGridItemsService: EntitiesGridItemsService,
              private mockApiService: ShMockApiService,
              private loggingService: LoggingService,
              public entityViewModalService: EntityViewModalService) {
  }

  entities$;

  ngOnInit(): void {
    this.mockApiService.enable();
    this.subs.add(this.mockApiService.isEnabled$.subscribe((isEnabled: boolean) => {
      this.entities$ = this.entitiesGridItemsService.initialize({ page: 0, perPage: 100 });
      this.loggingService.publishLog(LogType.Information, `currently using ${isEnabled ? 'offline API': 'online API'}`)
    }));
  }

  handleResponse(response) {
    this.loggingService.publishLog(LogType.Information, `fetched ${response.length} entries`)
  }

  patchValue(entity: Entity, index: number, fieldName: EntitiesGridFields, value: string) {
    const _entity = clone(entity);
    _entity[fieldName] = value;
    this.entitiesGridItemsService.updateItem(_entity, index).subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
