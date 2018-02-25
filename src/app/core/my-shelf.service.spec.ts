import { TestBed, inject } from '@angular/core/testing';

import { MyShelfService } from './my-shelf.service';

describe('MyShelfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyShelfService]
    });
  });

  it('should be created', inject([MyShelfService], (service: MyShelfService) => {
    expect(service).toBeTruthy();
  }));
});
