/*
* public/private functions and fields
* static fields and functions
* define properties using get and set
* readonly properties
*/

class Car{
    public brandName:string;
    private model!:number;
    constructor(brandName:string){
        this.brandName=brandName;
    } 
    public startCar():void{

    }
    private _startEngine():void{
        //cannot be accessed outside the class
    }

    public get getModel():number{
        return this.model;
    }
    public set setModel(model:number){
        this.model=model;
    }

}
let car=new Car("Corolla");
car.setModel=21312;
console.log(car.brandName,car.getModel); 