
var Trie = function() {
    this.tree = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let t = this.tree;
    for (const w of word) {
        const n = t.get(w) ?? new Map();
        t.set(w, n);
        t = n;
    }
    t.set('', true);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let t = this.tree;
    for (const w of word) {
        t = t.get(w);
        if (!t) return false;
    }
    return t.has('');
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let t = this.tree;
    for (const w of prefix) {
        t = t.get(w);
        if (!t) return false;
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
