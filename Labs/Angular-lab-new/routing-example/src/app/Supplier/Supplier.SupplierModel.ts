import { NgForm,FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

//ccc
//Create:- we create the validation Object Model
//Connect:-We Connect the validation to the UI
//Check:- IsValid,IsDirty

export class Supplier{
    SupplierCode:string="";
    SupplierName:string="";
    SupplierAmount:number=0;
    SupplierEmail:string="";
    id:number=0;
    formSupplierGroup:FormGroup; //Create object of FormGroup

    constructor(){
        var _builder=new FormBuilder();
        this.formSupplierGroup=_builder.group({});//use this builder to create
        //controls-->validations
        this.formSupplierGroup.addControl("SupplierNameControl",new FormControl('',Validators.required));
       
        //4 letter Numberic
        var Validationcollection=[];
        Validationcollection.push(Validators.required);
       // Validationcollection.push(Validators.pattern('^[0-9]{4,4}$'));
        this.formSupplierGroup.addControl("SupplierEmailControl",new FormControl('',Validators.compose(Validationcollection)));
    }
}