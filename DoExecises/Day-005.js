/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if(i === nums[i]) {
            return i;
        }
    }
    return -1;
};