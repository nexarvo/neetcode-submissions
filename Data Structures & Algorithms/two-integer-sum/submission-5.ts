class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const indexMap = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            // number : index
            indexMap.set(nums[i], i)
        }

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if(indexMap.get(diff) !== undefined && indexMap.get(diff) !== i) {
                return [indexMap.get(diff), i];
            }
        }

        return []
    }
}
