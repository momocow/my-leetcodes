/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let root = null;
    let head = null;
    
    while (!lists.every(l => !l)) {
         // find min node in heads of lists
        let mn; // min node
        let mi; // min index
        for (let i = 0; i < lists.length; i++) {
            const node = lists[i];
            if (node && (mn?.val ?? Infinity) > node.val) {
                mn = node;
                mi = i;

            }
        }
        lists[mi] = mn.next;
        mn.next = null;
        if (!root) root = mn;
        if (!head) head = mn;
        else {
            head.next = mn;
            head = mn;
        }
    }
    return root;
};

module.exports = mergeKLists;
