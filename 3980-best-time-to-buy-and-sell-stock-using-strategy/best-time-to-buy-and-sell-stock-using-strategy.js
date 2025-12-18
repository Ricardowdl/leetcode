/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function(prices, strategy, k) {
    
    const n = prices.length;
    const profitSum = new Array(n + 1).fill(0);
    const priceSum = new Array(n + 1).fill(0);

    for(let i = 0; i < n; i++){
        profitSum[i + 1] = profitSum[i] + prices[i] * strategy[i];
        priceSum[i + 1] = priceSum[i] + prices[i]
    }
    console.log(profitSum)
    console.log(priceSum)

    let res = profitSum[n];
    for(let i = k-1; i < n; i++){
        const left = profitSum[i - k + 1];
        const right = profitSum[n] - profitSum[i+1];
        const change = priceSum[i+1] - priceSum[i-Math.floor(k/2) + 1];
        
        res = Math.max(res, left + change + right);
    }
    return res;
};