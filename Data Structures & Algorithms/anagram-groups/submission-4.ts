class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sortedMap = new Map<string, string[]>();

        for(const str of strs) {
            const sortedStr = str.split("").sort().join();
            if(!sortedMap[sortedStr]) {
                sortedMap[sortedStr] = [];
            }
            sortedMap[sortedStr].push(str);
        }

        return Object.values(sortedMap);
    }
}
