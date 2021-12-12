//access modifiers
//private public and protected

//private
export class Encapsulate{
    private sample:string="somevalue";
    protected sample1:string="somevalue1";
}
var ObjectSamle=new Encapsulate();

//console.log(ObjectSamle.sample1);
//console.log(ObjectSamle.sample);


class EncapsulateDerived extends Encapsulate{

    Display(){
        console.log(this.sample1);
        //console.log(this.);
    }
}

interface ILoan{
interest:Number;
}

class AgriLoan implements ILoan{
    interest:Number;
    rebate:Number;
    constructor(_interest:Number,_rebate:Number) {
        this.interest=_interest;
        this.rebate=_rebate;
    }
}

var objA=new AgriLoan(10,1);
console.log("Interest is :"+objA.interest+"Rebate is :"+objA.rebate);