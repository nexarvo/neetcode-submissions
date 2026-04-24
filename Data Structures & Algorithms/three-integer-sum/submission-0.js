class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        // sort nums in ascending order
        nums.sort((a, b) => a - b);

        for(let i = 0; i < nums.length; i++) {
            // Skip if previous === current
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while(l < r) {
                let threeSum = nums[i] + nums[l] + nums[r];

                if(threeSum > 0) {
                    r -= 1;
                }
                else if(threeSum < 0) {
                    l += 1;
                }
                else {
                    res.push([nums[i], nums[l], nums[r]]);

                    r--;
                    l++;

                    // Checking for dulpicates 
                    while(l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return res;
    }
}
