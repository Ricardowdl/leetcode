/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const res = [];
    const selectedArr = new Array(nums.length).fill(false);

    debugger

    // choices = nums
    const backFunction = (stateArr, selectedArr) => {
        if (stateArr.length === nums.length) {
            res.push([...stateArr]);
            return;
        }

        const duplicated =[];
        nums.forEach((element, i) => {
            if (selectedArr[i] === false && !duplicated.includes(element)) {
                //没被用到
                selectedArr[i] = true;
                stateArr.push(element);

                duplicated.push(element)
                
                // 走下一轮
                backFunction(stateArr, selectedArr);

                // 回溯，将上轮用到的退出来
                stateArr.pop();
                selectedArr[i] = false;
            }
        });
    }

    backFunction([], selectedArr)
    return res
};