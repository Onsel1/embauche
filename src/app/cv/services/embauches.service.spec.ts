import { TestBed } from '@angular/core/testing';

import { EmbauchesService } from './embauches.service';

describe('EmbauchesService', () => {
  let service: EmbauchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbauchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
