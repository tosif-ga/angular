import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectOptionComponent),
      multi: true
    }
  ]
})
export class SelectOptionComponent implements OnInit {
  @Input() items: Array<any>;
  @Input() bindValue = '_id';
  @Input() bindLabel = 'name';

  constructor() { }

  ngOnInit() {
  }

}
