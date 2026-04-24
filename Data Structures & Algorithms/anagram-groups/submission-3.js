class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedMap = {};

        strs.forEach((str) => {
            const sorted = str.split("").sort().join("");

            if(sortedMap[sorted] === undefined) {
                sortedMap[sorted] = [str];
            }
            else {
                sortedMap[sorted].push(str);
            }
        });

        return Object.values(sortedMap);
    }
}
