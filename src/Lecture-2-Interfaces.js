var student = {
    studentName: "ABC",
    getDetails: function (callback) {
        callback(true);
    }
};
//student.studentName="XYZ"//readonly error
student.getDetails(function () {
    console.log("here");
});
var activity = {
    isInvolvedInSports: true,
    studentName: "XYZ"
};
console.log(activity);
