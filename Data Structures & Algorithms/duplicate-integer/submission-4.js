class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seenMap = {};

        for(const num of nums) {
            if(seenMap[num] !== undefined) {
                return true;
            }

            seenMap[num] = true;
        }

        return false;
    }
}
