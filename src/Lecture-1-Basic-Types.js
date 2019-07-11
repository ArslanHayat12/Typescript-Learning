//Basic Types
var studentName = "";
var studentAge = 10;
var isMarried = false;
var subjects = ["Math", "English"];
//Function
function getDetails() {
    console.log("getDetails");
    return;
}
getDetails();
//Enums
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(ErrorCode || (ErrorCode = {}));
var error = ErrorCode.SERVER_ERROR;
console.log(error);
//Tuples
var tuple = [123, "test"];
console.log(tuple[0]);
function getTuple() {
    return [123, "test"];
}
getTuple();
