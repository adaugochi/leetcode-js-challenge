
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        functions.reverse();
        let y = x;
        for (let fn of functions) {
            y = fn(y);
        }
        return y
    }
};


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9
