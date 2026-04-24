class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let repeatMap = {};
        let maxLength = 0;
        let l = 0;
        let r = 0;

        while(r < s.length) {
            if(repeatMap[s[r]] === undefined || repeatMap[s[r]] < l) { 
                // character : index
                repeatMap[s[r]] = r;
                const currentLength = r - l + 1;
                maxLength = Math.max(maxLength, currentLength); 
            }
            else {
                l = repeatMap[s[r]] + 1;
                repeatMap[s[r]] = r;
            }
            
            r++;
        }
        
        return maxLength;
    }
}
