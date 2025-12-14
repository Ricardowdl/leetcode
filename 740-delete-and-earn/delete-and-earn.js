/**
* @param {number[]} nums
* @return {number}
*/
var deleteAndEarn = function (nums) {
    nums.sort((a, b) => a - b)
    console.log(nums)
    const arr = [];
    let sum = 0;
    nums.forEach((num, i) => {
        if (i === 0) {
            sum = num
        } else {
            if (num === nums[i - 1]) {
                sum = sum + num
            } else {
                arr.push(sum)
                sum = num;
                if (num - nums[i - 1] !== 1) {
                    arr.push(0)
                }
            }
        }
    })
    arr.push(sum)

    console.log('arr', arr)

    const dp = [];
    dp[0] = arr[0]
    if (arr[1] || arr[1] === 0) {
        console.log(arr[0], arr[1]);
        dp[1] = Math.max(arr[0], arr[1])
    }
    if (arr[2] || arr[2] === 0) {
        for (let i = 2; i < arr.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i])
        }
    }

    console.log(dp)
    return dp[dp.length - 1]
};
