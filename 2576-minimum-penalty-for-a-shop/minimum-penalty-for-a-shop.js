/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
    const arr = [];
    let preClose = 0;
    let afterClose = 0;

    //第一次循环 把初始的cost算出来
    for (let i = 0; i <= customers.length; i++) {
        if (customers[i] === 'Y') {
            afterClose++
        }
    }

    arr.push(preClose + afterClose)

    for (let i = 1; i <= customers.length; i++) {
        //此时关门
        if (customers[i - 1] === 'Y') {
            afterClose--
        } else {
            preClose++
        }


        arr.push(afterClose+preClose)
    }
    console.log(arr)

    //找最小
    let res = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] <= arr[res]) {
            res = i
        }
    }
    return res
};