/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const gridLength = grid.length;
    const gridLineLength = grid[0].length;

    let res = 0

    for(let i = 0; i < gridLength; i++){
        for(let j = 0; j < gridLineLength; j++){
            if(grid[i][j] < 0){
                console.log('i', i, 'j', j)
                res = res + (gridLineLength - j);
                break;
            }
        }
    }
    return res
};