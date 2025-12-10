/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //在坚持一遍，刚刚应该是循环出错了
    //头指针，问题在于会多运很多遍
    //一个头部向后走，一个尾部向前，相同则跳出
    //还需要一个n指数
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