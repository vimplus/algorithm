var inorderTraversal = function(root) {
    let stack = [];
    let result = [];
    let curr = root;
    while (curr !== null || stack.length) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
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


console.log(inorderTraversal(binaryTree))