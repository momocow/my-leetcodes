/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    const stack = [];
    const root = new Node();
    let cur = root;
    if (head) stack.push(head);
    while (stack.length > 0) {
        const node = stack.pop();
        if (node.next) {
            stack.push(node.next);
            node.next = null;
        }
        if (node.child) {
            stack.push(node.child);
            node.child = null;
        }
        cur.next = node;
        node.prev = cur;
        cur = node;
    }
    if (root.next) root.next.prev = null;
    return root.next;
};

var flattenRecursive = function(head) {
    if (!head) return null;
    
    const node = new Node(head.val);
    if (head.child) {
        node.next = flatten(head.child);
        node.next.prev = node;
    }
    
    let cur = node;
    while (cur.next) cur = cur.next;
    if (head.next) {
        cur.next = flatten(head.next);
        cur.next.prev = cur;
    }
    return node;
}
