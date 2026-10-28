class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();

        for(const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        return [...countMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([key]) => key);
    }
}
