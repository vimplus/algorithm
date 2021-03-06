/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    if (!root) return res;

    function backtrack(node, path) {
        path.push(node.val);

        if (node.left == null && node.right == null) {
            res.push(path.join('->'));
        }

        if (node.left) backtrack(node.left, path);
        if (node.right) backtrack(node.right, path);

        path.pop();
    }
    
    backtrack(root, []);
    return res;
};


/* -----------------------------------The next day coding.------------------------------------- */
var binaryTreePaths = function(root) {
    let res = [];
    if (!root) return res;

    function backtrack(root, path) {
        path.push(node.val);

        if (!root.left || !root.right) {
            res.push(path.join('->'));
        }

        if (root.left) backtrack(root.left, path);
        if (root.right) backtrack(root.right, path);

        path.pop();
    }
    
    backtrack(root, []);
    return res;
};