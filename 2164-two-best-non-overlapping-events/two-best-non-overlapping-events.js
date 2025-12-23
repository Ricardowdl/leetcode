/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
    const evs = [];
    for (const event of events) {
        evs.push({ ts: event[0], type: 0, val: event[2] })
        evs.push({ ts: event[1], type: 1, val: event[2] })
    }

    evs.sort((a, b) => {
        if (a.ts !== b.ts) {
            return a.ts - b.ts;
        }
        return a.type - b.type;
    })

    console.log(evs)

    let ans = 0, bestFirst = 0;
    for(const event of evs){
        if(event.type === 0){
            ans = Math.max(ans, event.val + bestFirst)
        } else {
            bestFirst = Math.max(bestFirst, event.val)
        }
    }

    return ans
};