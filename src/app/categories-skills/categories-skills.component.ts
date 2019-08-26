import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { CategoriesSkillsService } from './categories-skills.service';
import { Page } from '../shared/model/page.model';

@Component({
  selector: 'app-categories-skills',
  templateUrl: './categories-skills.component.html',
  styleUrls: ['./categories-skills.component.scss']
})
export class CategoriesSkillsComponent implements OnInit {
  categoryForm: FormGroup;
  skillsForm: FormGroup;
  categories: any;
  skills: any;
  columnsCategory: any;
  columnsSkill: any;
  categoreList: any;
  skillsList: any;
  page = new Page();
  bindValue = '_id';
  bindLabel = 'name';

  constructor(private fb: FormBuilder, private categoryskillService: CategoriesSkillsService, private spinner: NgxSpinnerService,
              private toastr: ToastrService) {
    this.formCategory();
    this.formSkills();
    this.columnsCategory = [
      { prop: 'name' }
    ];
    this.columnsSkill = [
      { prop: 'name' }
    ];
    this.page.pageNo = 1;
    this.page.size = 5;
  }

  ngOnInit() {
    this.getCategories({ offset: 0 });
    this.getSkills({ offset: 0 });
  }

  formCategory() {
    this.categoryForm = this.fb.group({
      category: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  formSkills() {
    this.skillsForm = this.fb.group({
      skills: ['', [Validators.required]],
      category: [null, [Validators.required]]
    });
  }

  getCategories(pageInfo) {
    this.spinner.show();
    this.page.pageNo = pageInfo.offset;
    this.categoryskillService.getCategories(this.page).subscribe(response => {
      this.categories = response;
      if (this.categories.success) {
        this.categoreList = this.categories.data.categories;
        this.spinner.hide();
      }
    });
  }

  category() {
    this.spinner.show();
    this.categoryskillService.category(this.categoryForm.value).subscribe(response => {
      this.categories = response;
      if (this.categories.success) {
        this.toastr.success('Category has been saved successfully.', 'Success!');
        this.getCategories({ offset: 0 });
        this.categoryForm.reset();
        this.spinner.hide();
      } else {
        console.log('else');
      }
    });
  }

  getSkills(pageInfo) {
    this.spinner.show();
    this.page.pageNo = pageInfo.offset;
    this.categoryskillService.getSkills(this.page).subscribe(response => {
      this.skills = response;
      if (this.skills.success) {
        this.skillsList = this.skills.data.skills;
        this.spinner.hide();
      }
    });
  }

  skill() {
    this.spinner.show();
    this.categoryskillService.skills(this.skillsForm.value).subscribe(response => {
      this.categories = response;
      if (this.categories.success) {
        this.toastr.success('Skill has been saved successfully.', 'Success!');
        this.getCategories({ offset: 0 });
        this.skillsForm.reset();
        this.spinner.hide();
      } else {
        console.log('else');
      }
    });
  }

}
