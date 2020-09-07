import { TestBed } from '@angular/core/testing';

import { BlockchainCommunicationService } from './blockchain-communication.service';

describe('BlockchainCommunicationService', () => {
  let service: BlockchainCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockchainCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
