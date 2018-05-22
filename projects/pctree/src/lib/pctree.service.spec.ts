import { TestBed, inject } from '@angular/core/testing';

import { PctreeService } from './pctree.service';

describe('PctreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PctreeService]
    });
  });

  it('should be created', inject([PctreeService], (service: PctreeService) => {
    expect(service).toBeTruthy();
  }));
});
