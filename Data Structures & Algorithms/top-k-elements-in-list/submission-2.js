class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};

        nums.forEach((num) => {
            if(countMap[num] === undefined) countMap[num] = 0;

            countMap[num] = countMap[num] + 1;
        });

        return Object.entries(countMap)
        .sort((a, b) => b[1] - a[1])
        .map((entry) => entry[0])
        .slice(0, k);
    }
}
