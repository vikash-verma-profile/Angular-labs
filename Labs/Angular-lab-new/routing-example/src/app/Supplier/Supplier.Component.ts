import { HttpClient } from '@angular/common/http';
import { Component,Injector } from '@angular/core';
import { BaseLogger } from '../Utility/Utility.Logger';
import { Supplier } from './Supplier.SupplierModel';

@Component({
  templateUrl: './Supplier.SupplierView.html'
})
export class SupplierComponent {
  LogObj:BaseLogger;
  SupplierModel:Supplier=new Supplier();
  SupplierModels:Array<Supplier>=new Array<Supplier>();

  constructor(_injector:Injector,public httpc:HttpClient){
    this.LogObj=_injector.get("2");
    this.LogObj.Log();
  }

  ngOnInit(){
    this.GetSupplierData();
    }
  GetSupplierData(){
    this.httpc.get("http://localhost:3000/Suppliers").subscribe(res=>this.SuceessGet(res),res=>this.ErrorGet(res));
  }
  SuceessGet(res:any){
   this.SupplierModels=res;
  }
  ErrorGet(res:any){
    console.log(res);
  }
  AddSupplier(){

    var custdto:any={};
    custdto.SupplierCode=this.SupplierModel.SupplierCode;
    custdto.SupplierEmail=this.SupplierModel.SupplierEmail;
    custdto.SupplierName=this.SupplierModel.SupplierName;
    custdto.SupplierAmount=this.SupplierModel.SupplierAmount;

    this.httpc.post("http://localhost:3000/Suppliers",custdto).subscribe(res=>this.Success(res),res=>this.Error(res))
    //console.log(this.SupplierModel);
  }

  Success(res:any)
  {
    this.GetSupplierData();
  }
  
  Error(res:any)
  {
    console.log(res);
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
      return this.SupplierModel.formSupplierGroup.controls[controlname].
      hasError(typeofvalidator);
  }

  GetSupplierDataByID(id:number){
    this.httpc.get("http://localhost:3000/Suppliers/"+id).subscribe(res=>this.SuceessGetByID(res),res=>this.ErrorGet(res));
  }
  SuceessGetByID(res:any){
    console.log(res);
    this.SupplierModel.SupplierAmount=res.SupplierAmount;
    this.SupplierModel.SupplierCode=res.SupplierCode;
    this.SupplierModel.SupplierEmail=res.SupplierEmail;
    this.SupplierModel.SupplierName=res.SupplierName;
  }
  EditSupplier(id:number){
    this.GetSupplierDataByID(id);
  }
}
