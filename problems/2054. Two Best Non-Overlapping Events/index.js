function bs(arr, time, left = 0, right = arr.length) {
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid][0] <= time) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    // sort by start time, ascending
    const st = events.slice().sort((e1, e2) => e1[0] - e2[0]);
    const stx = new Array(st.length);
    for (let i = st.length - 1; i >= 0; i--) {
        stx[i] = Math.max(stx[i + 1] ?? -Infinity, st[i][2]);
    }
    
    // sort by end time, ascending
    const et = events.slice().sort((e1, e2) => e1[1] - e2[1]);
    
    let left = 0;
    let mx = 0;
    
    for (const [, endTime, value] of et) {
        left = bs(st, endTime, left);
        mx = Math.max(value + (stx[left] ?? 0), mx);
    }
    
    return mx;
};

module.exports = maxTwoEvents;
