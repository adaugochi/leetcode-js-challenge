/**
 * @param {Function} fn
 */
function memoize(fn) {
    let initialArg = {

    };
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in initialArg) {
            return initialArg[key];
        }

        let r = fn(...args);
        initialArg[key] = r;
        return r;
    }
}


/**
 *
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */