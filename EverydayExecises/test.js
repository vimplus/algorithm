/**
 * @param {number[]} nums
 * @return {boolean}
 */
function minPathSum(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) return 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let dp = Array.from(new Array(rows), () => new Array(cols));

    dp[0][0] = grid[0][0];

    for (let i = 1; i < rows; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    for (let j = 1; j < cols; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    return dp[rows - 1][cols - 1];
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))