import { Entity } from './entity';

export class EntityListResponse {
  constructor(public offset: number,
              public limit: number,
              public total: number,
              public result: Array<Entity>) {
  }
}
