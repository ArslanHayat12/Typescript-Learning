//Basic Types
function test(name: any):[string]{
    console.log(name)
    return ["test"];

}
console.log(test("Test"));
interface newObject{
    readonly count:number,
    increment():number,
    decrement():number
}

let objectData:newObject={
    count:10,
    increment:()=>11,
    decrement:()=>9,

}
interface extendedObject extends newObject{
    test():void;
}

type Student={
    name:string,
    age?:number
}
type readOnlyData<T>={
     [P in keyof T]:T[P]
}
type age=readOnlyData<Student>;
let object=<age>{age:123};
object.name="test";
console.log(object)