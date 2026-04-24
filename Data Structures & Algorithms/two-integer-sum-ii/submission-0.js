class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while(l < r) {
            const sum = numbers[l] + numbers[r];

            if(sum > target) {
                r -= 1;
            }
            else if(sum < target) {
                l += 1;
            }
            else {
                // Add 1 because the array is 1-indexed
                return [l + 1, r + 1];
            }
        }

        return [];
    }
}
