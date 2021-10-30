import { TestBed } from '@angular/core/testing';

import { ENLACEService } from './enlace.service';

describe('ENLACEService', () => {
  let service: ENLACEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ENLACEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
