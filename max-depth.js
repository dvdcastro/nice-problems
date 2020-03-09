var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepthV2 = function(root) {
    if (root === null) {
        return 0;
    }
    
    var leftDepth = 0;
    if (root.left !== null) {
        if (root.left.left === null && root.left.right === null) {
            leftDepth = 1;
        } else {
            leftDepth = maxDepth(root.left);
        }
    }
    
    var rightDepth = 0;
    if (root.right !== null) {
        if (root.right.left === null && root.right.right === null) {
            rightDepth = 1;
        } else {
            rightDepth = maxDepth(root.right);
        }
    }
    
    if (leftDepth === 0 && rightDepth === 0) {
        return 1;
    }
    
    return 1 + Math.max(leftDepth, rightDepth);
};