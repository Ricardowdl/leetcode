/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let res = 0;
    for(const num of nums){
        let yinshuCount = 0;
        let yinshuSum = 0;
        for(let i = 1; i * i <= num; i++){
            if(num % i  === 0){
                //是因数
                yinshuCount = yinshuCount + 1;
                yinshuSum = yinshuSum + i;
                if(i * i !== num){
                    yinshuCount = yinshuCount + 1;
                    yinshuSum = yinshuSum + (num / i);
                }
            }
        }
        if(yinshuCount === 4){
            res = res + yinshuSum
        }
    }
    return res

};