class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length;
        const res = new Array(len).fill(1);

        let prefix = 1;
        for(let i = 0; i < len; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }

        let postfix = 1;
        for(let i = len - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }

        return res;
    }
}
