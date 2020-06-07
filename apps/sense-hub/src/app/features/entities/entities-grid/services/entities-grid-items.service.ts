import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  EntitiesControllerPaths,
  EntitiesControllerService,
  EntitiesFilter,
  Entity, EntityListResponse
} from '@workspace-sense-hub/sh-api';
import { flatMap, map, mergeMap, tap } from 'rxjs/operators';
import { clone } from '../../../../../../../../libs/components/src/lib/shared/utils';
import { ShMockApiService } from '@workspace-sense-hub/sh-mock-api';

@Injectable({
  providedIn: 'root'
})
export class EntitiesGridItemsService {
  public readonly items$ = new BehaviorSubject<Array<Entity>>(null);

  constructor(private entitiesControllerService: EntitiesControllerService,
              private mockApiService: ShMockApiService) {
  }

  private get items(): Array<Entity> {
    return this.items$.getValue();
  }

  private set items(v: Array<Entity>) {
    this.items$.next(v);
  }

  /**
   * perform request, set table items
   * @param entitiesFilter
   */
  initialize(entitiesFilter: EntitiesFilter): Observable<any> {
    return this.entitiesControllerService
      .getEntities(entitiesFilter)
      .pipe(map((response: EntityListResponse) => {
        this.items = response.result;
        return response.result;
      }));
  }

  /**
   * perform request, add item to table
   * @param entity
   */
  addItem(entity: Entity): Observable<any> {
    return this.entitiesControllerService
      .postEntity(entity)
      .pipe(tap(() => {
        this.items$.next([...this.items$.getValue(), entity])
      }));
  }

  /**
   * perform request, update table item
   * @param entity
   */
  updateItem(entity: Entity) {
    return this.entitiesControllerService
      .patchEntity(entity)
      .pipe(tap(() => {
        this.entitiesControllerService.patchEntity(entity).subscribe(() => {
          let _items = clone(this.items);
          const index = _items.findIndex(entty => entty.animalId === entity.animalId);

          if (index !== -1) {
            _items = _items.filter(entty => entty.animalId !== entity.animalId);
            _items.splice(index, 0, entity);
            this.items = _items;
          }
        });
      }));
  }

  /**
   * perform request, delete table item
   * @param id
   */
  deleteItem(id: any) {
    return this.entitiesControllerService
      .deleteEntityById(id)
      .pipe(tap(() => {
        this.items = this.items.filter(entty => entty.animalId !== id);
      }));
  }
}
