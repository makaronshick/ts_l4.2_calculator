var Operations;
(function (Operations) {
    Operations["add"] = "add";
    Operations["subtract"] = "subtract";
    Operations["multiply"] = "multiply";
    Operations["divide"] = "divide";
    Operations["percent"] = "percent";
})(Operations || (Operations = {}));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    };
    Calculator.prototype.percent = function (value, percentage) {
        return (value * percentage) / 100;
    };
    Calculator.prototype.calculate = function (operation) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        switch (operation) {
            case Operations.add:
                return this.add(args[0], args[1]);
            case Operations.subtract:
                return this.subtract(args[0], args[1]);
            case Operations.multiply:
                return this.multiply(args[0], args[1]);
            case Operations.divide:
                return this.divide(args[0], args[1]);
            case Operations.percent:
                return this.percent(args[0], args[1]);
            default:
                throw new Error("Unsupported operation: ".concat(operation));
        }
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log("Add: ", calculator.add(5, 3)); // 8
console.log("Subtract: ", calculator.subtract(10, 4)); // 6
console.log("Multiply: ", calculator.multiply(6, 7)); // 42
console.log("Divide: ", calculator.divide(20, 4)); // 5
console.log("Percent: ", calculator.percent(200, 15)); // 30
console.log("Calculate Add: 5 + 3 = ", calculator.calculate("add", 5, 3)); // 8
console.log("Calculate Subtract: 10 - 4 = ", calculator.calculate("subtract", 10, 4)); // 6
console.log("Calculate Multiply: 6 * 8 = ", calculator.calculate("multiply", 6, 8)); // 42
console.log("Calculate Divide: 20 / 4 = ", calculator.calculate("divide", 20, 4)); // 5
console.log("Calculate Percent: 200 * 10% = ", calculator.calculate("percent", 200, 10)); // 20
