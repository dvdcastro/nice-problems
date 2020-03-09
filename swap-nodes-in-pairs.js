/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const helper = new SwapPairsHelper();
    return helper.swapPairs(head);
};

var SwapPairsHelper = function() {
    
    var swapedNodes;
    
    var init = function() {
        swapedNodes = [];
    }
    
    var swapNodesPairs = function(node) {
        if (node === null || node.next === null) {
            return node;
        }
        if (typeof swapedNodes[node] === 'undefined'
            && node.next !== null) {
            const thisNode = node,
                  nextNode = node.next,
                  nextNextNode = node.next.next;
            thisNode.next = nextNextNode;
            nextNode.next = thisNode;
            swapedNodes[thisNode] = true;
            swapedNodes[nextNode] = true;
            nextNode.next.next = swapPairs(nextNextNode);
            return nextNode;
        }
    }
    
    return {
        swapPairs: function(node) {
            init();
            return swapNodesPairs(node);
        }
    }
}

var SwapPairsHelperV2 = function() {
    var swapNodesPairs = function(node) {
        if (node === null || node.next === null) {
            return node;
        }
        
        const thisNode = node,
              nextNode = node.next,
              nextNextNode = node.next.next;
        thisNode.next = nextNextNode;
        nextNode.next = thisNode;
        nextNode.next.next = swapPairs(nextNextNode);
        return nextNode;
    }
    
    return {
        swapPairs: function(node) {
            return swapNodesPairs(node);
        }
    }
}

var SwapPairsHelperV3 = function() {
    var swapNodesPairs = function(head) {
        var result = null, node = head, prevNode = null;
        while(node !== null && node.next !== null) {
            const thisNode = node,
                  nextNode = node.next,
                  nextNextNode = node.next.next;
            thisNode.next = nextNextNode;
            nextNode.next = thisNode;
            
            if (result === null) {
                result = nextNode;
            }
            
            if (prevNode !== null) {
                prevNode.next = nextNode;
            }
            
            prevNode = thisNode;
            node = nextNextNode;
        }
        
        if (result === null) {
            return node;
        }
        
        return result;
    }
    
    return {
        swapPairs: function(node) {
            return swapNodesPairs(node);
        }
    }
}