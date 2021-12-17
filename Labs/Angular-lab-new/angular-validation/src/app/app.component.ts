import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inheritForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inheritForm = this.fb.group({});
  }
}
