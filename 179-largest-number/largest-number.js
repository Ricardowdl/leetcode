var largestNumber = function(nums) {
    nums.sort((x, y) => {
        const a = String(x) + String(y)
        const b = String(y) + String(x)
        return b-a
    })

    if (nums[0] === 0) {
        return '0';
    }
    return nums.join('');
};
