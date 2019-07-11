/*
* public/private functions and fields
* static fields and functions
* define properties using get and set
* readonly properties
*/
var Car = /** @class */ (function () {
    function Car(brandName) {
        this.brandName = brandName;
    }
    Car.prototype.startCar = function () {
    };
    Car.prototype._startEngine = function () {
        //cannot be accessed outside the class
    };
    Object.defineProperty(Car.prototype, "getModel", {
        get: function () {
            return this.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setModel", {
        set: function (model) {
            this.model = model;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var car = new Car("Corolla");
car.setModel = 21312;
console.log(car.brandName, car.getModel);
