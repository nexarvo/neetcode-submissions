class Solution {

    isAlphanumeric(char): boolean {
        return (
            (char >= "A" && char <= "Z") ||
            (char >= "a" && char <= "z") ||
            (char >= "0" && char <= "9")
        );
    }


    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while(l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) {
                l++;
            }
            while (r > l && !this.isAlphanumeric(s[r])) {
                r--;
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase())
                return false;

            l++;
            r--;
        }

        return true;
    }
}
