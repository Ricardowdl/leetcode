/**
 * @param {number[]} nums
 * @return {number}
 */

const MOD = 1e9 + 7;

var specialTriplets = function (nums) {
    const mod = 1e9 + 7;
    const numMap = new Map();
    const leftNumMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], (numMap.get(nums[i]) ?? 0) + 1);
    }

    let res = 0
    for (let i = 0; i < nums.length; i++) {
        const target = nums[i] * 2;
        const leftNum = leftNumMap.get(target) ?? 0;
        leftNumMap.set(nums[i], (leftNumMap.get(nums[i]) ?? 0) + 1);

        const rightNum = (numMap.get(target) ?? 0) - (leftNumMap.get(target) ?? 0);
 

        res = res + (leftNum * rightNum % mod);
        res = res % mod
    }


    return res;
};
