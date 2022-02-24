/**
 * Taken from https://leetcode.com/problems/sliding-window-maximum
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const helper = new MaxSlidingWindowHelper();
    return helper.maxSlidingWindow(nums, k);
};

class MaxSlidingWindowHelper {
    maxSlidingWindow(nums, k) {
        let res = [];
        for (let i = 0; i <= nums.length - k; i++) {
            let max = nums[i];
            for (let j = 1; j < k; j++) {
                if (nums[i + j] > max) {
                    max = nums[i + j];
                }
            }
            res.push(max);
        }
        return res;
    }
}
