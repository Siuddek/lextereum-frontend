import { TestBed } from '@angular/core/testing';

import { DocumentParsingService } from './document-parsing.service';

describe('DocumentParsingService', () => {
  let service: DocumentParsingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentParsingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
