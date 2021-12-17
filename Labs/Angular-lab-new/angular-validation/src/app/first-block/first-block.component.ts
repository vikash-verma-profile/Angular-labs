import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseFormcomponent } from '../base-form.component';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.scss']
})
export class FirstBlockComponent extends BaseFormcomponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl('firstName', new FormControl('', [Validators.required]));
  }

}
