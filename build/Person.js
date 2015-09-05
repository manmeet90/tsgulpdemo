define(["require", "exports"], function (require, exports) {
    var Person = (function () {
        function Person() {
            this.name = "Max";
            this.age = 25;
            console.info("Person instance initalized!");
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        Person.prototype.getAge = function () {
            return this.age;
        };
        return Person;
    })();
    return Person;
});
