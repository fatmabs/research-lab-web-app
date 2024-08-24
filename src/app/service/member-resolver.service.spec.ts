import { TestBed } from '@angular/core/testing';

import { MemberResolverService } from './member-resolver.service';

describe('MemberResolverService', () => {
  let service: MemberResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
