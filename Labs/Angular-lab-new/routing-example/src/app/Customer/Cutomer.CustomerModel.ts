import { NgForm,FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

//ccc
//Create:- we create the validation Object Model
//Connect:-We Connect the validation to the UI
//Check:- IsValid,IsDirty

export class Customer{
    CustomerCode:string="";
    CustomerName:string="";
    CustomerAmount:number=0;
    CustomerEmail:string="";
    id:number=0;
    formCustomerGroup:FormGroup; //Create object of FormGroup

    constructor(){
        var _builder=new FormBuilder();
        this.formCustomerGroup=_builder.group({});//use this builder to create
        //controls-->validations
        this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));
       
        //4 letter Numberic
        var Validationcollection=[];
        Validationcollection.push(Validators.required);
       // Validationcollection.push(Validators.pattern('^[0-9]{4,4}$'));
        this.formCustomerGroup.addControl("CustomerEmailControl",new FormControl('',Validators.compose(Validationcollection)));
    }
}