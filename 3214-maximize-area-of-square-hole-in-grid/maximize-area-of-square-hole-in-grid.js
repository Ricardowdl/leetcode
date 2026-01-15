/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function (n, m, hBars, vBars) {
    hBars.sort((a, b) => a - b)
    vBars.sort((a, b) => a - b)
    let hNum = 1, hMax = 1;
    for (let i = 0; i < hBars.length; i++) {
        if (hBars[i] === hBars[i + 1] - 1) {
            hNum = hNum + 1
        } else {
            hNum = 1
        }
        hMax = Math.max(hNum, hMax)
    }

    let vNum = 1, vMax = 1;
    for (let i = 0; i < vBars.length; i++) {
        if (vBars[i] === vBars[i + 1] - 1) {
            vNum = vNum + 1
        } else {
            vNum = 1
        }
        vMax = Math.max(vNum, vMax)
    }

    console.log('hMax', hMax, 'vMax', vMax)
    const len = Math.min(hMax, vMax) + 1;
    return len * len
};
