//Basic Types
let studentName:string="";
let studentAge:number=10;
let isMarried:boolean=false;
let subjects:string[]=["Math","English"];


//Function
function getDetails ():void{
    console.log("getDetails");
    return;
}

getDetails();


//Enums
enum ErrorCode{
    SERVER_ERROR=500
}

let error=ErrorCode.SERVER_ERROR;
console.log(error)


//Tuples

let tuple:[number,string]=[123,"test"];
console.log(tuple[0])
function getTuple ():[number,string]{
    return [123,"test"];
}
getTuple();
