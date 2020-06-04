import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShApiConfig } from '../../sh-api-config';
import { Controller } from '../controller';
import { EntitiesControllerPaths } from './entities-controller-paths';
import { Entity } from '../../models/entity';
import { EntitiesFilter } from '../../models/entities-filter';

@Injectable({
  providedIn: 'root'
})
export class EntitiesControllerService extends Controller {
  constructor(http: HttpClient,
              config: ShApiConfig) {
    super(http, config);
  }

  postEntity(entity: Entity) {
    return this.post(EntitiesControllerPaths.add, null);
  }

  patchEntity(entity: Entity) {
    return this.post(EntitiesControllerPaths.update, entity);
  }

  deleteEntityById(id: any) {
    return this.post(EntitiesControllerPaths.remove, id);
  }

  getEntityById(id: number) {
    return this.post(EntitiesControllerPaths.load, id);
  }

  getEntities(entitiesFilter: EntitiesFilter) {
    return this.post(EntitiesControllerPaths.load, entitiesFilter);
  }

}
