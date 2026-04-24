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
        const sortedArray = [];

        for(let i = 0; i < strs.length; i++) {
            // Sort every string
            sortedArray.push(strs[i].split("").sort().join(""));
        }

        for(let i = 0; i < sortedArray.length; i++) {
            if(!(sortedArray[i] in indexMap)) {
                indexMap[sortedArray[i]] = [strs[i]];
            }
            else {
                indexMap[sortedArray[i]] = [...indexMap[sortedArray[i]], strs[i]];
            }
        }

        return Object.values(indexMap)
    }
}
