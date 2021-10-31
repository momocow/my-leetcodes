class ListNode {
    constructor (key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.root = this.head = new ListNode();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    return this._touch(key)?.val ?? -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        node.val = value;
        this._touch(key);
        return;
    }
    const node = new ListNode(key, value);
    this._push(node);
    this.map.set(key, node);
    if (this.map.size > this.capacity) {
        // pop
        const victim = this._remove(this.root.next);
        this.map.delete(victim.key);
    }
};

LRUCache.prototype._touch = function(key) {
    return !this.map.has(key)
        ? null
        : this.map.get(key) === this.head
            ? this.head
            : this._push(this._remove(this.map.get(key)));
}


LRUCache.prototype._push = function(node) {
    this.head.next = node;
    node.prev = this.head;
    this.head = node;
    return node;
}
    
LRUCache.prototype._remove = function(node) {
    node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    return node;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
