/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if(nums.length === 1){
        return nums[0]
    }
     if(nums.length === 2){
        return Math.max(nums[0], nums[1]) 
    }
    const arr1 = nums.slice(0, nums.length - 1);
    const arr2 = nums.slice(1, nums.length);


    const dpFunction = (arr) => {

        const dp = [];
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0], arr[1])
        for (let i = 2; i < arr.length; i++) {
            const num = arr[i]
            dp[i] = Math.max(dp[i - 2] + num, dp[i - 1])
        }
        return dp
    }
    const dp1 = dpFunction(arr1);
    const dp2 = dpFunction(arr2);


    console.log(dp1);
    console.log(dp2);

    return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]) 

};
