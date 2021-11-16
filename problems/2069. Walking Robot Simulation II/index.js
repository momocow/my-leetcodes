/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.w = width;
    this.h = height;
    this.perimeter = (width + height) * 2 - 4;
    this.n = 0;
    this.tmp = { dir: 'East' };
};

Robot.prototype._save = function (o = {}) {
    Object.assign(this.tmp, o);
}

Robot.prototype._markDirty = function () {
    this.tmp = {};
}


Robot.prototype._getCorners = function () {
    if (!this.corners) {
        let c = 0;
        const dx = this.w - 1;
        const dy = this.h - 1;
        this.corners = [];
        for (const dd of [0, dx, dy, dx]) {
            c += dd;
            this.corners.push(c);
        }
    }
    return this.corners;
}

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.move = function(num) {
    this._markDirty();
    this.n = (this.n + num) % this.perimeter;
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    if (this.tmp.pos) return this.tmp.pos;
    
    let pos;
    const [lb, rb, rt, lt] = this._getCorners();
    if (this.n >= lb && this.n < rb) pos = [this.n - lb, 0];
    else if (this.n >= rb && this.n < rt) pos = [this.w - 1, this.n - rb];
    else if (this.n >= rt && this.n < lt) pos = [lt - this.n, this.h - 1];
    else pos = [0, this.perimeter - this.n];
    
    this._save({ pos });
    return pos;
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    if (this.tmp.dir) return this.tmp.dir;
    
    let dir;
    const [lb, rb, rt, lt] = this._getCorners();
    if (this.n > lb && this.n <= rb) dir = 'East';
    else if (this.n > rb && this.n <= rt) dir = 'North';
    else if (this.n > rt && this.n <= lt) dir = 'West';
    else dir = 'South';
    
    this._save({ dir });
    return dir;
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.move(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
