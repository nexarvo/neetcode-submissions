class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let min = nums[0];

        while(l <= r) {
            if(nums[l] <= nums[r]) {
                // This means that we are in sorted sub array
                // and we want the left most value
                // Like in [3, 4, 5, 6, 1, 2]
                // If nums[l] = 1 and nums [l] = 2 return 1
                min = Math.min(min, nums[l]);
                break;
            }

            let mid = l + Math.floor((r - l) / 2);
            min = Math.min(min, nums[mid]);

            if(nums[mid] >= nums[l])
                l = mid + 1;
            else
                r = mid - 1;

        }

        return min;
    }
}
