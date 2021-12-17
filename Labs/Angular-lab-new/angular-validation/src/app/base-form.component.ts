import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-base-form',
  template: ''
})
export class BaseFormcomponent {

  parentFormGroups: FormGroup;
  @Input("parentFormGroup") 
  set setFormGroup(_parentform:FormGroup){
    this.parentFormGroups=_parentform;
  }
  

  isValid(controlName: string): boolean {
    return this.parentFormGroup.get(controlName).valid;
  }

  isTouched(controlName: string): boolean {
    return this.parentFormGroup.get(controlName).touched;
  }
}
