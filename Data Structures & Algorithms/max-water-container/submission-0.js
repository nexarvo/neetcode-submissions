class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let l = 0;
        let r = heights.length - 1;

        while(l < r) {
            // We want to compute the area of rectangle
            // And we will return the maximum area

            // We are taking min here because if one bar is less and
            // the other one in is greater than lesser one will be limiting
            // as the water will spill from there
            const area = Math.min(heights[l], heights[r]) * (r - l);
            res = Math.max(res, area);

            if(heights[l] < heights[r]) {
                l++;
            }
            else {
                // here we condense two conditions:
                // heights[l] > heights[r]
                // and heights[l] === heights[r] here we can increment l or decrement r, our choice
                r--;
            }
        }

        return res;
    }
}
