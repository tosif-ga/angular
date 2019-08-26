import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { appConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriesSkillsService {
  constructor(private http: HttpClient) {}

  category(categoryData) {
    const category = {
      name: categoryData.category
    };
    return this.http
      .post(
        appConstants.baseUrl +
          appConstants.version +
          appConstants.api.categoryskill.category,
        category
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  skills(skillsData) {
    const skills = {
      name: skillsData.skills,
      categoryRef: skillsData.category
    };
    return this.http
      .post(
        appConstants.baseUrl +
          appConstants.version +
          appConstants.api.categoryskill.skill,
        skills
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  getCategories(pageInfo) {
    return this.http.get(appConstants.baseUrl + appConstants.version + appConstants.api.categoryskill.category,
      {params: {size: pageInfo.size, pageNo: pageInfo.pageNo} })
    .pipe(map(response => {
      return response;
    }));
  }

  getSkills(pageInfo) {
    return this.http.get(appConstants.baseUrl + appConstants.version + appConstants.api.categoryskill.skill,
      {params: {size: pageInfo.size, pageNo: pageInfo.pageNo} })
    .pipe(map(response => {
      return response;
    }));
  }
}
