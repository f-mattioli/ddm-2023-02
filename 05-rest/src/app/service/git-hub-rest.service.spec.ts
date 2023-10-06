import { TestBed } from '@angular/core/testing';

import { GitHubRestService } from './git-hub-rest.service';

describe('GitHubRestService', () => {
  let service: GitHubRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
