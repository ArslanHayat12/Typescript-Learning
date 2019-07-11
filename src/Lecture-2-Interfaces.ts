/*

* Adding regular/readonly/optional properties and functions.
* Function interfaces
* Interface declaration merging
* Anonymous interfaces
* Extending interfaces

*/


//Basic Interfaces
interface Students {
   readonly studentName?:string,
    getDetails?:((callback:DetailsCallbak)=>void ) | any
}
interface DetailsCallbak{
    (success:boolean):void
}

let student:Students={
    studentName:"ABC",
    getDetails:(callback:DetailsCallbak)=>{
        callback(true)
    }
}
//student.studentName="XYZ"//readonly error
student.getDetails(()=>{
    console.log("here")
})

//Extend Interface

interface Activity extends Students {
   isInvolvedInSports:boolean
 }

 let activity:Activity={
    isInvolvedInSports:true,
    studentName:"XYZ"
 };
 console.log(activity)


