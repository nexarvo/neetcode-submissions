class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(const str of strs) {
            const sortedStr = str.split("").sort().join("");

            if(map[sortedStr] === undefined) map[sortedStr] = [];

            map[sortedStr].push(str); 
        }

        return Object.values(map);
    }
}
