class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};

        for(const num of nums) {
            if(map[num] === undefined) {
                map[num] = 1;
            }
            else {
                map[num] = map[num] + 1;
            }
        }

        for(const key in map) {
            if(map[key] > 1) {
                return true;
            }
        }
        return false;
    }
}
