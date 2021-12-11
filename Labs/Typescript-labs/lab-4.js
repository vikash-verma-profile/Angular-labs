//Classes and Objects
var class_name = /** @class */ (function () {
    function class_name() {
    }
    return class_name;
}());
var Car = /** @class */ (function () {
    function Car(_engine) {
        this.engine = _engine;
    }
    Car.prototype.Display = function () {
        console.log("Engine value is " + this.engine);
    };
    return Car;
}());
var obj = new Car("BS6");
obj.Display();
