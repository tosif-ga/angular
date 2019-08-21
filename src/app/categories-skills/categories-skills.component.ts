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
  categories: any;
  rows: any;
  columns: any;
  categoreList: any;
  page = new Page();

  constructor(private fb: FormBuilder, private categoryskillService: CategoriesSkillsService, private spinner: NgxSpinnerService,
              private toastr: ToastrService) {
    this.formCategory();
    this.columns = [
      { prop: 'name' }
    ];
    this.page.pageNo = 1;
    this.page.size = 5;
  }

  ngOnInit() {
    this.getCategories({ offset: 0 });
  }

  formCategory() {
    this.categoryForm = this.fb.group({
      category: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  getCategories(pageInfo) {
    this.spinner.show();
    this.page.pageNo = pageInfo.offset;
    this.categoryskillService.getCategories(this.page).subscribe(response => {
      this.categories = response;
      if (this.categories.success) {
        this.rows = this.categories.data.categories;
        this.categoreList = this.categories.data.categories;
        console.log(this.categoreList);
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
        this.spinner.hide();
      } else {
        console.log('else');
      }
    });
  }

}
