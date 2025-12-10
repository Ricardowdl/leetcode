var twoSum = function(nums, target) {
    //用map，每到一个数就用target-nums[i]，查找map中是否有该值，有则返回
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let num = target - nums[i];
        if(map.has(num)){
            return [map.get(num),i]
        }
        map.set(nums[i],i);
    }
};