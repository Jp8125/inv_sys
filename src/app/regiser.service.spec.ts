import { TestBed } from '@angular/core/testing';

import { RegiserService } from './regiser.service';

describe('RegiserService', () => {
  let service: RegiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
