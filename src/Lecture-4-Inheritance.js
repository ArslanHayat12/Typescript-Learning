/*

* Creating an abstract class
* Extending it with another class
* Override a method and a constructor


*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function CompanyDetails(company) {
    console.log("CompanyName: " + company.companyName);
    company.companyDescription();
    company.companyEmployee("Larry");
}
//A simple class whose instance cannot be created and we cannot create a variable
var Company = /** @class */ (function () {
    function Company(companyName) {
        this.companyName = companyName;
    }
    Company.prototype.companyEmployee = function (employeeName) {
        console.log(employeeName);
    };
    return Company;
}());
var Google = /** @class */ (function (_super) {
    __extends(Google, _super);
    function Google() {
        return _super.call(this, "Larry") || this;
    }
    Google.prototype.companyDescription = function () {
        console.log("Google child of ABC");
    };
    Google.prototype.companyEmployee = function (employeeName) {
        if (employeeName === "Larry") {
            console.log("CEO");
        }
        else {
            console.log("Unknown Designation");
        }
    };
    return Google;
}(Company));
CompanyDetails(new Google());
