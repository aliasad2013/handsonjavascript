import { TestBed } from '@angular/core/testing';

import { ID3Service } from './id3.service';

describe('ID3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ID3Service = TestBed.get(ID3Service);
    expect(service).toBeTruthy();
  });
});
