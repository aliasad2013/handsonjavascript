import { TestBed } from '@angular/core/testing';

import { TrieService } from './trie.service';

describe('TrieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrieService = TestBed.get(TrieService);
    expect(service).toBeTruthy();
  });
});
