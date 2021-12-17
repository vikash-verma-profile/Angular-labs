import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseFormcomponent } from '../base-form.component';

@Component({
  selector: 'app-second-block',
  templateUrl: './second-block.component.html',
  styleUrls: ['./second-block.component.scss']
})
export class SecondBlockComponent extends BaseFormcomponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl('lastName', new FormControl('', [Validators.required]));
  }

}
