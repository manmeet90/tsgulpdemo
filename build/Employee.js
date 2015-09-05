var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './Person'], function (require, exports, Person) {
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee() {
            _super.call(this);
            this.empId = 11;
        }
        Employee.prototype.getEmpId = function () {
            return this.empId;
        };
        return Employee;
    })(Person);
    return Employee;
});
