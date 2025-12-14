 /**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = [];
    if(nums.length === 1){
        return nums[0]
    }
    if(nums.length === 2){
        return Math.max(nums[0], nums[1])
    }

    nums.forEach((num, index)=>{
        
        if(index === 0){
            dp[0] = num
        }
        if(index === 1){
            dp[1] = Math.max(num, dp[0])
        }
        if(index !== 0 && index !== 1){

        // tou
        const tou = dp[index-2] + num;
        const butou = dp[index-1];
        dp[index] = Math.max(tou, butou) 
        }
    })
    return dp[dp.length - 1]
};