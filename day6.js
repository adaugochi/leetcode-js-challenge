/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var val;
    if (nums.length === 0) return init;

    for(let i = 0; i < nums.length; i++) {
        val = i === 0 ? fn(init, nums[i]) : fn(val, nums[i]);
    }
    return val;
};