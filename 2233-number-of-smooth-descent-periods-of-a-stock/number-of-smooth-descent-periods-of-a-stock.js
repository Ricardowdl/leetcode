/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
     const dp = [];
    prices.forEach((p, index) => {
        if(index === 0){
            dp[index] = 1;
        }
        else {
            if(p === (prices[index-1]-1)){
                dp[index] = dp[index-1]+1
            }else{
                dp[index] = 1 
            }
        }
    });
    const res  = dp.reduce((pre,cur)=>pre+cur)
    return res
};