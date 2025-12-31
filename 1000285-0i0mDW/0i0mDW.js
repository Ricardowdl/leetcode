/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const columnLen = grid[0].length;
    const rowLen = grid.length;

    const dp = new Array(rowLen).fill(0).map(()=>new Array(columnLen).fill(0))
    dp[0][0] = grid[0][0]
    for(let i = 1; i < columnLen; i++){
        dp[0][i] = grid[0][i] + dp[0][i-1];
    }

     for(let i = 1; i < rowLen; i++){
        dp[i][0] = grid[i][0]+ dp[i-1][0]
    }

    console.log('dp', dp)

    for(let i = 1; i < rowLen; i++){
        for(let j = 1; j < columnLen; j++){
            dp[i][j] = Math.min(dp[i-1][j] + grid[i][j], dp[i][j-1] + grid[i][j])
        }
    }
    console.log('dp', dp)

    return dp[rowLen - 1][ columnLen - 1]
};
