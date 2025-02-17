enum Operations {
    add = "add",
    subtract = "subtract",
    multiply = "multiply",
    divide = "divide",
    percent = "percent",
}

interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
    percent(value: number, percentage: number): number;
    calculate(operation: string, ...args: number[]): number;
}

class Calculator implements ICalculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | never {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }

        return a / b;
    }

    percent(value: number, percentage: number): number {
        return (value * percentage) / 100;
    }

    calculate(operation: string, ...args: number[]): number | never {
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
                throw new Error(`Unsupported operation: ${operation}`);
        }
    }
}

const calculator = new Calculator();

console.log("Add: ", calculator.add(5, 3));                  // 8
console.log("Subtract: ", calculator.subtract(10, 4));       // 6
console.log("Multiply: ", calculator.multiply(6, 7));        // 42
console.log("Divide: ", calculator.divide(20, 4));           // 5
//console.log("Divide by zero: ", calculator.divide(20, 0)); // Error: Division by zero is not allowed.
console.log("Percent: ", calculator.percent(200, 15));       // 30

console.log("Calculate Add: 5 + 3 = ", calculator.calculate("add", 5, 3));                // 8
console.log("Calculate Subtract: 10 - 4 = ", calculator.calculate("subtract", 10, 4));    // 6
console.log("Calculate Multiply: 6 * 8 = ", calculator.calculate("multiply", 6, 8));      // 42
console.log("Calculate Divide: 20 / 4 = ", calculator.calculate("divide", 20, 4));        // 5
//console.log("Calculate Divide: 20 / 0 = ", calculator.calculate("divide", 20, 0));      // Error: Division by zero is not allowed.
console.log("Calculate Percent: 200 * 10% = ", calculator.calculate("percent", 200, 10)); // 20
//console.log("Calculate Ololo: 555 $ 333 = ", calculator.calculate("ololo", 555, 333));  // Error: Unsupported operation: ololo
