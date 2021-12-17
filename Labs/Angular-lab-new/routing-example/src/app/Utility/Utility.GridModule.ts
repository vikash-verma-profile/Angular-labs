import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './Utility.GridComponent';

@NgModule({
  declarations: [GridComponent],
  imports: [CommonModule],
  exports: [GridComponent,CommonModule],
})
export class GridUIModule {}
