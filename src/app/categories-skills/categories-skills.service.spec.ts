import { TestBed } from '@angular/core/testing';

import { CategoriesSkillsService } from './categories-skills.service';

describe('CategoriesSkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesSkillsService = TestBed.get(CategoriesSkillsService);
    expect(service).toBeTruthy();
  });
});
