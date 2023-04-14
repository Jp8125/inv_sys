import { TestBed } from '@angular/core/testing';

import { ObjectParserService } from './object-parser.service';

describe('ObjectParserService', () => {
  let service: ObjectParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
