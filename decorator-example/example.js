// based on https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/#:~:text=Automatic%20error%20guard
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var minimumFuel = function (fuel) { return function (target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.fuel > fuel) {
            originalMethod.apply(this, args);
        }
        else {
            console.log("Not enough fuel!");
        }
    };
    return descriptor;
}; };
var Rocket = /** @class */ (function () {
    function Rocket() {
        this.fuel = 50;
    }
    Rocket.prototype.launchToMars = function () {
        console.log("Launching to Mars in 3... 2... 1... 🚀");
    };
    __decorate([
        minimumFuel(100) // <- this is the decorator
    ], Rocket.prototype, "launchToMars", null);
    return Rocket;
}());
console.log('Building rocket.');
var rocket = new Rocket();
rocket.launchToMars();
console.log('Setting fuel to 101.');
rocket.fuel = 101;
rocket.launchToMars();
