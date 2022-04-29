var myclass = /** @class */ (function () {
    function myclass(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    myclass.prototype.getFirstname = function () {
        console.log("myfirstname is " + this.firstName + this.lastName);
    };
    myclass.prototype.getLastname = function () {
    };
    return myclass;
}());
var obj = new myclass();
obj.firstName = "Degavath";
obj.lastName = "mamatha";
obj.getFirstname();
