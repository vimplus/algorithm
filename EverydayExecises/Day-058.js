/**
 * 62. 不同路径
 * https://leetcode-cn.com/problems/unique-paths/
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from(new Array(m), () => new Array(n));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    
    return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 2))

/* -----------------------------------The next day coding.------------------------------------- */
const uniquePaths = (m, n) => {
    let dp = Array.from(new Array(m), () => new Array(n));

    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}
