/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const obj = {}

    for(let i = 0 ; i < s.length; i++){
        obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
    }

    const arr = [...Object.keys(obj)];
    arr.sort((a,b)=>obj[b] - obj[a])
    
    let res = ''
    for(val of arr){
        const frequency = obj[val];
        for(let i = 0; i < frequency; i++){
            res = res + val;
        }
    }
    return res
};
