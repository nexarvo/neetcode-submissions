class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // First we will sort every string
        // Then we will loop through the array
        // and if we find any string === we will push it into that array

        const indexMap = {};

        for(let i = 0; i < strs.length; i++) {
            // Sort every string
            const key = strs[i].split("").sort().join("");
            if (!(key in indexMap)) indexMap[key] = [];
            indexMap[key].push(strs[i]);
        }

        return Object.values(indexMap)
    }
}
