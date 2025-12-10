/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // test update github
    let head = 0,
        n = 0;
    while(head < nums.length){
        for(let i = nums.length; i >= head; i--){
            if(nums[head] == nums[i]){
                nums[n] = nums[i];
                ++n;
                head = i + 1;
                break;
            }
        }
    }
    return n
};