class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map<number, number>();

        for (const num of nums) {
            frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
        }

        return Object.entries(frequencyMap)
        .sort((a,b) => b[1] - a[1])
        .slice(0, k)
        .map(([key]) => Number(key));
    }
}
