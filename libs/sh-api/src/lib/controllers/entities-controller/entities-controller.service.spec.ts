import { TestBed } from '@angular/core/testing';

import { EntitiesControllerService } from './entities-controller.service';

describe('EntityControllerService', () => {
  let service: EntitiesControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntitiesControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
