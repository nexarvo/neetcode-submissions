class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {}

        for(let i = 0; i < nums.length; i++) {
            if(!(nums[i] in countMap)) countMap[nums[i]] = 0;
            countMap[nums[i]] = countMap[nums[i]] + 1;
        }

        const topK = Object.entries(countMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => Number(num));

        return topK;
    }
}
