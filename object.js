var myclass = /** @class */ (function () {
    function myclass() {
    }
    myclass.prototype.getFirstname = function () {
        console.log("myfirstname is " + this.firstName);
    };
    myclass.prototype.getLastname = function () {
    };
    return myclass;
}());
var obj = new myclass();
obj.firstName = "Degavath";
obj.getFirstname();
