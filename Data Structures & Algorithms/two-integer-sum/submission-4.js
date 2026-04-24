class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexMap = {};

        for(let i = 0; i < nums.length; i++) {
            if(indexMap[nums[i]] === undefined) {
                // {number : index}
                indexMap[nums[i]] = i;
            }
        }

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if(indexMap[diff] !== undefined && indexMap[diff] !== i){
                return [i, indexMap[diff]];
            }
        }

        return []
    }
}
