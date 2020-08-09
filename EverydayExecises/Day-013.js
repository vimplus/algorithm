/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = new Map();

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let arr = new Array(26).fill(0);

        for (let j = 0; j < str.length; j++) {
            arr[str.charCodeAt(j) - 97]++;
        }
        let hashKey = arr.join('');
        if (!hash.has(hashKey)) {
            hash.set(hashKey, [str]);
        } else {
            let temp = hash.get(hashKey);
            temp.push(str);
            hash.set(hashKey, temp);
        }
    }
    return [...hash.values()];
};