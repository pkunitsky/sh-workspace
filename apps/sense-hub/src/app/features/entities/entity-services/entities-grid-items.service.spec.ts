import { TestBed } from '@angular/core/testing';

import { EntitiesGridItemsService } from './entities-grid-items.service';

describe('EntitiesGridStateService', () => {
  let service: EntitiesGridItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntitiesGridItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
