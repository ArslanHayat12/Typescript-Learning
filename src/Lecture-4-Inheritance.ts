/*

* Creating an abstract class
* Extending it with another class
* Override a method and a constructor


*/

interface ICompany {
    readonly companyName:string;
    companyDescription():void;
    companyEmployee(employeeName:string):void;
}

function CompanyDetails(company:ICompany):void{
    console.log("CompanyName: "+company.companyName);
    company.companyDescription();
    company.companyEmployee("Larry");
}

//A simple class whose instance cannot be created and we cannot create a variable

abstract class Company implements ICompany{
    constructor (public companyName:string){

    }
    abstract companyDescription():void;
    
    companyEmployee(employeeName:string):void{
        console.log(employeeName)
    }

}
class Google extends Company{
    constructor(){
        super("Larry");
    }
    companyDescription():void{
        console.log("Google child of ABC")
    }
    companyEmployee(employeeName:string):void{
        if(employeeName==="Larry"){
            console.log("CEO")
        }else{
            console.log("Unknown Designation");
        }
    }
}
CompanyDetails(new Google());