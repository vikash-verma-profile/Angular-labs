import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector:"grid-ui",
  templateUrl: './Utility.GridView.html'
})
export class GridComponent {

//for column names
 gridcolumns:Array<any>=new Array<any>();
 //for grid data
 griddata:Array<any>=new Array<any>();

@Input("grid-columns")
set setGridColumns(_gridColumns:Array<any>){
    this.gridcolumns=_gridColumns;
}
@Input("grid-data")
set setGridData(_gridData:Array<any>){
    this.griddata=_gridData;
}
@Output("grid-selected")
emitemitter:EventEmitter<any>=new EventEmitter<any>();

SelectGrid(_selected:any){
    this.emitemitter.emit(_selected);
}


}
