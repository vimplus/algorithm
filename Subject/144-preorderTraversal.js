/**
 * 时间复杂度分析：O(n)
 * 144. 二叉树的前序遍历
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归 - 基于递归的遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];

    function helper(node) {
        if (!node) return;
        result.push(node.val);
        helper(node.left);
        helper(node.right);
    }

    helper(root);
    return result;
};

// 方法二：迭代 - 基于栈的遍历
var preorderTraversal = function(root) {
    let result = [];
    let stack = [];

    if (root) stack.push(root);

    while (stack.length) {
        let curNode = stack.pop();
        result.push(curNode.val);

        if (curNode.right !== null) stack.push(curNode.right);
        if (curNode.left !== null) stack.push(curNode.left);
    }
    
    return result;
};


const binaryTree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: {
            val: 6,
            left: null,
            right: null
        }
    }
}


console.log(preorderTraversal(binaryTree))