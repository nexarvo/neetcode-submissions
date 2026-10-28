class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sortedMap = new Map<string, string[]>();

        for (const str of strs) {
            const sorted = str
                .split("")
                .sort()
                .join("");

            sortedMap.set(sorted, [str, ...(sortedMap.get(sorted) ?? [])]);
        }

        return Array.from(sortedMap.values());
    }
}
