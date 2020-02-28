import { TestBed } from '@angular/core/testing';

import { ImageGetterService } from './image-getter.service';

describe('ImageGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageGetterService = TestBed.get(ImageGetterService);
    expect(service).toBeTruthy();
  });
});
