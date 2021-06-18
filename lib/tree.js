class TreeNode {
    constructor (val, left, right) {
        this.val = val
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    toString () {
        const arr = []
        const queue = [this]
        while (queue.length > 0) {
            const node = queue.shift()
            if (node) {
                arr.push(String(node.val))
                queue.push(node.left)
                queue.push(node.right)
            } else if (queue.filter(Boolean).length > 0) {
                arr.push('null')
            }
        }
        return `[${arr.join(',')}]`
    }
}

module.exports = {
    TreeNode
}
