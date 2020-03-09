/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var helper = new LevelOrderHelper();
    return helper.levelOder(root);
};

var LevelOrderHelper = function() {
    var result;
    
    var init = function() {
        result = [];
    }
    
    var addToLevel = function(node, level) {
        if (node === null) {
            return;
        }
        
        if (typeof result[level] === 'undefined') {
            result[level] = [];
        }
        
        result[level].push(node.val);
        
        addToLevel(node.left, level + 1);
        addToLevel(node.right, level + 1);
    }
    
    return {
        levelOder: function(node) {
            init();
            addToLevel(node, 0);
            return result;
        }
    };
    
    
}