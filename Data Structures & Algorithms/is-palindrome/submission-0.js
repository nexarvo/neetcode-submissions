class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l <= r) {
            while (l < r && !this.isAlphaNumeric(s[l])) {
                l++;
            }
            while (r > l && !this.isAlphaNumeric(s[r])) {
                r--;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }

    isAlphaNumeric(character) {
        return (character >= 'a' && character <= 'z') ||
            (character >= 'A' && character <= 'Z') ||
            (character >= '0' && character <= '9')
    }
}
