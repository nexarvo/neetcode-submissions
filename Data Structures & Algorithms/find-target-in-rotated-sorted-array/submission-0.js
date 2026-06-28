class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if(nums[mid] === target) {
                return mid;
            }

            // check if left half is sorted
            // it is garenteed that either left or right half will be sorted
            if(nums[l] <= nums[mid]) {
                if(nums[l] <= target && nums[mid] >= target) {
                    r = mid - 1;
                }
                else {
                    l = mid + 1;
                }
            }
            else {
                if(nums[mid] <= target && nums[r] >= target) {
                    l = mid + 1;
                }
                else {
                    r = mid - 1;
                }
            }
        }

        return -1;
    }
}
