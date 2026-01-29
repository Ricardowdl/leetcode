/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
function minimumCost(source, target, original, changed, cost) {
    const INF = Number.MAX_SAFE_INTEGER / 2;
    const G = Array(26).fill().map(() => Array(26).fill(INF));
    for (let i = 0; i < 26; i++) {
        G[i][i] = 0;
    }
    
    const m = original.length;
    for (let i = 0; i < m; i++) {
        const idx = original[i].charCodeAt(0) - 97;
        const idy = changed[i].charCodeAt(0) - 97;
        G[idx][idy] = Math.min(G[idx][idy], cost[i]);
    }
    
    for (let k = 0; k < 26; k++) {
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                if (G[i][k] !== INF && G[k][j] !== INF) {
                    G[i][j] = Math.min(G[i][j], G[i][k] + G[k][j]);
                }
            }
        }
    }
    
    let ans = 0;
    const n = source.length;
    for (let i = 0; i < n; i++) {
        const idx = source.charCodeAt(i) - 97;
        const idy = target.charCodeAt(i) - 97;
        if (G[idx][idy] === INF) {
            return -1;
        }
        ans += G[idx][idy];
    }
    
    return ans;
}
