class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1: number[], nums2: number[]): number[][] {
        const result = [[], []];

        const num1Set = new Set(nums1);
        const num2Set = new Set(nums2);

        for (const num of num1Set) {
            if (!num2Set.has(num)) {
                result[0].push(num);
            }
        }

        for (const num of num2Set) {
            if (!num1Set.has(num)) {
                result[1].push(num);
            }
        }

        return result;
    }
}
