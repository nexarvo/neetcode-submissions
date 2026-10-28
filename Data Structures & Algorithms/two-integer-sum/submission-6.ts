class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const indexMap = new Map<number, number>();

        nums.forEach((num: number, index: number) => {
            indexMap.set(num, index);
        });

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if(indexMap.has(diff) && indexMap.get(diff) !== i) {
                return [i, indexMap.get(diff)]
            }
        }

        return [];
    }
}
