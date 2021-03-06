/**
 * 37. 解数独
 * https://leetcode-cn.com/problems/sudoku-solver/
 * 
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    // 判断行和列、小方格是否存在冲突
    const hasConflict = (row, col, val) => {
        for (let i = 0; i < 9; i++) {
            // 行或列存在冲突
            if (board[i][col] === val || board[row][i] === val) return true;
        }
        
        // 检测小方格
        let subRowStart = Math.floor(row / 3) * 3;  // 对于小方格，行：有三种起始索引 0, 3, 6
        let subColStart = Math.floor(col / 3) * 3;  // 对于小方格，列：有三种起始索引 0, 3, 6
        // 遍历所在的小方格
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[subRowStart + i][subColStart + j] === val) return true;
            }
        }
        
        return false;   // 没有冲突
    }

    const fill = (i, j) => {
        // 列越界，填完了一行，继续下一行
        if (j === 9) {
            i++;
            j = 0;
            if (i === 9) return true;  // 填完了最后一行，返回true
        }

        if (board[i][j] !== '.') return fill(i, j + 1); // 不是空白格，递归填下一格

        // 枚举当前格子所有可填值的选择
        for (let num = 1; num <= 9; num++) {
            if (hasConflict(i, j, String(num))) continue;   // 存在冲突，跳过
            board[i][j] = String(num);  // 作出一个选择
            if (fill(i, j + 1)) return true;    // 如果基于它，填下一格，最后可以解出数独，返回true；
            board[i][j] = '.';                  // 如果基于它，填下一格，填1-9都不行，回溯，恢复为空白格；
        }
    }

    fill(0, 0); // 从第一个格子开始填
    return board;
};


/* -----------------------------------The next day coding.------------------------------------- */
var solveSudoku = function(board) {

    const hasConflict = (row, col, val) => {
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === val || board[row][i] === val) return true;
        }

        let subRowStart = Math.floor(row / 3) * 3;
        let subColStart = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[subRowStart + i][subColStart + j] === val) return true;
            }
        }
        return false;
    }

    const fill = (i, j) => {
        if (j === 9) {
            i++;
            j = 0;
            if (i === 9) return true;
        }
        if (board[i][j] !== '.') return fill(i, j + 1);

        for (let num = 1; num <= 9; num++) {
            if (hasConflict(i, j, String(num))) continue;
            
            board[i][j] = String(num);
            if (fill(i, j + 1)) return true;
            board[i][j] = '.';
        }
    }
    fill(0, 0);
    return board;
};
