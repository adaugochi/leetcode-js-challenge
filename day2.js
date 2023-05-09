// My initial solution

let count = -1;
var createHelloWorld = function(n) {
    return function () {
        count++;
        return n + count;
    }
};


const f = createHelloWorld(-2);
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());


/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12