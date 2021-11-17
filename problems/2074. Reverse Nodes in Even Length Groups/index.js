function probe(node, maxlen) {
    let len = 0;
    let i = 0;
    while (node && i < maxlen) {
        node = node.next;
        i++;
        len++;
    }
    return len;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseEvenLengthGroups = function(head) {
    let prev;
    let cur = head;
    let i = 0;
    let len = 1;
    let ll = 1;
    
    while (cur) {
        if (i === 0) ll = probe(cur, len);
        if (ll % 2 === 0) { // even group
            let node = cur;
            cur = cur.next;
            i++;
            while (i < len && cur) {
                const next = cur.next;
                cur.next = node;
                node = cur;
                cur = next;
                i++;
            }
            i = 0;
            len++;
            const pnext = prev.next;
            pnext.next = cur;
            prev.next = node;
            prev = pnext;
        } else {
            prev = cur;
            cur = cur.next;
            i++;
            if (i >= len) {
                i = 0;
                len++;
            }
        }
    }
    
    return head;
};

module.exports = reverseEvenLengthGroups;
