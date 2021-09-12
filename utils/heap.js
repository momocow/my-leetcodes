class Heap {
    constructor (compare) {
        this.array = []
        this.compare = compare ?? ((a, b) => a - b)
    }
    
    push (item) {
        let i = this.array.push(item) - 1
        let j = Math.floor((i - 1) / 2)
        while (
            i > 0 &&
            this.compare(this.array[j], this.array[i]) > 0
        ) {
            const tmp = this.array[j]
            this.array[j] = this.array[i]
            this.array[i] = tmp
            i = j
            j = Math.floor((i - 1) / 2)
        }
    }
    
    shift () {
        const tmp1 = this.array[0]
        this.array[0] = this.array[this.array.length - 1]
        this.array[this.array.length - 1] = tmp1
        const ret = this.array.pop()

        // fix downward
        let i = 0
        let c1 = i * 2 + 1
        let c2 = i * 2 + 2
        while (true) {
            const c = c2 < this.array.length &&
                this.compare(this.array[c1], this.array[c2]) > 0
                    ? c2
                    : c1 < this.array.length
                        ? c1
                        : -1
            if (c < 0 || this.compare(this.array[i], this.array[c]) <= 0) break
            const tmp2 = this.array[i]
            this.array[i] = this.array[c]
            this.array[c] = tmp2
            i = c
            c1 = i * 2 + 1
            c2 = i * 2 + 2
        }
            
        return ret
    }
        
    get length () {
        return this.array.length
    }
}

module.exports = {
  Heap
}
