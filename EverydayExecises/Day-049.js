/**
 * 79. 单词搜索
 * https://leetcode-cn.com/problems/word-search/
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    const m = board.length;
    const n = board[0].length;
    const used = new Array(m);    // 二维矩阵used
    for (let i = 0; i < m; i++) {
        used[i] = new Array(n);
    }
    // 判断当前点是否是目标路径上的点
    const canFind = (row, col, i) => { // row col是当前点的坐标，i是当前考察的字符索引
        if (i > word.length - 1) {       // 递归的出口
            return true;
        }
        if (row < 0 || row >= m || col < 0 || col >= n) { // 当前点要存在
            return false;
        }
        if (used[row][col] || board[row][col] != word[i]) { // 当前的点已经走过，或当前点就不是目标点
            return false;
        }
        // 排除掉这些false情况，当前点是没问题的，可以继续递归考察
        used[row][col] = true;  // used记录一下当前点被访问了
        const canFindRest =
            canFind(row + 1, col, i + 1) ||
            canFind(row - 1, col, i + 1) ||
            canFind(row, col + 1, i + 1) ||
            canFind(row, col - 1, i + 1);

        if (canFindRest) { // 基于当前点，可以为剩下的字符找到路径
            return true;
        }
        used[row][col] = false; // 找不出，返回false，继续考察别的分支，并撤销当前点的访问状态。
        return false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0] && canFind(i, j, 0)) { // 找到dfs的起点
                return true; // 找到起点，且dfs的结果也true，则找到了目标路径
            }
        }
    }
    return false; // 怎么样都没有返回true，则返回false
};


/* -----------------------------------The next day coding.------------------------------------- */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    let m = board.length;
    let n = board[0].length;
    let used = Array.from(new Array(m), () => new Array(n));

    function canFind(row, col, i) {
        if (i > word.length - 1) return true;

        if (row < 0 || row >= m || col < 0 || col >= n) return false;

        if (used[row][col] || board[row][col] != word[i]) return false;

        used[row][col] = true;
        const canFindRest = 
            canFind(row + 1, col, i + 1) ||
            canFind(row - 1, col, i + 1) || 
            canFind(row, col + 1, i + 1) || 
            canFind(row, col - 1, i + 1);
        
        if (canFindRest) return true;
        used[row][col] = false;

        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[j][j] === word[0] && canFind(i, j, 0)) return true;
        }
    }

    return false;
};