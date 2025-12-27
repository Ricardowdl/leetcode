/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let dp = new Array(amount+1).fill(Infinity); 
    dp[0] = 0; // 凑出总额0 最低只需要 0 枚硬币
    for(let num of coins) {
        for(let j=num;j<=amount;j++) { 
            dp[j] = Math.min(dp[j],dp[j-num]+1);
        } 
    }
     return dp[amount] == Infinity? -1 : dp[amount];
};
