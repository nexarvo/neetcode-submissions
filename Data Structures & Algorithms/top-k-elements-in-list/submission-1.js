class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};

        for(const num of nums) {
            // {number: count}
            if(countMap[num] === undefined) {
                countMap[num] = 1;
            }
            else {
                countMap[num] += 1;
            }
        }

        const entries = Object.entries(countMap);
        console.log(entries)
        // Sort based on the count (the value at index 1)
        entries.sort((a, b) => b[1] - a[1]);

        // Get the first k elements and extract the key
        const result = entries.slice(0, k).map(entry => Number(entry[0]));

        return result;
    }
}
