import { NgForm,FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

//ccc
//Create:- we create the validation Object Model
//Connect:-We Connect the validation to the UI
//Check:- IsValid,IsDirty

export class Customer{
    CustomerCode:string="";
    CustomerName:string="";
    CustomerAmount:number=0;

    formCustomerGroup:FormGroup; //Create object of FormGroup

    constructor(){
        var _builder=new FormBuilder();
        this.formCustomerGroup=_builder.group({});//use this builder to create
        //controls-->validations
        this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));
    }
}