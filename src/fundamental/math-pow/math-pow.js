/*
Create a function `pow` which given two arguments, base and exponent, returns the base to the exponent power, as in base^exponent.

The base and exponent will only have positive values (you don't need to check this).

If an argument is not a number, return NaN.

* pow(2, 0) -> 1
* pow(2, 1) -> 2
* pow(2, 2) -> 4
* pow(3, 3) -> 27
* pow("tacos", 2) -> NaN
* pow(42) -> NaN

You can't use Math.pow(), the goal is to recreate this function!

*/

// TODO add your code here

function pow(base, exponent) {
    if (typeof (base) !== "number" || typeof (exponent) !== "number") {
        return NaN;
    }
    else {
        let result = base;
        if (exponent === 0) {
            result = 1;
        }
        else {
            for (let i = 0; i < exponent - 1; i++) {
                result = result * base;
            }
        }
        return result;

    }
}

// Begin of tests
const assert = require("assert");
const exp = require("constants");

assert.strictEqual(typeof pow, "function");
assert.strictEqual(pow.length, 2);
assert.strictEqual(pow(2, 0), 1);
assert.strictEqual(pow(2, 1), 2);
assert.strictEqual(pow(2, 2), 4);
assert.strictEqual(pow(3, 3), 27);
assert.strictEqual(pow("tacos", 2), NaN);
assert.strictEqual(pow(42), NaN);
// End of tests

console.log("🎉");
